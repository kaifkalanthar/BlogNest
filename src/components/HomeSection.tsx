import { motion } from "framer-motion";
import React from "react";

const HomeSection = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <motion.div
        className="w-[200px] h-[200px] bg-pink-500"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <motion.h1
        className="mx-auto text-5xl"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Under development...
      </motion.h1>
    </div>
  );
};

export default HomeSection;
