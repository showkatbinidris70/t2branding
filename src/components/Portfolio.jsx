import React, { useEffect } from 'react'
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FiArrowUpRight } from "react-icons/fi";

// Portfilio
import image1 from '../assets/images/image1.svg';
import image2 from '../assets/images/image2.svg';
import image3 from '../assets/images/image3.svg';
import image4 from '../assets/images/image4.svg';
import image5 from '../assets/images/image5.svg';
import image6 from '../assets/images/image6.svg';
import image7 from '../assets/images/image7.svg';
import image8 from '../assets/images/image8.svg';
import image9 from '../assets/images/image9.svg';
import image10 from '../assets/images/image10.svg';
import image11 from '../assets/images/image11.svg';
import image12 from '../assets/images/image12.svg';
import image13 from '../assets/images/image13.svg';
import image14 from '../assets/images/image14.svg';
import image15 from '../assets/images/image15.svg';
import image16 from '../assets/images/image16.svg';



export default function Portfolio() {
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
          <h2 className='bg-bgColor font-jakarta font-normal text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] leading-none text-white'> T2 <span className='font-jakarta italic font-extralight'> Branding</span></h2>
        </div>
      </section>
      {/* hero section end */}

      <section className='portfolio pb-[106px]' data-aos="fade-up" data-aos-duration="500">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className='border-b bordr-[#727272] mb-[38px]'>
              <div>  <img src={image1} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image2} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image3} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image4} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image5} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image6} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image7} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image8} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image9} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image10} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image11} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image12} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image13} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image14} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image15} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>
            <div className='border-b bordr-[#727272] mb-[38px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={image16} alt="" className='w-full' /></div>
              <div className='mt-[38px]'>
                <p className='bg-bgColor font-Manrope text-bold text-[13px] text-white hover:text-[#F44904]'>/branding</p>
                <div className='flex justify-between items-center text-white hover:text-[#F44904] mb-1'>
                  <h4 className='bg-bgColor font-Manrope text-bold text-lg'>Newtro Brand Design</h4>
                  <FiArrowUpRight className='text-4xl' />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className='absolute ml-[5%] pl-[90%] sm:ml-[3%] sm:pl-[95%] md:pl-[35%] lg:ml-[2%] lg:pl-[35%] xl:ml-[16%] xl:pl-[22.5%] md:border-s md:border-e md:border-[#2b2929] -z-10' style={{ top: 0, left: 0, end: 0, bottom: 0 }}></div>
    </div >
  )
}
