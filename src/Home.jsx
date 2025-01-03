import React, { useEffect } from "react";
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import AboutImg from './assets/images/676317f18dd885da5fcf9a5b_Mask group.svg';
import HeroImg from './assets/images/hero.svg'
// staff
import StaffImg01 from './assets/images/staff-1.png'
import StaffImg04 from './assets/images/staff-4.png'
import TeamImg1 from './assets/images/team.svg'
import TeamImg2 from './assets/images/team2.svg'

// brand logo
import BrandLog_1 from './assets/images/brand-1.svg'
import BrandLog_2 from './assets/images/brand-2.svg'
import BrandLog_3 from './assets/images/brand-3.svg'
import BrandLog_4 from './assets/images/brand-4.svg'
import BrandLog_5 from './assets/images/brand-5.svg'

// portfolio images
import PortfolioImg1 from './assets/images/portfolio-1.svg'
import PortfolioImg2 from './assets/images/portfolio-2.svg'
import PortfolioImg3 from './assets/images/portfolio-3.svg'
import PortfolioImg4 from './assets/images/portfolio-4.svg'

// testimonial images
import testimonialImg_1 from './assets/images/testimonial.svg'
import testimonialImg_2 from './assets/images/testimonial.png'
import testimonialQuote_3 from './assets/images/testimonial_icon.svg'
import { FiArrowDownRight } from 'react-icons/fi';


export default function Home() {
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
                <div className="flex md:flex-row flex-col gap-[30px] md:gap-[10px] lg:gap-[40px] xl:gap-[50px] py-5 ">
                    <div className='w-full md:w-[40%]'>
                        <div className="w-full overflow-hidden">
                            <img src={HeroImg} className="w-full h-auto block" alt="About" />
                        </div>
                    </div>
                    <div className='w-full md:w-[60%]'>
                        <div className='flex items-end w-full h-full px-2 md:px-0'>
                            <div className='max-w-[566px]'>
                                <h1 className='bg-bgColor font-jakarta font-bold sm:text-[52px] md:text-[80px] lg:text-[120px] xl:text-[150px] leading-none text-white'>Real</h1>
                                <h2 className='bg-bgColor font-jakarta font-normal text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] leading-none text-white'><span className='font-jakarta italic font-extralight'>Solution</span> for Your <span className='font-jakarta italic font-extralight'> Business</span>.</h2>
                                <p className='bg-bgColor font-manrope font-normal text-sm text-white leading-[30px] py-5'>Mummichog paradise fish! Triggerfish bango guppy opah sunfish bluntnose knifefish upside down catfish cobia spookfish convict.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* hero section end */}

            {/* client logo start */}
            <section className='my-[100px]' >
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
            <section className="w-screen"  data-aos="fade-up" data-aos-duration="500">
                <div className="container mx-auto">
                    <div className="flex md:flex-row flex-col gap-[10px] md:gap-[10px] lg:gap-[10px] xl:gap-[10px] py-5 ">
                        <div className='w-full md:w-[38%]'>
                            <div className="w-full overflow-hidden ml-[0%] md:-ml-[10%]">
                                <img src={AboutImg} className="w-full h-auto block" alt="About" data-aos="fade-right" data-aos-duration="500" />
                            </div>
                        </div>
                        <div className='w-full md:w-[62%]'  data-aos="fade-left" data-aos-duration="500">
                            <div className='mt-[40px] border border-b border-[#2b2929] border-s-0 border-t-0'>
                                <div className="flex items-center gap-2 mb-3 text-white">
                                    <p className='bg-bgColor font-jakarta font-normal text-base text-white'>About</p>
                                </div>
                            </div>
                            <div className='w-full mt-[33px]'>
                                <h2 className='bg-bgColor font-jakarta font-bold text-[36px] w-full sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] leading-none text-white'>Best <span className='font-jakarta italic font-extralight'>creative & modern</span> agency</h2>
                                <p className='bg-bgColor font-manrope font-normal text-sm text-white leading-[30px] mt-[25px] py-5'>Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark atlantic Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about section end */}

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
                        <div className='flex items-center justify-between border-b border-t border-[#2b2929] py-4 text-white  hover:text-[#F44904]'  data-aos="fade-up" data-aos-duration="500">
                            <div><h4 className='bg-bgColor text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] '>.01/</h4></div>
                            <div><h4 className='bg-bgColor font-manrope font-bold text-[20px] md:text-[28px] lg:text-[36px] xl:text-[40px]'>UI/UX Design</h4></div>
                            <div><FiArrowDownRight className='w-10 h-10 md:w-12 md:h-12 bg-bgColor' /> </div>
                        </div>
                        <div className='flex items-center justify-between border-b border-[#2b2929] py-4 text-white  hover:text-[#F44904]'  data-aos="fade-up" data-aos-duration="500">
                            <div><h4 className='bg-bgColor text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px]'>.02/</h4></div>
                            <div><h4 className='bg-bgColor font-manrope font-bold text-[20px] md:text-[28px] lg:text-[36px] xl:text-[40px]'>Branding Design</h4></div>
                            <div><FiArrowDownRight className='w-10 h-10 md:w-12 md:h-12 bg-bgColor' /> </div>
                        </div>
                        <div className='flex items-center justify-between border-b border-[#2b2929] py-4 text-white  hover:text-[#F44904]'  data-aos="fade-up" data-aos-duration="500">
                            <div><h4 className='bg-bgColor text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px]'>.03/</h4></div>
                            <div><h4 className='bg-bgColor font-manrope font-bold text-[20px] md:text-[28px] lg:text-[36px] xl:text-[40px] '>Video Editing</h4></div>
                            <div><FiArrowDownRight className='w-10 h-10 md:w-12 md:h-12 bg-bgColor' /> </div>
                        </div>
                        <div className='flex items-center justify-between border-b border-[#2b2929] py-4 text-white  hover:text-[#F44904]'  data-aos="fade-up" data-aos-duration="500">
                            <div><h4 className='bg-bgColor text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px]'>.04/</h4></div>
                            <div><h4 className='bg-bgColor font-manrope font-bold text-[20px] md:text-[28px] lg:text-[36px] xl:text-[40px]'>Marketing Strategy</h4></div>
                            <div><FiArrowDownRight className='w-10 h-10 md:w-12 md:h-12 bg-bgColor' /> </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* service end */}

            {/* counter start */}
            <section className='counter-section my-24'  data-aos="fade-up" data-aos-duration="500">
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

            {/* portfolio star */}
            <section className='portfolio'  data-aos="fade-up" data-aos-duration="500">
                <div className="container">
                    <div className='mt-[40px] border border-b border-[#2b2929] border-s-0 border-t-0'>
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <p className='bg-bgColor font-jakarta font-normal text-base'>Portfolio</p>
                        </div>
                    </div>
                    <div className='text-end'><h4 className='bg-bgColor font-jakarta font-bold mt-1 text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>Projects</h4></div>
                    <div className='grid sm:grid-cols-2 gap-11 mt-[58px]'>
                        <div data-aos="fade-right" data-aos-duration="500">
                            <div>
                                <img src={PortfolioImg1} className='w-full' alt="" />
                            </div>
                            <div className='mt-[30px] mb-[105px]'>
                                <p className='bg-bgColor font-Manrope text-bold text-[20px] text-white hover:text-[#F44904]'>/branding</p>
                                <div><h4 className='bg-bgColor font-Manrope text-bold text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white hover:text-[#F44904]'>Newtro Brand Design</h4></div>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="500">
                            <div>
                                <img src={PortfolioImg2} className='w-full' alt="" />
                            </div>
                            <div className='mt-[30px] mb-[105px]'>
                                <p className='bg-bgColor font-Manrope text-bold text-[20px] text-white hover:text-[#F44904]'>/design</p>
                                <div><h4 className='bg-bgColor font-Manrope text-bold text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white hover:text-[#F44904]'>UI/UX Design</h4></div>
                            </div>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-2 gap-11 justify-between'>
                        <div data-aos="fade-right" data-aos-duration="500">
                            <div className='ml-[0%] md:-ml-[10%]'>
                                <img src={PortfolioImg3} className='w-full' alt="" />
                            </div>
                            <div className='mt-[30px] mb-[105px]'>
                                <p className='bg-bgColor font-Manrope text-bold text-[20px] text-white hover:text-[#F44904]'>/branding</p>
                                <div><h4 className='bg-bgColor font-Manrope text-bold text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white hover:text-[#F44904]'>Print on Demand Design</h4></div>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="500">
                            <div>
                                <img src={PortfolioImg4} className='w-full' alt="" />
                            </div>
                            <div className='mt-[30px] mb-[105px]'>
                                <p className='bg-bgColor font-Manrope text-bold text-[20px] text-white hover:text-[#F44904]'>/branding</p>
                                <div><h4 className='bg-bgColor font-Manrope text-bold text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white hover:text-[#F44904]'>Book Design/</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* portfolio end */}

            {/* testimonial start */}
            <section className='testimonial'  data-aos="fade-up" data-aos-duration="500">
                <div className="container">
                    <div className='mt-[40px] border border-b border-[#2b2929] border-s-0 border-t-0'>
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <p className='bg-bgColor font-jakarta font-normal text-base'>Testimonial</p>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col gap-[30px] md:gap-[10px] lg:gap-[40px] xl:gap-[50px] mt-[39px]'>
                        <div className='relative w-full md:w-[55%]'  data-aos="fade-right" data-aos-duration="500">
                            <div className='-ml-[0%] md:-ml-[4%]'>
                                <img src={testimonialImg_1} alt="" className='w-full h-auto' />
                            </div>
                            <div className='-ml-[0%] md:-ml-[4%] absolute inset-0 flex items-center justify-start'>
                                <img src={testimonialImg_2} alt="" className='w-full' />
                            </div>
                            <div className='absolute inset-0 flex items-center justify-start'>
                                <div className='p-1 md:ps-[0px]'>
                                    <div className=''>
                                        <img src={testimonialQuote_3} alt="" className='w-[15px] md:w-[29px] w-[18px] md:h-[33px] start-0' />
                                    </div>
                                    <div className='mt-1 md:mt-4'>
                                        <p className='font-manrope text-sm text-white max-w-[363px]'>Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark atlantic. Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid.</p>
                                    </div>
                                    <div className='mt-1 md:mt-4'> <p className='font-Manrope font-bold text-[20px] text-white'>Sam Daniels / CEO Electric LLC</p></div>
                                    <div className='flex gap-5 mt-4'>
                                        <div className='border-2 text-white w-[24px] h-[24px] md:w-[36px] md:h-[36px] lg:w-[56px] lg:h-[56px] flex items-center justify-center rounded-full'>
                                            <p className='text-base md:text-2xl lg:text-4xl'>1</p>
                                        </div>
                                        <div className='border-2 text-white w-[24px] h-[24px] md:w-[36px] md:h-[36px] lg:w-[56px] lg:h-[56px] flex items-center justify-center rounded-full'>
                                            <p className='text-base md:text-2xl lg:text-4xl'>2</p>
                                        </div>
                                        <div className='border-2 text-white w-[24px] h-[24px] md:w-[36px] md:h-[36px] lg:w-[56px] lg:h-[56px] flex items-center justify-center rounded-full'>
                                            <p className='text-base md:text-2xl lg:text-4xl'>3</p>
                                        </div>
                                        <div className='border-2 text-white w-[24px] h-[24px] md:w-[36px] md:h-[36px] lg:w-[56px] lg:h-[56px] flex items-center justify-center rounded-full'>
                                            <p className='text-base md:text-2xl lg:text-4xl'>4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full md:w-[55%] inset-0 flex items-center justify-start relative ml-[0%] md:-ml-[0%] lg:-ml-[15%] z-10'>
                            <h2 className='font-bold font-Manrope text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] leading-none text-white'>The Best
                                customers says                                about Agencium</h2>
                        </div>

                    </div>
                </div>
            </section>
            {/* testimonial end */}

            {/* team start */}
            < section className='team pb-20' data-aos="fade-up" data-aos-duration="500" >
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
                        <div  data-aos="fade-up" data-aos-duration="500">
                            <div>  <img src={StaffImg01} alt="" className='bg-white w-full h-full' /></div>
                            <div className='bg-bgColor'>
                                <h4 className='font-manrope font-normal text-[#ACACAC] mt-5 text-[20px]'>/CEO</h4>
                                <h4 className='font-manrope font-bold text-[20px] text-white font-bold'>Syed Shihab</h4>
                            </div>
                        </div>
                        <div className='mt-[50px]'  data-aos="fade-up" data-aos-duration="500">
                            <div>  <img src={TeamImg2} alt="" className='bg-white w-full h-full' /></div>
                            <div className='bg-bgColor'>
                                <h4 className='font-manrope font-normal text-[#ACACAC] mt-5 text-[20px]'>/Managing Director</h4>
                                <h4 className='font-Manrope text-[20px] text-white font-bold'>Sakib Alam</h4>
                            </div>
                        </div>
                        <div className=''  data-aos="fade-up" data-aos-duration="500">
                            <div>  <img src={TeamImg1} alt="" className='bg-white w-full h-full pt-[10px]' /></div>
                            <div className='bg-bgColor'>
                                <h4 className='font-manrope font-normal text-[#ACACAC] mt-5 text-[20px]'>/Senior Designer</h4>
                                <h4 className='font-Manrope text-[20px] text-white font-bold'>Abdullah Al Mamun</h4>
                            </div>
                        </div>
                        <div className='mt-[50px]'  data-aos="fade-up" data-aos-duration="500">
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
            <div className='absolute ml-[5%] pl-[90%] sm:ml-[3%] sm:pl-[95%] md:pl-[35%] lg:ml-[2%] lg:pl-[35%] xl:ml-[16%] xl:pl-[22.5%] mt-[15%] md:border-s md:border-e md:border-[#2b2929] -z-10' style={{ top: 0, left: 0, end: 0, bottom: 0 }}></div>
        </div >
    )
}
