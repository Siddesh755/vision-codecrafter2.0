import React from 'react'

function AboutUs() {
  return (
    <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0  bg-gradient-to-t from-[#10002B] to-[#E0AAFF]">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto ">
        <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div class="w-full flex-col justify-center items-start gap-8 flex">
                    <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h1 class="text-[#10002B] leading-relaxed text-4xl font-bold">About Us</h1>
                        <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2
                                class="text-[#240046] text-2xl font-bold font-manrope leading-normal lg:text-start text-center">
                                Empowering Your Financial Future with VisionInvest</h2>
                            <p
                                class="text-[#C77DFF]  text-xl leading-relaxed lg:text-start text-center">
                               VisionInvest is your all-in-one investment portal, empowering you to manage stocks, bonds, insurance, and foreign investments with ease. We offer tools for buying and selling assets, personalized investment suggestions, stock analysis, and profit estimation—all designed to simplify wealth-building. Founded on innovation and transparency, we’re here to help you turn your financial vision into reality.</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div class="w-full lg:justify-start justify-center items-start flex">
                <div
                    class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-[#7B2CBF] rounded-3xl sm:border border-gray-200 relative">
                    <img class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                        src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
                </div>
            </div>
        </div>
    </div>
</section>
                                        
  )
}

export default AboutUs