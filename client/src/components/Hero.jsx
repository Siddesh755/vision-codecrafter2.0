import RotatingText from '../components/RotatingText';
import SimpleLineChart from '../components/analytics/SimpleLineChart';
import { useNavigate } from "react-router-dom";



const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login"); // Replace with your route
  };

  return (
    <div className=' bg-gradient-to-b z-50 from-[#10002B] to-[#E0AAFF]'>
        
        <section className="h-screen text-[#C77DFF] py-32">
        <div className="container mx-auto text-center">
         
            <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto">
              Why put all your capital in one asset? When you can
            </p>
            <h1 className="text-4xl md:text-6xl font-bold">
              Invest in
              {' '}
              <RotatingText
                texts={["Stocks", "Bonds", "Mutual Funds", "Insurance", "Foreign Stocks"]}
                mainClassName="px-3 py-2 bg-[#E0AAFF] text-[#10002B] inline-block rounded-lg z-20"
                staggerFrom="center"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.08}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h1>
            <p className="text-xl md:text-2xl mt-4 mb-4 max-w-2xl text-[#E2ADFF] mx-auto">
              With VisionInvest
            </p>
            
           

   
             <button onClick={handleClick} className="bg-[#10002b] text-[#FFFFFF] px-8 py-3 rounded-lg font-semibold">
                Get Started
             </button>


         
          <SimpleLineChart />
          
        </div>
      </section>
        
    <div > 
      
      
    </div>
    </div>
  );
};

export default Hero;