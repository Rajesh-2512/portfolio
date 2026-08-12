"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scaleOnHover?: number;
  glareOpacity?: number;
  showGlare?: boolean;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  className = "",
  maxTilt = 10,
  scaleOnHover = 1.02,
  glareOpacity = 0.15,
  showGlare = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth 3D rotation
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  // Spring physics for butter-smooth animation release
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springGlareX = useSpring(glareX, springConfig);
  const springGlareY = useSpring(glareY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY - height / 2) / (height / 2)) * -maxTilt;
    const rY = ((mouseX - width / 2) / (width / 2)) * maxTilt;

    rotateX.set(rX);
    rotateY.set(rY);

    glareX.set((mouseX / width) * 100);
    glareY.set((mouseY / height) * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ scale: isHovered ? scaleOnHover : 1 }}
      transition={{ duration: 0.2 }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative"
      >
        {children}

        {/* Dynamic Light Glare Effect */}
        {showGlare && isHovered && (
          <motion.div
            style={{
              background: `radial-gradient(circle at ${springGlareX}% ${springGlareY}%, rgba(255, 255, 255, ${glareOpacity}) 0%, transparent 80%)`,
            }}
            className="pointer-events-none absolute inset-0 rounded-[inherit] z-20 transition-opacity duration-300"
          />
        )}
      </motion.div>
    </motion.div>
  );
};
