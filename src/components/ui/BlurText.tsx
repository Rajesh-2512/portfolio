"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, TargetAndTransition, Transition } from "framer-motion";

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  animationFrom?: TargetAndTransition;
  animationTo?: TargetAndTransition;
  easing?: Transition["ease"];
  onAnimationComplete?: () => void;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 150,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  animationFrom,
  animationTo,
  easing = [0.25, 0.1, 0.25, 1],
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (isInView) {
      setInView(true);
    }
  }, [isInView]);

  const defaultFrom: TargetAndTransition = {
    filter: "blur(10px)",
    opacity: 0,
    y: direction === "top" ? -30 : 30,
  };

  const defaultTo: TargetAndTransition = {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
  };

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={animationFrom || defaultFrom}
          animate={inView ? (animationTo || defaultTo) : (animationFrom || defaultFrom)}
          transition={{
            duration: 0.5,
            delay: (index * delay) / 1000,
            ease: easing,
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
          className="inline-block whitespace-pre"
        >
          {element === " " ? "\u00A0" : element}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </p>
  );
};
