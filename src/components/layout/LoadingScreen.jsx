import React from "react";
import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="relative z-10 flex flex-col items-center">

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.5, 1.08, 1],
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-indigo-500/40"
        >
          <span className="text-white text-4xl font-extrabold">
            PG
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5 }}
          className="mt-8 text-4xl font-extrabold text-white"
        >
          Parv Gangrade
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-2 text-slate-400 tracking-[0.4em] uppercase text-sm"
        >
          Frontend Developer
        </motion.p>

        {/* Loading Bar */}
        <div className="mt-10 w-72 h-1 rounded-full bg-slate-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-sm text-slate-500"
        >
          Loading Portfolio...
        </motion.p>

      </div>
    </motion.div>
  );
}