"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const SplitText = ({
  text,
  className,
  delay = 0.05,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const letters = text.split("");

  return (
    <div className={cn("inline-block overflow-hidden", className)}>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * delay,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};
