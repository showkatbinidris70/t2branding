import React, {useEffect} from 'react'
// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaFacebookF } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Set the duration for the animation (optional)
      once: true, // Animation will happen only once (optional)
    });
  }, []);
  return (
    <div>

      <div className='relative z-10'  data-aos="fade-up" data-aos-duration="500">
        {/* hero section start */}
        <section className="w-screen">
          <div className="container pt-[188px] pb-[211px] flex justify-center">
            <h2 className='bg-bgColor font-jakarta font-normal text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] leading-none text-white'> Contacts </h2>
          </div>
        </section>
        {/* hero section end */}

        <section className='contact'>
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2">
              <div className="mx-auto px-4">
                {/* Heading and Description */}
                <div className="mb-12">
                  <h1 className="bg-bgColor font-jakarta font-bold text-[36px] sm:text-[48px] md:text-[52px] lg:text-[72px] xl:text-[80px] mb-4">
                    Get in <span className="italic">touch</span>
                  </h1>
                  <p className="font-manrope font-normal text-white bg-bgColor">
                    Frigate mackerel snake mackerel upside-down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Address */}
                  <div>
                    <h2 className="text-lg font-semibold mb-4">New York</h2>
                    <p className="font-manrope font-normal text-white">
                      Agencium Ltd, 31 Ashcombe, <br />
                      London NW5 1QU, UK
                    </p>
                    {/* Social Links */}
                    <div>
                      <h2 className="text-lg font-semibold mb-4">Social Links</h2>
                      <div className="flex space-x-4">
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

                  {/* Phone and Email */}
                  <div>
                    <h2 className="bg-bgColor text-lg font-semibold mb-4">Phone</h2>
                    <p className="bg-bgColor text-gray-400">+1 (368) 567 89 54</p>
                    <p className="bg-bgColor text-gray-400">+800 350 84 31</p>
                    <h2 className="bg-bgColor text-lg font-semibold mt-6">Email</h2>
                    <p className="bg-bgColor text-gray-400">support@agencium.com</p>
                  </div>


                </div>
              </div>

              <div className="w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-8">Send a message</h1>
                <form className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      id="fullName"
                      className="w-full text-white border-b border-[#727272] py-2 bg-transparent focus:outline-none placeholder-white"
                      placeholder="Full Name"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="w-full text-white border-b border-[#727272] py-2 bg-transparent focus:outline-none placeholder-white"
                      placeholder="Email"
                    />
                  </div>
                  {/* Subject */}
                  <div>
                    <input
                      type="text"
                      id="subject"
                      className="w-full text-white border-b border-[#727272] py-2 bg-transparent focus:outline-none placeholder-white"
                      placeholder="Subject"
                    />
                  </div>
                  {/* Message */}
                  <div>
                    <textarea
                      id="message"
                      className="w-full text-white border-b border-[#727272] py-2 bg-transparent focus:outline-none placeholder-white"
                      placeholder="Write your message"
                      rows="4"
                    ></textarea>
                  </div>
                  {/* Submit Button */}
                  <div className='inline-block font-manrope font-bold text-[#F44904] hover:text-white hover:border-[#ffffff] cursor-pointer  border-b border-[#F44904]'>
                    <a
                      type="submit"
                      className=" flex items-center justify-center pb-2"
                    >
                      Send Message
                    </a>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>
        <section  data-aos="fade-up" data-aos-duration="500">
          <div className="w-full h-[450px] flex justify-center items-center bg-gray-100 mt-[172px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47174.1294036849!2d-74.04818034896715!3d40.694796526685145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1735924143308!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </section>
        <div className='absolute ml-[5%] pl-[90%] sm:ml-[3%] sm:pl-[95%] md:pl-[35%] lg:ml-[2%] lg:pl-[35%] xl:ml-[16%] xl:pl-[22.5%] md:border-s md:border-e md:border-[#2b2929] -z-10' style={{ top: 0, left: 0, end: 0, bottom: 0 }}></div>
      </div >
    </div>
  )
}
