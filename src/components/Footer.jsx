import React from 'react'
import T2Logo from '../assets/icons/t2logo.svg'

export default function Footer() {
    return (
        <div>
            <footer className="text-white w-screen bg-black pt-12">
                <div className="container mx-auto">
                    {/* Top Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
                        <h2 className="font-Manrope sm:text-[52px] md:text-[80px] lg:text-[120px] xl:text-[150px] leading-none text-white">
                            Let's talk!
                        </h2>
                        <a
                            href="#"
                            className="text-lg font-medium flex items-center gap-2 group hover:text-gray-400"
                        >
                            Get in touch
                            <span className="transition-transform transform group-hover:translate-x-2">
                                →
                            </span>
                        </a>
                    </div>
                    {/* Branding */}
                    <div className='border border-b border-gray-700 border-s-0 border-t-0'>
                        <div className="flex items-center gap-2 mb-4">
                            {/* Placeholder for logo */}
                            <img src={T2Logo} className='' alt="" srcset="" />
                        </div>
                    </div>
                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-5">
                        {/* New York */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">New York</h3>
                            <p className="text-sm text-gray-400">
                                Agencium Ltd, 31 Ashcombe, London
                            </p>
                            <p className="text-sm text-gray-400">NW5 1QU, UK</p>
                        </div>
                        {/* Phone */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Phone</h3>
                            <p className="text-sm text-gray-400">+1 (368) 567 89 54</p>
                            <p className="text-sm text-gray-400">+800 350 84 31</p>
                        </div>
                        {/* Main Menu */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Main Menu</h3>
                            <ul>
                                <li className="mb-2">
                                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                                        Home
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                                        Portfolio
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                                        Services
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Contact */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">Contact</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Email: support@agencium.com
                            </p>
                            <div className="flex gap-4">
                                {/* Social Icons */}
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-xing" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* copyright section */}
                    <div className='border border-t border-gray-700 py-3 border-s-0 border-e-0 border-b-0 text-white mx-auto text-center'>©t2team 2024. All rights reserved.</div>
                </div>
            </footer>
        </div>
    )
}
