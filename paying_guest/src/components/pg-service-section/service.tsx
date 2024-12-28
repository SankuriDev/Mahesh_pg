import React from "react";
import styles from "./service.module.scss";
import { Bokor } from "next/font/google";
import Images from "@/images/images-export/images-export";
import Image from "next/image";
const bokor = Bokor({ subsets: ["latin"], weight: "400" });

const { service1, service2, service3, service4 } = Images;

const Service = () => {
  return (
    <div id="Services" className={styles.mainserviceSection}>
      <label
        style={{
          fontFamily: `${bokor.style.fontFamily}, system-ui`,
        }}
      >
        Service
      </label>
      <div className={styles.serviceGridSection}>
        <div className={styles.innerServiceSection}>
          <div className={styles.imageSectionDiv}>
            <Image
              className={styles.imageSection}
              src={service1}
              alt="service"
              width={350}
              height={200}
            />
          </div>
          <div className={styles.serviceDiscription}>
            We serve our client's diverse requirement of optimum fully furnished
            modular kitchen.
          </div>
        </div>
        <div>
          <div className={styles.innerServiceSection}>
            <div className={styles.imageSectionDiv}>
              <Image
                className={styles.imageSection}
                src={service2}
                alt="service"
                width={350}
                height={200}
              />
            </div>
            <div className={styles.serviceDiscription}>
              You can adjust the hot or cold water temperatures in bathroom as
              per your preference.
            </div>
          </div>
        </div>
        <div>
          <div className={styles.innerServiceSection}>
            <div className={styles.imageSectionDiv}>
              <Image
                className={styles.imageSection}
                src={service3}
                alt="service"
                width={350}
                height={200}
              />
            </div>
            <div className={styles.serviceDiscription}>
              You can relax in your open terrace with the fresh breeze & can
              beautify it as per your preference.
            </div>
          </div>
        </div>
        <div>
          <div className={styles.innerServiceSection}>
            <div className={styles.imageSectionDiv}>
              <Image
                className={styles.imageSection}
                src={service4}
                alt="service"
                width={350}
                height={200}
              />
            </div>
            <div className={styles.serviceDiscription}>
              You can secure your personal stuff in your personal wardrobe by
              locking it.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
