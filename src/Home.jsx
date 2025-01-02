import React from 'react'
import AboutImg from './assets/images/676317f18dd885da5fcf9a5b_Mask group.svg';
import HeroImg from './assets/images/hero.svg'
import ArroUpRightIcon from './assets/icons/arrow-up-right.svg'
// staff
import StaffImg01 from './assets/images/staff-1.png'
import StaffImg02 from './assets/images/staff-2.png'
import StaffImg03 from './assets/images/staff-3.png'
import StaffImg04 from './assets/images/staff-4.png'

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


export default function Home() {
    return (
        <div>
            {/* hero section start */}
            <section className="w-screen">
                <div className="flex md:flex-row flex-col gap-[30px] md:gap-[10px] lg:gap-[40px] xl:gap-[50px] py-5 ">
                    <div className='w-full md:w-[43%]'>
                        <div className="w-full overflow-hidden">
                            <img src={HeroImg} className="w-full h-auto block" alt="About" />
                        </div>
                    </div>
                    <div className='w-full md:w-[57%]'>
                        <div className='flex items-end w-full h-full'>
                            <div className='max-w-[566px]'>
                                <h1 className='font-Manrope sm:text-[52px] md:text-[80px] lg:text-[120px] xl:text-[150px] leading-none text-white'>Real</h1>
                                <h2 className='font-Manrope text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] leading-none text-white'>Solution for Your Business.</h2>
                                <p className='text-white leading-snug py-5'>Mummichog paradise fish! Triggerfish bango guppy opah sunfish bluntnose knifefish upside down catfish cobia spookfish convict.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* hero section end */}

            {/* client logo start */}
            <section className='my-[100px]'>
                <div className='container mx-auto'>
                    <div className="slider">
                        <div className="slide-track">
                            <div className="slide mx-[50px]">
                                <img
                                    src={BrandLog_1} className='w-full h-auto' alt=""
                                />
                            </div>
                            <div className="slide mx-[50px]">
                                <img
                                    src={BrandLog_1} className='w-full h-auto' alt=""
                                />
                            </div> <div className="slide mx-[50px]">
                                <img
                                    src={BrandLog_1} className='w-full h-auto' alt=""
                                />
                            </div> <div className="slide mx-[50px]">
                                <img
                                    src={BrandLog_1} className='w-full h-auto' alt=""
                                />
                            </div> <div className="slide mx-[50px]">
                                <img
                                    src={BrandLog_1} className='w-full h-auto' alt=""
                                />
                            </div> <div className="slide mx-[50px]">
                                <img
                                    src={BrandLog_1} className='w-full h-auto' alt=""
                                />
                            </div> <div className="slide mx-[50px]">
                                <img
                                    src={BrandLog_1} className='w-full h-auto' alt=""
                                />
                            </div> <div className="slide mx-[50px]">
                                <img
                                    src={BrandLog_1} className='w-full h-auto' alt=""
                                />
                            </div> <div className="slide mx-[50px]">
                                <img
                                    src={BrandLog_1} className='w-full h-auto' alt=""
                                />
                            </div> <div className="slide mx-[50px]">
                                <img
                                    src={BrandLog_1} className='w-full h-auto' alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* client logo end */}

            {/* about section start */}
            <section className="w-screen">
                <div className="container mx-auto">
                    <div className="flex md:flex-row flex-col gap-[30px] md:gap-[10px] lg:gap-[40px] xl:gap-[50px] py-5 ">
                        <div className='w-full md:w-[35%]'>
                            <div className="w-full overflow-hidden">
                                <img src={AboutImg} className="w-full h-auto block" alt="About" />
                            </div>
                        </div>
                        <div className='w-full md:w-[65%]'>
                            <div className='mt-[40px] border border-b border-gray-700 border-s-0 border-t-0'>
                                <div className="flex items-center gap-2 mb-4 text-white">
                                    <p>About</p>
                                </div>
                            </div>
                            <div className='w-full mt-[33px]'>
                                <h2 className='font-Manrope text-[36px] w-full sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] leading-none text-white'>Best creative & modern agency</h2>
                                <p className='mt-[25px] text-white leading-snug py-5'>Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark atlantic Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about section end */}

            {/* service start */}
            <section className='services'>
                <div className="container">
                    <div className='mt-[40px] border border-b border-gray-700 border-s-0 border-t-0'>
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <p>Services</p>
                        </div>
                    </div>
                    <div className='max-w-[752px]'>
                        <h2 className='text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] mt-4 leading-none text-white'>Most experienced services</h2>
                    </div>
                    <div className='w-full md:ps-[40%] mt-6'>
                        <div className='flex items-center justify-between border-b border-t border-gray-700 py-4'>
                            <div><h4 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>.01/</h4></div>
                            <div><h4 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>UI/UX Design/</h4></div>
                            <div><img src={ArroUpRightIcon} className='w-12 h-12' alt="" srcset="" /> </div>
                        </div>
                        <div className='flex items-center justify-between border-b border-gray-700 py-4'>
                            <div><h4 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>.01/</h4></div>
                            <div><h4 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>UI/UX Design/</h4></div>
                            <div><img src={ArroUpRightIcon} className='w-12 h-12' alt="" srcset="" /> </div>
                        </div>
                        <div className='flex items-center justify-between border-b border-gray-700 py-4'>
                            <div><h4 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>.01/</h4></div>
                            <div><h4 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>UI/UX Design/</h4></div>
                            <div><img src={ArroUpRightIcon} className='w-12 h-12' alt="" srcset="" /> </div>
                        </div>
                        <div className='flex items-center justify-between border-b border-gray-700 py-4'>
                            <div><h4 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>.01/</h4></div>
                            <div><h4 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>UI/UX Design/</h4></div>
                            <div><img src={ArroUpRightIcon} className='w-12 h-12' alt="" srcset="" /> </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* service end */}

            {/* counter start */}
            <section className='counter-section my-24'>
                <div className="container">
                    <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5">
                        <div className="relative">
                            <div>
                                <h2 className="text-stroke text-[70px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] text-transparent">5k+</h2>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-start">
                                <h4 className="font-Manrope text-[12px] sm:text-[16px] md:text-[20px] text-white bg-[#1b1b1b]">
                                    Awesome clients
                                </h4>
                            </div>
                        </div>
                        <div className="relative">
                            <div>
                                <h2 className="text-stroke text-[70px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] text-transparent">2b+</h2>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-start">
                                <h4 className="font-Manrope text-[12px] sm:text-[16px] md:text-[20px] text-white bg-[#1b1b1b]">
                                    Earings a year
                                </h4>
                            </div>
                        </div>
                        <div className="relative">
                            <div>
                                <h2 className="text-stroke text-[70px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] text-transparent">500+</h2>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-start">
                                <h4 className="font-Manrope text-[12px] sm:text-[16px] md:text-[20px] text-white bg-[#1b1b1b]">
                                    Created projects
                                </h4>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
            {/* counter end */}

            {/* portfolio star */}
            <section className='portfolio'>
                <div className="container">
                    <div className='mt-[40px] border border-b border-gray-700 border-s-0 border-t-0'>
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <p>Portfolio</p>
                        </div>
                    </div>
                    <div className='text-end'><h4 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>Projects</h4></div>
                    <div className='flex gap-5 justify-center'>
                        <div>
                            <div>
                                <img src={PortfolioImg1} className='w-full' alt="" srcset="" />
                            </div>
                            <div>
                                <p className='font-Manrope text-[20px] text-white'>/branding</p>
                                <div><h4 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>UI/UX Design/</h4></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={PortfolioImg2} className='w-full' alt="" srcset="" />
                            </div>
                            <div>
                                <p className='font-Manrope text-[20px] text-white'>/branding</p>
                                <div><h4 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>UI/UX Design/</h4></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 justify-between'>
                        <div>
                            <div>
                                <img src={PortfolioImg3} className='w-full' alt="" srcset="" />
                            </div>
                            <div>
                                <p className='font-Manrope text-[20px] text-white'>/branding</p>
                                <div><h4 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>UI/UX Design/</h4></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={PortfolioImg4} className='w-full' alt="" srcset="" />
                            </div>
                            <div>
                                <p className='font-Manrope text-[20px] text-white'>/branding</p>
                                <div><h4 className='text-[24px] md:text-[28px] lg:text-[36px] xl:text-[40px] text-white'>UI/UX Design/</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* portfolio end */}

            {/* testimonial start */}
            <section className='testimonial'>
                <div className="container">
                    <div className='mt-[40px] border border-b border-gray-700 border-s-0 border-t-0'>
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <p>testimonial</p>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col gap-[30px] md:gap-[10px] lg:gap-[40px] xl:gap-[50px] '>
                        <div className='relative w-full md:w-[43%]'>
                            <div className=''>
                                <img src={testimonialImg_1} alt="" className='w-full' srcset="" />
                            </div>
                            <div className='absolute inset-0 flex items-center justify-start'>
                                <img src={testimonialImg_2} alt="" className='w-full' srcset="" />
                            </div>
                            <div className='absolute inset-0 flex items-center justify-start'>
                                <div className='p-5'>
                                    <div className=''>
                                        <img src={testimonialQuote_3} alt="" className='w-[29px] h-[33px] start-0' srcset="" />
                                    </div>
                                    <div className='mt-4'>
                                        <p className='text-white'>Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid. Wahoo mora deep sea smelt cat shark atlantic. Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid.</p>
                                    </div>
                                    <div className='mt-4'> <p className='font-Manrope text-[20px] text-white'>Sam Daniels / CEO Electric LLC</p></div>
                                    <div className='flex gap-5 mt-4'>
                                        <div className='border-2 text-white w-[56px] h-[56px] flex items-center justify-center' style={{ borderRadius: "50%" }}>
                                            <p className='text-4xl'>1</p>
                                        </div>
                                        <div className='border-2 text-white w-[56px] h-[56px] flex items-center justify-center' style={{ borderRadius: "50%" }}>
                                            <p className='text-4xl'>1</p>
                                        </div>
                                        <div className='border-2 text-white w-[56px] h-[56px] flex items-center justify-center' style={{ borderRadius: "50%" }}>
                                            <p className='text-4xl'>1</p>
                                        </div>
                                        <div className='border-2 text-white w-[56px] h-[56px] flex items-center justify-center' style={{ borderRadius: "50%" }}>
                                            <p className='text-4xl'>1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full md:w-[57%] inset-0 flex items-center justify-start'>
                            <h2 className='font-Manrope text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] leading-none text-white'>Solution for Your Business.</h2>
                        </div>

                    </div>
                </div>
            </section>
            {/* testimonial end */}
            {/* team start */}
            < section className='team' >
                <div className="container">
                    <div className='mt-[40px] border border-b border-gray-700 border-s-0 border-t-0'>
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <p>Team</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='max-w-[377px]'>
                            <h2 className='text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] mt-4 leading-none text-white'>Meet our
                                creative staff</h2>
                        </div>
                        <div className=''>
                            <div className="relative">
                                <div>
                                    <h2 className="text-stroke text-[70px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[150px] text-transparent">20+</h2>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-start">
                                    <h4 className="font-Manrope text-[12px] sm:text-[16px] md:text-[20px] text-white bg-[#1b1b1b]">
                                        Team Member
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-12'>
                        <div>
                            <div>  <img src={StaffImg01} alt="" className='bg-white w-full h-full' srcset="" /></div>
                            <div>
                                <h4 className='font-Manrope text-[20px] text-white'>/CEO</h4>
                                <h4 className='font-Manrope text-[20px] text-white font-bold'>Syed Shihab</h4>
                            </div>
                        </div>
                        <div className='mt-[50px]'>
                            <div>  <img src={StaffImg02} alt="" className='bg-white w-full h-full' srcset="" /></div>
                            <div>
                                <h4 className='font-Manrope text-[20px] text-white'>/Senior Designer</h4>
                                <h4 className='font-Manrope text-[20px] text-white font-bold'>Abdullah Al Mamun</h4>
                            </div>
                        </div>
                        <div className=''>
                            <div>  <img src={StaffImg03} alt="" className='bg-white w-full h-full pt-[10px]' srcset="" /></div>
                            <div>
                                <h4 className='font-Manrope text-[20px] text-white'>/Senior Designer</h4>
                                <h4 className='font-Manrope text-[20px] text-white font-bold'>Showkat Ali</h4>
                            </div>
                        </div>
                        <div className='mt-[50px]'>
                            <div>  <img src={StaffImg04} alt="" className='bg-white w-full h-full' srcset="" /></div>
                            <div>
                                <h4 className='font-Manrope text-[20px] text-white'>/Wordpress Developer</h4>
                                <h4 className='font-Manrope text-[20px] text-white font-bold'>Md Shofiul Alam</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* team end */}
        </div >
    )
}
