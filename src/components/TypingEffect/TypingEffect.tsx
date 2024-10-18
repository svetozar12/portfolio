import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

const TypingEffect = () => {
  const words = ["Graphql .", "Freelancing .", "Web Development ."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 105; // larger is slower
  const deletingSpeed = 70 - words[currentWordIndex].length; // larger is slower

  const gradients = [
    "linear-gradient(135deg, #ff1e56, #ff073a 50%, #000000 100%)",
    "linear-gradient(135deg, #00ff85, #00ff1e 60%, #001100 100%)",
    "linear-gradient(135deg, #ff285c, #b010fb 80%, #001100 100%)",
  ];
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      setDisplayedText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingSpeed, currentWordIndex]);

  return (
    <div
      className={styles["typed-text"]}
      style={{
        backgroundImage: gradients[currentWordIndex],
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      <span className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
        {displayedText}
      </span>
      <span className={styles["blinking-cursor"]}>|</span>
    </div>
  );
};

export default TypingEffect;
