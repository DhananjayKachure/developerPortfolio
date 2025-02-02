"use client";
import { useState } from 'react';
import styles from "../styles/Navbar.module.css";
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false); // New function to close menu

  return (
    <nav className={`${styles.navbar}`}>
      <div className={styles.logo}>
        <a href="https://www.linkedin.com/in/dhananjay-sunil-kachure" target='_blank'>

        <Image src={"/images/developerpng.png"} width={50} height={50} alt="icon" />
        </a>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isMenuOpen?"X":" ☰"}
       
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#play" onClick={closeMenu}>Play</a></li>
        <li><a href="#work" onClick={closeMenu}>Work</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#resume" onClick={closeMenu}>Resume</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
