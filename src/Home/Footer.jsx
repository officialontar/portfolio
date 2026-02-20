import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0f2c] text-gray-300 pt-10 pb-6 px-4 md:px-16 lg:px-32">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* 1. Branding Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">The MD. ANISUJJAMAN ONTAR</h2>
          <p className="text-sm mb-4">
            Empowering users with modern design & frontend development.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com/officialontar" target="_blank" className="hover:text-[#00f0ff] text-xl">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/officialontar/" target="_blank" className="hover:text-[#00f0ff] text-xl">
              <FaInstagram />
            </a>
            <a href="https://github.com/officialontar" target="_blank" className="hover:text-[#00f0ff] text-xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/officalontar" target="_blank" className="hover:text-[#00f0ff] text-xl">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/officialontar" target="_blank" className="hover:text-[#00f0ff] text-xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="home" className="hover:text-[#00f0ff]" target="_blank">Home</a></li>
            <li><a href="about" className="hover:text-[#00f0ff]" target="_blank">About</a></li>
            <li><a href="services" className="hover:text-[#00f0ff]" target="_blank">Services</a></li>
            <li><a href="skills" className="hover:text-[#00f0ff]" target="_blank">Skills</a></li>
            <li><a href="portfolio" className="hover:text-[#00f0ff]" target="_blank">Portfolio</a></li>
            <li><a href="contact" className="hover:text-[#00f0ff]" target="_blank">Contact</a></li>
          </ul>
        </div>

        {/* 3. Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm mb-2">Email: <span className="text-[#00f0ff]" target="_blank">officialontar@gamil.com</span></p>
          <p className="text-sm mb-2">Location: Dhaka, Bangladesh</p>
          <p className="text-sm">Bhance: <a href="https://behance.net/officialaontar" className="hover:text-[#00f0ff]" target="_blank">Bhance.net/officialontar</a></p>
        </div>

        {/* 4. Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-2">Get monthly updates straight to your inbox.</p>
          <form className="flex mt-3">
            <input
              type="email"
              placeholder="Your email"
              // className="px-3 py-2 rounded-l-lg text-Green w-full"
              className="w-full px-4 py-3 rounded-l-xl bg-gray-200 text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#00f0ff] text-black px-4 py-2 rounded-r-lg font-semibold hover:bg-cyan-400"
              // className="px-6 py-3 bg-green-600 text-white font-semibold rounded-r-xl hover:bg-green-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} The MD. ANISUJJAMAN ONTAR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;