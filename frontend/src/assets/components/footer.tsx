import Logo from "../images/socials/Logo.png"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start">
            {/* <div className="mb-6"> */}
            {/*   <img src={Logo} alt="MSSUNSW Logo" className="w-24 h-auto" /> */}
            {/* </div> */}

            <nav className="flex flex-col space-y-3">
              <a href="/about" className="text-lg text-yellow-500 hover:underline">About Us</a>
              <a href="/events" className="text-lg text-yellow-500 hover:underline">Events</a>
              <a href="/team" className="text-lg text-yellow-500 hover:underline">Our Team</a>
              <a href="/join" className="text-lg text-yellow-500 hover:underline">Join Us</a>
            </nav>
          </div>

          {/* Right Column */}
          <div className="mt-8 md:mt-0 flex flex-col items-center md:items-start">
            <h3 className="text-2xl text-yellow-500 mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-3">
                <FaFacebook className="text-white" size={24} />
                <span>mssunsw</span>
              </div>
              <div className="flex items-center gap-3">
                <FaInstagram className="text-white" size={24} />
                <span>mssunsw</span>
              </div>
              <div className="flex items-center gap-3">
                <FaTiktok className="text-white" size={24} />
                <span>mss.unsw</span>
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
          <p className="text-yellow-500 text-sm">Myanmar Students Society @ UNSW</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
