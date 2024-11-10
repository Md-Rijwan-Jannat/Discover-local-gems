import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Container from './container';
import Link from 'next/link';
import { MdPhonePaused } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';
import BannerLogo from './logo';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <Container>
        {/* Logo and Description */}
        <div
          className="flex items-center mx-auto flex-col
         text-center mb-6 w-full md:w-8/12"
        >
          <BannerLogo />
          <p className="text-sm mt-2">
            Het Bedrijven Platform: Supporting Dutch businesses with tools for
            online visibility, reputation management, and growth through
            tailored, comprehensive service packages.
          </p>
        </div>

        <hr className="my-3 border-gray-700" />
        {/* Footer Links */}
        <div className="flex flex-wrap justify-between text-center lg:text-left">
          {/* About Us */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-2">About Us</h3>
            <ul className="text-sm space-y-1 roboto-regular text-[#ffffff]">
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
          </div>

          {/* Services */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-2">Services</h3>
            <ul className="text-sm space-y-1 roboto-regular text-[#ffffff]">
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
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
            <ul className="text-sm space-y-1 flex flex-col-reverse text-center md:items-start roboto-regular text-[#ffffff]">
              <li className="flex gap-2 items-center">
                <IoMdMail size={20} />
                Email:{' '}
                <Link
                  href="mailto:support@example.com"
                  className="hover:underline"
                >
                  support@example.com
                </Link>
              </li>
              <li className="flex gap-2 items-center">
                <MdPhonePaused size={20} />
                Phone: +1-234-567-8901
              </li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <FaFacebook
                size={20}
                className="hover:text-blue-500 cursor-pointer"
              />
              <FaTwitter
                size={20}
                className="hover:text-blue-400 cursor-pointer"
              />
              <FaInstagram
                size={20}
                className="hover:text-pink-500 cursor-pointer"
              />
              <FaLinkedin
                size={20}
                className="hover:text-blue-700 cursor-pointer"
              />
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4">
            <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
            <p className="text-sm mb-4">Enter your email</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 Het Bedrijven Platform. All Rights Reserved</p>
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
