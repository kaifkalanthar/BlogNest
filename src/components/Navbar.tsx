import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
interface MenuOptions {
  menu: "home" | "about" | "blog" | "contact";
}

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(true);
  const [isSelected, setIsSelected] = useState<MenuOptions>({ menu: "home" });
  const List = styled.li`
    background: ${isSelected ? "" : ""};
    cursor: pointer;
  `;
  return (
    <div className="md:px-10">
      <div className="w-100 p-5 flex justify-between">
        <div>
          <img
            src={logo}
            className="w-[90px] h-[50px] md:w-[120px] md:h-[70px]"
          />
        </div>

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
        className={`w-full h-[90vh] ${isClosed ? "hidden" : "block"}`}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ul className="list-none text-7xl my-auto h-[100%] flex flex-col gap-10">
            <List
              onClick={() => {
                setIsSelected({ menu: "home" });
                setIsClosed(!closed);
              }}
            >
              Home
            </List>
            <List onClick={() => setIsSelected({ menu: "about" })}>About</List>
            <List onClick={() => setIsSelected({ menu: "blog" })}>Blog</List>
            <List onClick={() => setIsSelected({ menu: "contact" })}>
              Contact
            </List>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
