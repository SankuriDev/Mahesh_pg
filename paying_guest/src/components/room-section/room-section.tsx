import React from "react";
import styles from "./room-section.module.scss";
import Image from "next/image";
import images from "@/images/images-export/images-export";
import { Bokor } from "next/font/google";
const bokor = Bokor({ subsets: ["latin"], weight: "400" });

const { room1, room2, room3, room4 } = images;

const RoomSection = () => {
  return (
    <div className={styles.mainRoomSectionDiv}>
      <label
        style={{
          fontFamily: `${bokor.style.fontFamily}, system-ui`,
        }}
      >
        Rooms
      </label>
      <div className={styles.roomGridSection}>
        <div className={styles.innerRoomSection}>
          <div className={styles.imageSectionDiv}>
            <Image
              className={styles.imageSection}
              src={room1}
              alt="room"
              width={350}
              height={200}
            />
          </div>
          <div className={styles.roomDiscription}>Single Room Bed AC</div>
        </div>
        <div>
          <div className={styles.innerRoomSection}>
            <div className={styles.imageSectionDiv}>
              <Image
                className={styles.imageSection}
                src={room2}
                alt="room"
                width={350}
                height={200}
              />
            </div>
            <div className={styles.roomDiscription}>Twin Sharing Room</div>
          </div>
        </div>
        <div>
          <div className={styles.innerRoomSection}>
            <div className={styles.imageSectionDiv}>
              <Image
                className={styles.imageSection}
                src={room3}
                alt="room"
                width={350}
                height={200}
              />
            </div>
            <div className={styles.roomDiscription}>Three Sharing</div>
          </div>
        </div>
        <div>
          <div className={styles.innerRoomSection}>
            <div className={styles.imageSectionDiv}>
              <Image
                className={styles.imageSection}
                src={room4}
                alt="room"
                width={350}
                height={200}
              />
            </div>
            <div className={styles.roomDiscription}>Quad Sharing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSection;
