"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  delay: number;
  children: React.ReactNode;
  [props: string]: any;
};

export default function TransitionsEffect({ delay, children, props }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: delay, duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
