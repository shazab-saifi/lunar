"use client";

import * as React from "react";
import { motion, stagger } from "motion/react";
import { cn } from "@/lib/utils";

type StaggerTextTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

type StaggerTextProps = {
  children: string;
  as?: StaggerTextTag;
  className?: string;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: stagger(0.1),
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: -10,
  },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function StaggerText({ children, as = "p", className }: StaggerTextProps) {
  const words = children.split(/\s+/).filter(Boolean);
  const MotionTag = motion[as] as React.ElementType;

  return (
    <MotionTag
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {words.map((word, index) => (
        <React.Fragment key={`${word}-${index}`}>
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
          {index < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </MotionTag>
  );
}

export { StaggerText };
