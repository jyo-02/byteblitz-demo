// src/components/ui/spotlight.jsx
import { motion } from "framer-motion";

export function Spotlight({ className, ...props }) {
  return (
    <motion.div
      className={`pointer-events-none fixed inset-0 z-30 transition duration-300 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent)] ${className}`}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      {...props}
    />
  );
}
