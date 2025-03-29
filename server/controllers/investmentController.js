const pdfkit = require('pdfkit');
const fs = require('fs');
const path = require('path');
const { getInvestmentsByUser } = require('../models/investmetModel'); // Fixed import typo

const generateInvestmentPDF = async (req, res) => {
    try {
        const { user_id } = req.query;

        if (!user_id) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        // Fetch investments from the database
        const investments = await getInvestmentsByUser(user_id);

        if (investments.length === 0) {
            return res.status(404).json({ error: 'No investments found for this user' });
        }

        // Create PDF document
        const doc = new pdfkit({ size: 'A4', margin: 50 });
        const pdfPath = path.join(__dirname, `investment_report_${user_id}.pdf`);
        const writeStream = fs.createWriteStream(pdfPath);

        doc.pipe(writeStream);

        // Add Title
        doc.fontSize(18).text(`Investment Report for User ID: ${user_id}`, { align: 'center' });
        doc.moveDown(2);

        // Define column positions
        const startX = 50;
        const colWidths = [140, 140, 100, 120]; // Widths for each column
        const startY = doc.y; // Store initial Y position

        // Draw Table Header
        doc.fontSize(14).fillColor('black').text('Stock Name', startX, startY, { width: colWidths[0] });
        doc.text('Amount Invested', startX + colWidths[0], startY, { width: colWidths[1] });
        doc.text('Return (%)', startX + colWidths[0] + colWidths[1], startY, { width: colWidths[2] });
        doc.text('Date', startX + colWidths[0] + colWidths[1] + colWidths[2], startY, { width: colWidths[3] });

        doc.moveDown(1); // Small space before data rows

        // Draw investments
        investments.forEach((investment) => {
            const formattedDate = new Date(investment.investment_date).toLocaleDateString();
            const rowY = doc.y; // Keep all text on the same Y-axis

            doc.fontSize(12).text(investment.stock_name, startX, rowY, { width: colWidths[0] });
            doc.text(`${investment.amt_invested} Rs`, startX + colWidths[0], rowY, { width: colWidths[1] });
            doc.text(`${investment.return}%`, startX + colWidths[0] + colWidths[1], rowY, { width: colWidths[2] });
            doc.text(formattedDate, startX + colWidths[0] + colWidths[1] + colWidths[2], rowY, { width: colWidths[3] });

            doc.moveDown(0.70);
        });

        // Finish PDF
        doc.end();

        // Send PDF file after it's created
        writeStream.on('finish', () => {
            res.download(pdfPath, `investment_report_${user_id}.pdf`, (err) => {
                if (err) console.error('Error sending PDF:', err);
                fs.unlinkSync(pdfPath); // Delete the file after successful download
            });
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { generateInvestmentPDF };
