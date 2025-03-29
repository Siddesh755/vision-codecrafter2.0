import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

//image
import bsvg from "../assets/b.svg";
import fssvg from "../assets/fs.svg";
import isvg from "../assets/i.svg";
import mfsvg from "../assets/mf.svg";
import ssvg from "../assets/s.svg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Feature = () => {
  const progressBarRef = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${(1 - progress) * 100}%`;
    }
  };

  return (
    <div className=" bg-[#E0AAFF] relative py-24">
      <Swiper
        className="progress-slide-carousel relative  w-full h-screen bg-[#E0AAFF] "
        modules={[Pagination, Autoplay]}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide>
          <div className=" bg-[#E0AAFF] h-96  p-40 flex justify-between items-center">
          <img src={ssvg} alt="stocks" class="w-96 h-96" />
            <div className='w-6/12'>
            
          <span className="text-3xl font-semibold text-indigo-600">
            "Stocks"
            </span>
            <pr className="text-2xl"> represent ownership shares in a company, giving investors a claim on its assets and earnings. They are traded on stock exchanges like the NYSE and NSE, where prices fluctuate based on supply, demand, and market conditions. Investors buy stocks to earn returns through price appreciation and dividends. Stock markets are influenced by economic factors, corporate performance, and global events.</pr>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[#E0AAFF] h-96 p-40  flex justify-between items-center">
          <img src={mfsvg} alt="mutual funds" class="w-96 h-96" />
            <div className='w-6/12 '>
           
            <span className=" font-semibold text-indigo-600 text-5xl ">
            "Mutual Funds"
            </span>
            
            <pr className="text-2xl"> are investment vehicles that pool money from multiple investors to buy a diversified portfolio of stocks, bonds, or other assets. They are managed by professional fund managers and offer benefits like diversification, liquidity, and ease of investment. Mutual funds can be actively or passively managed, with varying risk levels based on their asset allocation. They are ideal for long-term wealth creation and financial planning.</pr>
           </div>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#E0AAFF]  h-96 p-40 flex justify-between items-center">
          <img src={bsvg} alt="bonds" class="w-96 h-96" />
          <div className='w-6/12'>
            <span className=" font-semibold text-indigo-600 text-5xl">
            "Bonds"
            </span>
            <pr className="text-2xl"> are fixed-income securities that represent a loan made by an investor to a government or corporation. They pay periodic interest (coupon payments) and return the principal amount at maturity. Bonds are considered safer than stocks but offer lower returns. Their prices fluctuate based on interest rates, credit ratings, and market conditions.</pr>
            </div>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#E0AAFF]  h-96 p-40  flex justify-between items-center">
          <img src={isvg} alt="insurance" class="w-96 h-96" />
          <div className='w-6/12'>
          
            <span className=" font-semibold text-indigo-600 text-5xl">
            "Insurance"
            </span>
            <pr className="text-2xl"> is a financial contract that provides protection against financial losses due to unforeseen events like accidents, illnesses, or disasters. Policyholders pay premiums to an insurer, who in return offers compensation for covered risks. Common types include health, life, auto, and property insurance. It helps individuals and businesses manage risks and ensures financial stability.</pr>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#E0AAFF]  h-96 p-40 flex justify-between items-center">
          <img src={fssvg} alt="fs" class="w-96 h-96" />
          <div className='w-6/12'>
            <span className=" font-semibold text-indigo-600 text-5xl ">
            "Foreign Stocks"
            </span>
            <pr className="text-2xl"> are shares of companies that are based outside an investor's home country. They offer opportunities for diversification and exposure to global markets. Investors can buy them through international stock exchanges, mutual funds, or exchange-traded funds (ETFs). However, they come with risks like currency fluctuations, political instability, and regulatory differences.</pr>
            </div>
           
          </div>
        </SwiperSlide>
        

        {/* Progress Bar */}
        
      </Swiper>

      {/* Pagination */}
      
    </div>
  );
};

export default Feature;