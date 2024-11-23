"use client";

import { useState, useEffect } from "react";
import images from "@/images/images-export/images-export";

const { bonfires, diningArea, funArea, poolImage } = images;

export const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(bonfires);
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const phrases = [
    "Luxury Living in Bangalore",
    "With Affordable Price",
    "Your Premium Escape Awaits",
  ]; // Array of phrases
  const imageArray = [bonfires, diningArea, funArea, poolImage];

  useEffect(() => {
    // Background image rotation
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = imageArray.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % imageArray.length;
        return imageArray[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval: any;

    if (isTyping) {
      // Typing logic
      const currentPhrase = phrases[currentPhraseIndex];
      let currentIndex = displayText.length;

      interval = setInterval(() => {
        setDisplayText(currentPhrase.slice(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === currentPhrase.length) {
          clearInterval(interval);
          setTimeout(() => setIsTyping(false), 1000); // Pause before erasing
        }
      }, 150); // Typing speed
    } else {
      // Erasing logic
      let currentIndex = displayText.length;

      interval = setInterval(() => {
        setDisplayText(displayText.slice(0, currentIndex - 1));
        currentIndex--;
        if (currentIndex === 0) {
          clearInterval(interval);
          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % phrases.length
          );
          setIsTyping(true);
        }
      }, 100); // Erasing speed
    }

    return () => clearInterval(interval);
  }, [isTyping, currentPhraseIndex, displayText, phrases]);

  return (
    <div
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
          url(${currentImage.src})
        `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "70vh",
        width: "100%",
        transition: "background-image 1s ease-in-out",
        position: "relative",
        borderRadius: "40px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "10%",
          transform: "translateY(-50%)",
          color: "white",
          fontSize: "3rem",
          fontWeight: "bold",
          overflow: "hidden",
          width: "45%",
        }}
      >
        {displayText}
        {/* Luxury Living in Indiranagar Bangalore */}
        {/* Exclusive Retreats in Bangalore */}
      </div>
    </div>
  );
};
