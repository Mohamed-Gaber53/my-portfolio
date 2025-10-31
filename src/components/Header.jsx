import React, { useCallback, useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const iconBtnRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  //closeMenu
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  //click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconBtnRef.current &&
        !iconBtnRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <a className="logo-link" href="#home">
            MG
          </a>
        </div>
        <div ref={menuRef} className="nav-group">
          <Navbar openIcon={isOpen} closeMenu={closeMenu} />
        </div>
        <MenuIcon
          ref={iconBtnRef}
          onClick={toggleMenu}
          className="icon burger-icon"
        />
      </div>
    </header>
  );
}

export default React.memo(Header);
