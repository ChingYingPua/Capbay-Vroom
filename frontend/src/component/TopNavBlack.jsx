// TopNavBlack.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "./navItems";

function TopNavBlack() {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/register')) {
      setActiveLink('REGISTER');
    } else if (location.pathname.startsWith('/information')) {
      setActiveLink('INFORMATION');
    } else if (location.pathname.startsWith('/eligibility')) {
      setActiveLink('ELIGIBILITY');
    } else if (location.pathname.startsWith('/')) {
      setActiveLink('HOME');
    }
  }, [location]);

  return (
    <nav className="bg-black text-white flex justify-between items-center p-5 relative z-20">
      <Link to="/" className="flex items-center">
        <img src="/logoText.png" alt="Company Logo" className="h-12 cursor-pointer" style={{width: "150px", height: "auto"}} />
      </Link>
      <div className="flex space-x-16 flex-grow justify-center text-xl">
        {navItems.map((item) => (
          <div className="relative group" key={item.title}>
            <Link to={item.link} className={activeLink === item.title.toUpperCase() ? 'font-bold text-[#EB4335]' : 'font-bold'} onClick={() => setActiveLink(item.title.toUpperCase())}>{item.title.toUpperCase()}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default TopNavBlack;
