"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export const CountUp: React.FC<CountUpProps> = ({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  decimals = 0,
  prefix = "",
  suffix = "",
  onStart,
  onEnd,
}) => {
  const [count, setCount] = useState<number>(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if ((isInView && startWhen && !hasAnimated.current) || (!isInView && startWhen && !hasAnimated.current)) {
      if (!isInView) return;
      hasAnimated.current = true;
      if (onStart) onStart();

      let startTime: number | null = null;
      let animationFrameId: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Ease out expo formula for smooth landing
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        const currentCount =
          direction === "up"
            ? from + (to - from) * easeProgress
            : from - (from - to) * easeProgress;

        setCount(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(to);
          if (onEnd) onEnd();
        }
      };

      const timer = setTimeout(() => {
        animationFrameId = requestAnimationFrame(step);
      }, delay * 1000);

      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isInView, startWhen, from, to, direction, delay, duration, onStart, onEnd]);

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join(".");
  };

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};
