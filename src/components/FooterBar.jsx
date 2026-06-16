import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaTwitter,
    FaGooglePlusG,
  } from "react-icons/fa";
  
  export default function FooterBar() {
    return (
      <footer className="bg-white shadow-inner px-6 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
          {/* 左侧：Logo */}
          <div className="flex items-center gap-4">
            <img
              src="/assets/footer/logo.png"
              alt="SUPERBUILD Logo"
              className="w-12 h-12 object-cover"
            />
            <span className="text-xl font-bold tracking-tight uppercase" style={{fontFamily: '"Impact", "Arial Black", "Helvetica Neue", sans-serif', fontWeight: 800, letterSpacing: '0.05em', transform: 'skew(-5deg)', backgroundImage: 'linear-gradient(90deg, #3D1766, #6B46C1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: '0 0 0 transparent'}}>
              SUPERBUILD
            </span>
          </div>
  
          {/* 中间：版权信息 */}
          <div className="text-gray-500 text-base text-center sm:text-left">
            Copyright © 2025. SUPERBUILD. All rights reserved.
          </div>
  
          {/* 右侧：社交图标 */}
          <div className="flex gap-4 text-gray-600 text-lg">
            <a href="https://www.facebook.com/profile.php?id=61586350542379" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-75">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/isupabuild/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-75">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/%E4%B8%8A%E6%B5%B7%E5%A2%85%E5%BB%BA%E5%AE%9E%E4%B8%9A%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/?originalSubdomain=cn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-75">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-75">
              <FaYoutube />
            </a>
            <a href="https://x.com/ISUPABUILD" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:opacity-75">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Google Plus" className="hover:opacity-75">
              <FaGooglePlusG />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  