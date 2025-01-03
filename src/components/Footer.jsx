import React from 'react'
import T2Logo from '../assets/icons/t2logo.svg'
import { FaFacebookF } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div>
            <footer className="text-white w-screen bg-black pt-12">
                <div className="container mx-auto">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center  pb-8 mb-8">
                        <h2 className="font-Manrope font-bold text-5xl sm:text-[52px] md:text-[80px] lg:text-[100px] xl:text-[120px] leading-none text-white">
                            Let's talk!
                        </h2>
                        <a
                            href="#"
                            className="text-manrope text-4xl font-bold flex items-center gap-2 group hover:text-[#F44904]"
                        >
                            Get in touch
                            <span className="transition-transform transform group-hover:translate-x-2">
                                →
                            </span>
                        </a>
                    </div>
                    {/* Branding */}
                    <div className='border border-b border-[#2b2929] border-s-0 border-t-0'>
                        <div className="flex items-center gap-2 mb-4">
                            {/* Placeholder for logo */}
                            <img src={T2Logo} className='' alt="" />
                        </div>
                    </div>
                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-5">
                        {/* New York */}
                        <div>
                            <h3 className="font-manrope font-bold text-sm mb-4">New York</h3>
                            <p className="font-manrope font-bold text-sm">
                                Agencium Ltd, 31 Ashcombe, London
                            </p>
                            <p className="font-manrope font-normal text-sm">NW5 1QU, UK</p>
                        </div>
                        {/* Phone */}
                        <div>
                            <h3 className="font-manrope font-bold text-lg mb-4">Phone</h3>
                            <p className="font-manrope font-normal text-sm">+1 (368) 567 89 54</p>
                            <p className="font-manrope font-normal text-sm">+800 350 84 31</p>
                        </div>
                        {/* Main Menu */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Main Menu</h3>
                            <ul>
                                <li className="mb-2">
                                    <a href="#" className="font-manrope font-bold text-sm">
                                        Home
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="font-manrope font-bold text-sm">
                                        Portfolio
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="font-manrope font-bold text-sm">
                                        Services
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Contact */}
                        <div>
                            <h3 className="font-manrope font-bold text-lg mb-4">Contact</h3>
                            <p className="font-manrope font-normal text-sm">
                                Email: support@agencium.com
                            </p>
                            <div className="flex space-x-4 mt-3">
                                {/* Social Icons */}
                                <a
                                    href="https://www.facebook.com/"
                                    className="flex items-center justify-center rounded-full hover:bg-white"
                                >
                                    <FaFacebookF className='w-[40px] h-[40px] p-1 bg-[#F44904] hover:bg-white rounded-full' />
                                </a>
                                <a
                                    href="https://www.linkedin.com/"
                                    className="flex items-center justify-center rounded-full hover:bg-white"
                                >
                                    <LiaLinkedinIn className='w-[40px] h-[40px] p-1 bg-[#F44904] hover:bg-white rounded-full' />
                                </a>
                                <a
                                    href="https://x.com/?lang=en"
                                    className="flex items-center justify-center rounded-full hover:bg-white"
                                >
                                    <FaXTwitter className='w-[40px] h-[40px] p-1 bg-[#F44904] hover:bg-white rounded-full' />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* copyright section */}
                    <div className='font-manrope font-bold text-sm border border-t border-[#2b2929] py-3 border-s-0 border-e-0 border-b-0 text-white mx-auto text-center'>©t2team 2024. All rights reserved.</div>
                </div>
            </footer>
        </div>
    )
}
