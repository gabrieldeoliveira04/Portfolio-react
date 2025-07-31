'use client';
import { useRef } from "react";
import DropdownMenuCheckboxes from "./dropDownmenu";

export default function Header() {
  const navRef = useRef<HTMLDivElement>(null);
  const menuMobileRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (!menuMobileRef.current || !navRef.current) return;

    menuMobileRef.current.classList.toggle("change");

    if (menuMobileRef.current.classList.contains("change")) {
      navRef.current.style.display = "block";
    } else {
      navRef.current.style.display = "none";
    }
  };

  return (
    <header className="mb-5">
      <a href="#" className="logo">Portfolio</a>

      <div className="nav">
        <a href="#home">Home</a>
        <a href="#service">Serviços</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contato</a>
        <a href="#about">Sobre</a>
        {/* <DropdownMenuCheckboxes /> */}
      </div>
   <div className="">
{/* <DropdownMenuCheckboxes /> */}
      <div className="nav-responsive" ref={navRef}>
        <a href="#home">Home</a>
        <a href="#service">Serviços</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contato</a>
        <a href="#about">Sobre</a>
      </div>
</div> 

      <div
        className="menu-mobile"
        ref={menuMobileRef}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </header>
  );
}
