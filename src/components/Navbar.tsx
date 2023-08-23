import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <div className="w-100 p-5 bg-slate-500">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[60px] h-[60px] rounded-[50% align-middle cursor-pointer flex items-center justify-center"
      >
        <div
          className="flex flex-col gap-2 justify-start"
          onClick={() => setIsClosed(!isClosed)}
        >
          <div
            className={`hr h1 w-[60px] h-[6px] bg-black rounded-xl m-auto ${
              isClosed ? "rotate-0" : "-rotate-[135deg]"
            } ease-linear duration-100`}
          />
          <div
            className={`hr h1 w-[24px] h-[6px] bg-black rounded-xl m-auto ${
              isClosed ? "block" : "hidden"
            }`}
          />
          <div
            className={`hr h1 w-[60px] h-[6px] bg-black rounded-xl m-auto ${
              isClosed ? "rotate-0" : "rotate-[135deg]"
            }`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
