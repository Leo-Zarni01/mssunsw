import Logo from "../images/socials/Logo.png"
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left - Logo & Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo} alt="MSSUNSW Logo" className="w-24 h-auto" />
            <nav className="flex flex-col mt-4 space-y-2 text-yellow-500">
              <a href="/about" className="hover:underline">About Us</a>
              <a href="/events" className="hover:underline">Events</a>
              <a href="/team" className="hover:underline">Our Team</a>
              <a href="/join" className="hover:underline">Join Us</a>
            </nav>
          </div>

          <div className="mt-6 md:mt-0 text-center md:text-left">
            <h3 className="text-2xl text-yellow-500">Contact Us</h3>
            <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
              <span>📧</span>
              <a href="mailto:mss.unsw@gmail.com" className="hover:underline">mss.unsw@gmail.com</a>
            </div>
            <div className="flex flex-col mt-2 text-yellow-500">
              <span>@mssunsw</span>
              <span>@mssunsw</span>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <hr className="border-yellow-500 my-6" />
        <p className="text-center text-sm text-yellow-500">
          Copyright &copy; MSSUNSW 2025 <br />
          Myanmar Students Society @ UNSW
        </p>
      </div>
    </footer>
  );
};

export default Footer;

