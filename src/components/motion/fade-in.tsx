"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  y = 14,
  className,
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
} & MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

