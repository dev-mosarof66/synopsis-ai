// import {FaLinkedin,FaGithub,FaTwitter} from 'react-icons/fa'
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-rose-400/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
        {/* Brand */}
        {/* <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-800">Sommaire</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xs">
            Turn your PDFs into clear, concise summaries powered by AI.
          </p>
        </div> */}

        {/* Navigation Links */}
        {/* <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-600 font-medium">
          <Link href="#pricing" className="hover:text-rose-500 transition-colors">
            Pricing
          </Link>
        </div> */}

        {/* Socials */}
        {/* <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-rose-500 hover:text-white transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-rose-500 hover:text-white transition-colors"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 hover:bg-rose-500 hover:text-white transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-gray-200 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} <span className="font-semibold text-rose-700">synopsis.ai</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
