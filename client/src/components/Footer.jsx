import React from 'react'

function Footer() {
  return (
    

<footer class=" bg-[#10002B]">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between ">
          <div class="mb-6 md:mb-0">
              <a href="" class="flex items-center">
                  {/* <img src="" class="h-8 me-3" alt="VisionInvest" /> */}
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VisionInvest</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              
              <div>
                  
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/A1YAARY/vision-codecrafter2.0" class="hover:underline ">Github</a>
                      </li>
                      
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold  uppercase dark:text-white">Our Team</h2>
                  <li>
                          <a href="https://github.com/sidd-pixel" class="hover:underline text-white">Siddhant Thakur</a>
                      </li>
                      <li>
                          <a href="https://github.com/Siddesh755" class="hover:underline text-white">Siddeesh Navthale</a>
                      </li>
                      <li>
                          <a href="https://github.com/aryanmore33" class="hover:underline text-white">Aryan More</a>
                      </li>
                  <li>
                          <a href="https://github.com/A1YAARY" class="hover:underline text-white">Harsh Poojary</a>
                      </li>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          
          
      </div>
    </div>
</footer>

  )
}

export default Footer