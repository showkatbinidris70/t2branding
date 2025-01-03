import React, { useEffect } from 'react'

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import AboutImg from '../assets/images/676317f18dd885da5fcf9a5b_Mask group.svg';
// staff
import StaffImg01 from '../assets/images/staff-1.png'
import StaffImg02 from '../assets/images/staff-2.png'
import StaffImg03 from '../assets/images/staff-3.png'
import StaffImg04 from '../assets/images/staff-4.png'

// brand logo
import BrandLog_1 from '../assets/images/brand-1.svg'
import BrandLog_2 from '../assets/images/brand-2.svg'
import BrandLog_3 from '../assets/images/brand-3.svg'
import BrandLog_4 from '../assets/images/brand-4.svg'
import BrandLog_5 from '../assets/images/brand-5.svg'

import PartnerImg from '../assets/images/partner.svg'

export default function About() {
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

      {/* client logo start */}
      <section className='my-[100px] hidden'>
        <div className=' mx-auto'>
          <div className="slider">
            <div className="slide-track">
              <div className="slide mx-[50px] h-[40px]">
                <img
                  src={BrandLog_1} className='w-full h-full bg-bgColor' alt=""
                />
              </div>
              <div className="slide mx-[50px] h-[40px]">
                <img
                  src={BrandLog_2} className='w-full h-full bg-bgColor' alt=""
                />
              </div> <div className="slide mx-[50px] h-[40px]">
                <img
                  src={BrandLog_3} className='w-full h-full bg-bgColor' alt=""
                />
              </div> <div className="slide mx-[50px] h-[40px]">
                <img
                  src={BrandLog_4} className='w-full h-full bg-bgColor' alt=""
                />
              </div> <div className="slide mx-[50px] h-[40px]">
                <img
                  src={BrandLog_5} className='w-full h-full bg-bgColor' alt=""
                />
              </div> <div className="slide mx-[50px] h-[40px]">
                <img
                  src={BrandLog_1} className='w-full h-full bg-bgColor' alt=""
                />
              </div> <div className="slide mx-[50px] h-[40px]">
                <img
                  src={BrandLog_2} className='w-full h-full bg-bgColor' alt=""
                />
              </div> <div className="slide mx-[50px] h-[40px]">
                <img
                  src={BrandLog_3} className='w-full h-full bg-bgColor' alt=""
                />
              </div> <div className="slide mx-[50px] h-[40px]">
                <img
                  src={BrandLog_4} className='w-full h-full bg-bgColor' alt=""
                />
              </div> <div className="slide mx-[50px] h-[40px]">
                <img
                  src={BrandLog_5} className='w-full h-full bg-bgColor' alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* client logo end */}

      {/* about section start */}
      <section className="w-screen" data-aos="fade-up" data-aos-duration="500">
        <div className="container mx-auto">
          <div className='border border-b border-[#2b2929] border-s-0 border-t-0'>
            <div className="flex items-center gap-2 mb-3 text-white">
              <p className='bg-bgColor font-jakarta font-normal text-base text-white'>About</p>
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


      {/* counter start */}
      <section className='counter-section my-24' data-aos="fade-up" data-aos-duration="500">
        <div className="container">
          <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5">
            <div className='mx-auto'>
              <div className="relative">
                <div>
                  <h2 className="bg-bgColor font-jakarta font-bold text-stroke text-[100px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] text-transparent">5k+</h2>
                </div>
                <div className="absolute inset-0 flex items-center justify-start">
                  <h4 className="font-Manrope text-[12px] sm:text-[16px] md:text-[20px] text-white bg-[#1b1b1b]">
                    Awesome clients
                  </h4>
                </div>
              </div>
            </div>
            <div className='mx-auto'>
              <div className="relative">
                <div>
                  <h2 className="bg-bgColor font-jakarta font-bold text-stroke text-[100px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] text-transparent">2b+</h2>
                </div>
                <div className="absolute inset-0 flex items-center justify-start">
                  <h4 className="font-Manrope text-[12px] sm:text-[16px] md:text-[20px] text-white bg-[#1b1b1b]">
                    Earings a year
                  </h4>
                </div>
              </div>
            </div>
            <div className='mx-auto'>
              <div className="relative">
                <div>
                  <h2 className="bg-bgColor font-jakarta font-bold text-stroke text-[100px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] text-transparent">500+</h2>
                </div>
                <div className="absolute inset-0 flex items-center justify-start">
                  <h4 className="font-Manrope text-[12px] sm:text-[16px] md:text-[20px] text-white bg-[#1b1b1b]">
                    Created projects
                  </h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section >
      {/* counter end */}

      {/* team start */}
      < section className='team' data-aos="fade-up" data-aos-duration="500" >
        <div className="container">
          <div className='mt-[40px] border border-b border-[#2b2929] border-s-0 border-t-0'>
            <div className="flex items-center gap-2 mb-4 text-white">
              <p className='bg-bgColor font-jakarta font-normal text-base'>Team</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='max-w-[377px]'>
              <h2 className='bg-bgColor font-jakarta font-bold text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] mt-4 leading-none text-white'>Meet our
                <span className='bg-bgColor font-jakarta font-normal'> creative staff</span></h2>
            </div>
            <div className=''>
              <div className="relative">
                <div>
                  <h2 className="bg-bgColor font-jakarta font-bold text-stroke text-[70px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] text-transparent">20+</h2>
                </div>
                <div className="absolute inset-0 flex items-center justify-start">
                  <h4 className="font-Manrope text-[12px] sm:text-[16px] md:text-[20px] text-white bg-[#1b1b1b]">
                    Team Member
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 py-12'>
            <div data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={StaffImg01} alt="" className='bg-white w-full h-full' /></div>
              <div className='bg-bgColor'>
                <h4 className='font-manrope font-normal text-[#ACACAC] mt-5 text-[20px]'>/CEO</h4>
                <h4 className='font-manrope font-bold text-[20px] text-white font-bold'>Syed Shihab</h4>
              </div>
            </div>
            <div className='mt-[50px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={StaffImg02} alt="" className='bg-white w-full h-full' /></div>
              <div className='bg-bgColor'>
                <h4 className='font-manrope font-normal text-[#ACACAC] mt-5 text-[20px]'>/Senior Designer</h4>
                <h4 className='font-Manrope text-[20px] text-white font-bold'>Abdullah Al Mamun</h4>
              </div>
            </div>
            <div className='' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={StaffImg03} alt="" className='bg-white w-full h-full pt-[10px]' /></div>
              <div className='bg-bgColor'>
                <h4 className='font-manrope font-normal text-[#ACACAC] mt-5 text-[20px]'>/Senior Designer</h4>
                <h4 className='font-Manrope text-[20px] text-white font-bold'>Showkat Ali</h4>
              </div>
            </div>
            <div className='mt-[50px]' data-aos="fade-up" data-aos-duration="500">
              <div>  <img src={StaffImg04} alt="" className='bg-white w-full h-full' /></div>
              <div className='bg-bgColor'>
                <h4 className='font-manrope font-normal text-[#ACACAC] mt-5 text-[20px]'>/Wordpress Developer</h4>
                <h4 className='font-Manrope text-[20px] text-white font-bold'>Md Shofiul Alam</h4>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* team end */}

      <section className="w-screen" data-aos="fade-up" data-aos-duration="500">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col gap-[50px] py-[114px] ">
            <div className='w-full md:w-[60%]'>
              <h2 className='bg-bgColor font-jakarta font-normal text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] leading-none text-white'> High level of <span className='font-jakarta italic font-extralight'> our competence</span></h2>
              <div className='text-xl font-jakarta text-white mt-5'>
                <div className='mt-8'>
                  <div className='flex justify-between items-center'>
                    <div>Creative Development</div>
                    <div>83%</div>
                  </div>
                  <div className='w-[83%] border-b border-4 border-[#F44904] mt-5'></div>
                  <div className='w-full border-b border-1 border-[#ffffff] mt-2'></div>
                </div>
                <div className='mt-8'>
                  <div className='flex justify-between items-center'>
                    <div>Branding</div>
                    <div>95%</div>
                  </div>
                  <div className='w-[83%] border-b border-4 border-[#F44904] mt-5'></div>
                  <div className='w-full border-b border-1 border-[#ffffff] mt-2'></div>
                </div>
                <div className='mt-8'>
                  <div className='flex justify-between items-center'>
                    <div>UI/UX design</div>
                    <div>97%</div>
                  </div>
                  <div className='w-[83%] border-b border-4 border-[#F44904] mt-5'></div>
                  <div className='w-full border-b border-1 border-[#ffffff] mt-2'></div>
                </div>
                <div className='mt-8'>
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

      {/* partner */}
      <section className='partner' data-aos="fade-up" data-aos-duration="500">
        <div className="container">
          <div className='mt-[40px] border border-b border-[#2b2929] border-s-0 border-t-0'>
            <div className="flex items-center gap-2 mb-4 text-white">
              <p className='bg-bgColor font-jakarta font-normal text-base'>Team</p>
            </div>
          </div>
          <div className='flex justify-end'><h4 className='bg-bgColor font-Manrope text-bold text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white hover:text-[#F44904]'>Partner</h4></div>
          {/* client logo start */}
          <section className='py-[100px]'>
            <div className=' mx-auto'>
              <div className="slider">
                <div className="slide-track">
                  <div className="slide mx-[50px] h-[40px]">
                    <img
                      src={BrandLog_1} className='w-full h-full bg-bgColor' alt=""
                    />
                  </div>
                  <div className="slide mx-[50px] h-[40px]">
                    <img
                      src={BrandLog_2} className='w-full h-full bg-bgColor' alt=""
                    />
                  </div> <div className="slide mx-[50px] h-[40px]">
                    <img
                      src={BrandLog_3} className='w-full h-full bg-bgColor' alt=""
                    />
                  </div> <div className="slide mx-[50px] h-[40px]">
                    <img
                      src={BrandLog_4} className='w-full h-full bg-bgColor' alt=""
                    />
                  </div> <div className="slide mx-[50px] h-[40px]">
                    <img
                      src={BrandLog_5} className='w-full h-full bg-bgColor' alt=""
                    />
                  </div> <div className="slide mx-[50px] h-[40px]">
                    <img
                      src={BrandLog_1} className='w-full h-full bg-bgColor' alt=""
                    />
                  </div> <div className="slide mx-[50px] h-[40px]">
                    <img
                      src={BrandLog_2} className='w-full h-full bg-bgColor' alt=""
                    />
                  </div> <div className="slide mx-[50px] h-[40px]">
                    <img
                      src={BrandLog_3} className='w-full h-full bg-bgColor' alt=""
                    />
                  </div> <div className="slide mx-[50px] h-[40px]">
                    <img
                      src={BrandLog_4} className='w-full h-full bg-bgColor' alt=""
                    />
                  </div> <div className="slide mx-[50px] h-[40px]">
                    <img
                      src={BrandLog_5} className='w-full h-full bg-bgColor' alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* client logo end */}
        </div>
      </section>

      <div className='absolute ml-[5%] pl-[90%] sm:ml-[3%] sm:pl-[95%] md:pl-[35%] lg:ml-[2%] lg:pl-[35%] xl:ml-[16%] xl:pl-[22.5%] md:border-s md:border-e md:border-[#2b2929] -z-10' style={{ top: 0, left: 0, end: 0, bottom: 0 }}></div>
    </div >
  )
}
