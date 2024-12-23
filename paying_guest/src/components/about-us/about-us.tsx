import React from "react";
import styles from "./about-us.module.scss";
import { Bokor } from "next/font/google";
const bokor = Bokor({ subsets: ["latin"], weight: "400" });

export default function AboutUs() {
  return (
    <>
      <div id="About Us" className={styles.mainAboutUSSectionDiv}>
        <label
          style={{
            fontFamily: `${bokor.style.fontFamily}, system-ui`,
          }}
        >
          About US
        </label>
      </div>
      <div>
        <div className={styles.aboutUsDescripton}>
          Welcome to Cozzy Rooms, where comfort meets convenience! Nestled in
          the heart of indiranagar, Bengaluru, we offer a home-away-from-home
          experience with thoughtfully designed, cozzy rooms perfect for
          students, working professionals, and anyone seeking a peaceful stay.
          Our mission is to provide more than just a roof over your head. At
          Cozzy Rooms, we create a warm, welcoming environment where you can
          relax, recharge, and thrive. Each room is equipped with modern
          amenities, ensuring your comfort and privacy, while our common spaces
          foster a sense of community. Whether you’re new to the city or looking
          for a better place to stay, Cozzy Room is here to make your experience
          seamless and enjoyable. Come join our vibrant family and discover a
          living experience that feels like home!
        </div>
      </div>
    </>
  );
}
