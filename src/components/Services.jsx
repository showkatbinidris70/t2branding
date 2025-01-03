import React, {useEffect} from 'react'
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutImg from '../assets/images/676317f18dd885da5fcf9a5b_Mask group.svg';
import { FiArrowDownRight } from "react-icons/fi";

import PartnerImg from '../assets/images/partner.svg'



export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Set the duration for the animation (optional)
      once: true, // Animation will happen only once (optional)
    });
  }, []);
  return (
    <div className='relative z-10'>
      {/* hero section start */}
      <section className="w-screen">
        <div className="container pt-[188px] pb-[211px]">
          <h2 className='bg-bgColor font-jakarta font-normal text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] leading-none text-white'> T2 <span className='font-jakarta italic font-extralight'> Services</span></h2>
        </div>
      </section>
      {/* hero section end */}

      {/* service start */}
      <section id='services' data-aos="fade-up" data-aos-duration="500">
        <div className="container">
          <div className='mt-[40px] border border-b border-[#2b2929] border-s-0 border-t-0'>
            <div className="flex items-center gap-2 mb-4 text-white">
              <p className='bg-bgColor font-jakarta font-normal text-base'>Services</p>
            </div>
          </div>
          <div className='max-w-[752px]'>
            <h2 className='bg-bgColor font-jakarta font-bold text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] mt-4 leading-none text-white bg-bgColor'>Most experienced services</h2>
          </div>
          <div className='w-full md:ps-[40%] mt-6'>
            <div className='flex items-center justify-between border-b border-t border-[#2b2929] py-4 text-white  hover:text-[#F44904]'>
              <div><h4 className='bg-bgColor text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] '>.01/</h4></div>
              <div><h4 className='bg-bgColor font-manrope font-bold text-[20px] md:text-[28px] lg:text-[36px] xl:text-[40px]'>UI/UX Design</h4></div>
              <div><FiArrowDownRight className='w-10 h-10 md:w-12 md:h-12 bg-bgColor' /> </div>
            </div>
            <div className='flex items-center justify-between border-b border-[#2b2929] py-4 text-white  hover:text-[#F44904]'>
              <div><h4 className='bg-bgColor text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px]'>.02/</h4></div>
              <div><h4 className='bg-bgColor font-manrope font-bold text-[20px] md:text-[28px] lg:text-[36px] xl:text-[40px]'>Branding Design</h4></div>
              <div><FiArrowDownRight className='w-10 h-10 md:w-12 md:h-12 bg-bgColor' /> </div>
            </div>
            <div className='flex items-center justify-between border-b border-[#2b2929] py-4 text-white  hover:text-[#F44904]'>
              <div><h4 className='bg-bgColor text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px]'>.03/</h4></div>
              <div><h4 className='bg-bgColor font-manrope font-bold text-[20px] md:text-[28px] lg:text-[36px] xl:text-[40px] '>Video Editing</h4></div>
              <div><FiArrowDownRight className='w-10 h-10 md:w-12 md:h-12 bg-bgColor' /> </div>
            </div>
            <div className='flex items-center justify-between border-b border-[#2b2929] py-4 text-white  hover:text-[#F44904]'>
              <div><h4 className='bg-bgColor text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px]'>.04/</h4></div>
              <div><h4 className='bg-bgColor font-manrope font-bold text-[20px] md:text-[28px] lg:text-[36px] xl:text-[40px]'>Marketing Strategy</h4></div>
              <div><FiArrowDownRight className='w-10 h-10 md:w-12 md:h-12 bg-bgColor' /> </div>
            </div>

          </div>
        </div>
      </section>
      {/* service end */}

      {/* about section start */}
      <section className="w-screen" data-aos="fade-up" data-aos-duration="500">
        <div className="container mx-auto">
          <div className='border border-b border-[#2b2929] border-s-0 border-t-0'>
            <div className="flex items-center gap-2 mb-3 text-white">
              <p className='bg-bgColor font-jakarta font-normal text-base text-white'>Our Services</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-[10px] md:gap-[10px] lg:gap-[10px] xl:gap-[10px] py-[114px] ">
            <div className='w-full md:w-[38%]'>
              <div className="w-full overflow-hidden ml-[0%] md:-ml-[10%]" data-aos="fade-right" data-aos-duration="500">
                <img src={AboutImg} className="w-full h-auto block" alt="About" />
              </div>
            </div>
            <div className='w-full md:w-[62%]'>
              <div className='flex items-end h-full '>
                <div className='w-full'>
                  <h2 className='bg-bgColor font-jakarta font-bold text-[36px] w-full sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] leading-none text-white'>Best <span className='font-jakarta italic font-extralight'>creative & modern</span> agency</h2>
                  <p className='bg-bgColor font-manrope font-normal text-sm text-white leading-[30px] mt-[25px] py-5'>Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark atlantic Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about section end */}

      <section className="w-screen" data-aos="fade-up" data-aos-duration="500">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col gap-[50px] py-[114px] ">
            <div className='w-full md:w-[60%]'>
              <h2 className='bg-bgColor font-jakarta font-normal text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] leading-none text-white'> High level of <span className='font-jakarta italic font-extralight'> our competence</span></h2>
              <div className='text-xl font-jakarta text-white mt-5'>
                <div className='mt-8' data-aos="fade-up" data-aos-duration="500">
                  <div className='flex justify-between items-center'>
                    <div>Creative Development</div>
                    <div>83%</div>
                  </div>
                  <div className='w-[83%] border-b border-4 border-[#F44904] mt-5'></div>
                  <div className='w-full border-b border-1 border-[#ffffff] mt-2'></div>
                </div>
                <div className='mt-8' data-aos="fade-up" data-aos-duration="500">
                  <div className='flex justify-between items-center'>
                    <div>Branding</div>
                    <div>95%</div>
                  </div>
                  <div className='w-[83%] border-b border-4 border-[#F44904] mt-5'></div>
                  <div className='w-full border-b border-1 border-[#ffffff] mt-2'></div>
                </div>
                <div className='mt-8' data-aos="fade-up" data-aos-duration="500">
                  <div className='flex justify-between items-center'>
                    <div>UI/UX design</div>
                    <div>97%</div>
                  </div>
                  <div className='w-[83%] border-b border-4 border-[#F44904] mt-5'></div>
                  <div className='w-full border-b border-1 border-[#ffffff] mt-2'></div>
                </div>
                <div className='mt-8' data-aos="fade-up" data-aos-duration="500">
                  <div className='flex justify-between items-center'>
                    <div>Data analitics</div>
                    <div>92%</div>
                  </div>
                  <div className='w-[83%] border-b border-4 border-[#F44904] mt-5'></div>
                  <div className='w-full border-b border-1 border-[#ffffff] mt-2'></div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-[40%]'>
              <div className='flex justify-center items-end h-full'>
                <img src={PartnerImg} className='w-full lg:w-[80%]' alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='absolute ml-[5%] pl-[90%] sm:ml-[3%] sm:pl-[95%] md:pl-[35%] lg:ml-[2%] lg:pl-[35%] xl:ml-[16%] xl:pl-[22.5%] md:border-s md:border-e md:border-[#2b2929] -z-10' style={{ top: 0, left: 0, end: 0, bottom: 0 }}></div>
    </div >
  )
}
