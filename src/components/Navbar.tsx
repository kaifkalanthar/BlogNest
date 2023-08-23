import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <motion.div>
      <div className="w-100 p-5 bg-purple-600">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[60px] h-[60px] rounded-[50% align-middle cursor-pointer flex items-center justify-center"
          onClick={() => setIsClosed(!isClosed)}
        >
          <div className="flex flex-col gap-2 justify-start">
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
              } ease-linear duration-100`}
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className={`w-full h-[90vh] bg-purple-600 ${
          isClosed ? "hidden" : "block"
        }`}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ul className="list-none text-7xl h-[100%] flex flex-col gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
