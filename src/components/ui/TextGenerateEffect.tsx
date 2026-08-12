"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const controls = useAnimation();
  const wordsArray = words.split(" ");

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5 },
    }));
  }, [controls]);

  return (
    <div className={cn("font-bold", className)}>
      <motion.div className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              custom={idx}
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              animate={controls}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};
