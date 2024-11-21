"use client";
import { useState, useEffect } from "react";
import images from "@/images/images-export/images-export";
const { bonfires, diningArea, funArea } = images;
export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(bonfires);
  const imageArray = [bonfires, diningArea, funArea];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = imageArray.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % imageArray.length;
        return imageArray[nextIndex];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${currentImage.src})`,
        backgroundPosition: "center",
        height: "70vh",
        width: "100%",
        borderRadius: "60px",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div></div>
    </div>
  );
};
