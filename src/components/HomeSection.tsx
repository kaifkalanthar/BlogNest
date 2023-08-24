import { motion } from "framer-motion";
import hero from "../assets/hero.svg";

const HomeSection = () => {
  return (
    <div className="w-full h-[70vh] bg-hero-bg flex justify-between">
      <div className="my-auto ml-8">
        <motion.h1
          className="text-7xl  font-bold"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          We Provide Blogs, <br /> <span>For Good</span>
        </motion.h1>
        <p className="w-[80%] mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          aliquam at aliquid nostrum obcaecati quisquam, fugit ex! Nemo ullam,
          rem nobis, non quaerat doloremque cumque similique id vitae quos
          optio?
        </p>
      </div>
      <div className="w-[50%]">
        <img src={hero} alt="Hero" />
      </div>
    </div>
  );
};

export default HomeSection;
