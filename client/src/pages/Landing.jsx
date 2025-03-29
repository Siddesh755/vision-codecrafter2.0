// pages/index.js or App.js
import AboutUs from '../components/AboutUs';

import Feature from '../components/Feature';
import Footer from '../components/Footer';
import LandingNavbar from '../components/LandingNavbar';



import Hero from '../components/Hero';


export default function LandingPage() {
  return (
   <div>
    
    <div>
      <LandingNavbar/>
    </div>
    <div className=" items-center justify-center ">
      <Hero/>
      <div className="p-4 bg-[#E0AAFF]">
        
      </div>
      <div>
        <Feature/>
      </div>
      <AboutUs/>
      <div>
        <Footer/>
      </div>
    </div>
    </div>
  );
}