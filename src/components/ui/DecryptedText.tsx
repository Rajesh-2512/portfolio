"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "hover" | "view" | "mount";
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = true,
  className = "",
  parentClassName = "",
  encryptedClassName = "text-sky-400 opacity-70",
  animateOn = "mount",
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const startDecryption = () => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (sequential) {
                if (index < iteration / (maxIterations / text.length)) {
                  return text[index];
                }
              } else {
                if (Math.random() < iteration / maxIterations) {
                  return text[index];
                }
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("")
        );

        if (iteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
        }
        iteration += 1;
      }, speed);
    };

    if (animateOn === "mount" || (animateOn === "hover" && isHovered)) {
      startDecryption();
    }

    return () => clearInterval(interval);
  }, [text, speed, maxIterations, sequential, isHovered, animateOn]);

  return (
    <motion.span
      className={`inline-block ${parentClassName}`}
      onMouseEnter={() => animateOn === "hover" && setIsHovered(true)}
      onMouseLeave={() => animateOn === "hover" && setIsHovered(false)}
    >
      <span className={className}>{displayText}</span>
    </motion.span>
  );
};
