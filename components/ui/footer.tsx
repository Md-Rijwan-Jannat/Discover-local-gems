'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Container from './container';
import Link from 'next/link';
import { MdPhonePaused } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';
import BannerLogo from './logo';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <Container>
        {/* Logo and Description */}
        <motion.div
          className="flex items-center mx-auto flex-col text-center mb-6 w-full md:w-8/12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BannerLogo />
          <p className="text-sm mt-2">
            Het Bedrijven Platform: Supporting Dutch businesses with tools for
            online visibility, reputation management, and growth through
            tailored, comprehensive service packages.
          </p>
        </motion.div>

        <hr className="my-3 border-gray-800" />

        {/* Footer Links */}
        <div className="flex flex-wrap justify-between text-center lg:text-left">
          {/* About Us */}
          <motion.div
            className="w-full md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-2">About Us</h3>
            <ul className="text-sm space-y-3 roboto-regular text-[#ffffff]">
              <li>
                <Link href="#" className="hover:underline">
                  - Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  - Our Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  - Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  - Reviews
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="w-full md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-2">Services</h3>
            <ul className="text-sm space-y-3 roboto-regular text-[#ffffff]">
              <li>
                <Link href="#" className="hover:underline">
                  - Online Visibility
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  - SEO Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  - Business Listings
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  - Marketing Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-blue-500">
                  See more
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            className="w-full flex flex-col justify-center items-center md:justify-start md:items-start md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
            <ul className="text-sm roboto-regular flex flex-col-reverse md:justify-start md:items-start roboto-regular text-[#ffffff]">
              <li className="flex gap-2 items-center mt-3">
                <IoMdMail size={16} />
                Email:{' '}
                <Link
                  href="mailto:support@example.com"
                  className="hover:underline"
                >
                  support@example.com
                </Link>
              </li>
              <li className="flex gap-2 items-center mt-3">
                <MdPhonePaused size={16} />
                Phone: +1-234-567-8901
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <FaFacebook
                  size={30}
                  className="hover:text-blue-500 cursor-pointer rounded-full border p-2"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <FaTwitter
                  size={30}
                  className="hover:text-blue-400 cursor-pointer rounded-full border p-2"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <FaInstagram
                  size={30}
                  className="hover:text-pink-500 cursor-pointer rounded-full border p-2"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <FaLinkedin
                  size={30}
                  className="hover:text-blue-700 cursor-pointer rounded-full border p-2"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="w-full md:w-1/4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-1 rounded-[10px] focus:outline-none roboto-regular"
              />
              <button className="bg-blue-600 text-[16px] md:text-[24px] w-[168px] h-[36px] rounded-[10px] font-semibold roboto-regular">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-sm roboto-regular text-white">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            © 2024 Het Bedrijven Platform. All Rights Reserved
          </motion.p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
