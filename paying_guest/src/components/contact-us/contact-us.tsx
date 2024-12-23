import React from "react";
import styles from "./contact-us.module.scss";
import { Bokor } from "next/font/google";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const bokor = Bokor({ subsets: ["latin"], weight: "400" });

export default function ContactUs() {
  return (
    <>
      <div id="Contact Us" className={styles.mainContactUSSectionDiv}>
        <label
          style={{
            fontFamily: `${bokor.style.fontFamily}, system-ui`,
          }}
        >
          Contact US
        </label>
      </div>
      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <FaMapMarkerAlt size={32} color="#007bff" />
          <div>
            <h3>Address</h3>
            <p>1234 Example Street, City Name, Country</p>
          </div>
        </div>
        <div className={styles.contactItem}>
          <FaPhoneAlt size={32} color="#007bff" />
          <div>
            <h3>Phone</h3>
            <p>+123 456 7890</p>
          </div>
        </div>
        <div className={styles.contactItem}>
          <FaEnvelope size={32} color="#007bff" />
          <div>
            <h3>Email</h3>
            <p>contact@example.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
