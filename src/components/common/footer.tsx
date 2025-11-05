"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-rose-50/40 backdrop-blur-md py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-2 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-rose-600">synopsis.ai</span>. All rights reserved.
        </p>

        <Link
          href="https://mosarof-hossain.vercel.app" 
          target="_blank"
          className="text-sm font-semibold text-gray-500 hover:text-rose-600 transition-colors"
        >
          Meet the Developer →
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
