import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        {/* Replace "LOGO" with the Image component */}
        <div className="flex items-center">
          <Image
            src="/images/logo4.png"  // Your logo image path
            alt="Hamna Murtaza Logo"
            width={60}  // You can adjust this size as needed
            height={60} // You can adjust this size as needed
          />
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
