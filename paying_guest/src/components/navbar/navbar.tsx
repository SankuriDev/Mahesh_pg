"use client";
import images from "@/images/images-export/images-export";
import styles from "./navbar.module.scss";
import Image from "next/image";
import { Bokor } from "next/font/google";
import { useState } from "react";

const bokor = Bokor({ subsets: ["latin"], weight: "400" });
const { pglogo } = images;

let links = [
  { id: 1, linkName: "Home" },
  { id: 2, linkName: "Rooms" },
  { id: 3, linkName: "Services" },
  { id: 4, linkName: "About Us" },
  { id: 5, linkName: "Contact Us" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoImage} onClick={() => handleScroll("Home")}>
        <Image
          className={styles.image}
          src={pglogo}
          alt="logo"
          width={60}
          height={60}
        />
      </div>
      <div
        style={{
          fontFamily: `${bokor.style.fontFamily}, system-ui`,
        }}
        className={styles.nameofPg}
      >
        Cozzy Rooms
      </div>
      <div
        className={`${styles.hamburgerMenu} ${
          menuOpen ? styles.menuActive : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div
        className={`${styles.linksMainContainer} ${
          menuOpen ? styles.showMenu : ""
        }`}
      >
        <div className={styles.linksSubContainer}>
          {links.map((item) => (
            <div
              className={styles.linksContainer}
              key={item.id}
              onClick={() => handleScroll(item.linkName)}
            >
              {item.linkName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
