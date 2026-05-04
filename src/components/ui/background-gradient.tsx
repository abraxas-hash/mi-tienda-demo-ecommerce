import { motion } from "framer-motion";
import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform bg-gradient-custom-blur"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform bg-gradient-custom"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
