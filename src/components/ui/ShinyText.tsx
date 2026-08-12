"use client";

import { cn } from "@/lib/utils";

export const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}: {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent bg-[linear-gradient(120deg,#4338ca_0%,#818cf8_50%,#4338ca_100%)] bg-[length:200%_100%]",
        !disabled && "animate-shiny-text",
        className
      )}
      style={{ animationDuration }}
    >
      {text}
    </span>
  );
};
