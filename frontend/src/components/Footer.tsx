import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router";
import { useCallback } from "react";

const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <footer className="font-poppins bg-black text-white py-10 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start">
            <nav className="flex flex-col space-y-3">
              <Link to="/our-story" className="text-lg text-yellow-500 hover:underline" onClick={scrollToTop}> Our Story</Link>
              <Link to="/events" className="text-lg text-yellow-500 hover:underline" onClick={scrollToTop}> Events</Link>
              <Link to="/team" className="text-lg text-yellow-500 hover:underline" onClick={scrollToTop}> Our Team</Link>
              <Link to="/get-involved" className="text-lg text-yellow-500 hover:underline" onClick={scrollToTop}> Join Us</Link>
            </nav>
          </div>

          {/* Right Column */}
          <div className="mt-8 md:mt-0 flex flex-col items-center md:items-start">
            <h3 className="text-2xl text-yellow-500 mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <div>
                <a href="https://www.facebook.com/mssunsw/" target="_blank" className="flex items-center gap-3">
                  <FaFacebook className="text-white" size={24} />
                  <span className="hover:underline hover:text-yellow-500">mssunsw</span>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/mssunsw/" target="_blank" className="flex items-center gap-3">
                  <FaInstagram className="text-white" size={24} />
                  <span className="hover:underline hover:text-yellow-500">mssunsw</span>
                </a>
              </div>
              <div>
                <a href="https://www.tiktok.com/@mss.unsw" target="_blank" className="flex items-center gap-3">
                  <FaTiktok className="text-white" size={24} />
                  <span className="hover:underline hover:text-yellow-500">mss.unsw</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <hr className="border-yellow-500 my-8" />
        <div className="text-center">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="MSSUNSW Logo" className="w-24 h-auto" />
          </div>
          <p className="text-yellow-500 text-sm">Copyright © MSSUNSW 2025</p>
          <p className="text-yellow-500 text-sm font">Myanmar Students' Society @ UNSW</p>
        </div>
      </div>
    </footer >
  );
};
export default Footer;
