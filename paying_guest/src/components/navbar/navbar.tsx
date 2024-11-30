"use client";
import images from "@/images/images-export/images-export";
import styles from "./navbar.module.scss";
import Image from "next/image";
import { Bokor } from "next/font/google";
const bokor = Bokor({ subsets: ["latin"], weight: "400" });

const { pglogo } = images;

let links = [
  {
    id: 1,
    linkName: "Home",
  },
  {
    id: 2,
    linkName: "Rooms",
  },
  {
    id: 3,
    linkName: "Services",
  },
  {
    id: 4,
    linkName: "About Us",
  },
];

export const Navbar = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoImage}>
        <Image
          className={styles.image}
          src={pglogo}
          alt="logo"
          width={200}
          height={200}
        />
      </div>
      <div
        style={{
          fontFamily: `${bokor.style.fontFamily}, system-ui`,
        }}
        className={styles.nameofPg}
      >
        Mahesh's PG
      </div>
      <div className={styles.linksMainContainer}>
        <div className={styles.linksSubContainer}>
          {links?.map((item) => {
            return (
              <div className={styles.linksContainer} key={item?.id}>
                {item?.linkName}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
