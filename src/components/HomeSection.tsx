import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import hero from "../assets/hero.svg";

export const Button = styled.button`
  background: #c59cef;
  padding: 1rem 2rem;
  border-radius: 60px;
  display: flex;
`;
const HomeSection = () => {
  return (
    <div className="w-full h-fit bg-hero-bg flex flex-col-reverse justify-between md:flex-row overflow-hidden">
      <div className="my-5 md:my-auto md:ml-8 flex flex-col gap-5">
        <div className="label bg-white px-4 py-3 flex w-fit rounded-full drop-shadow-lg">
          <p className="flex items-center">
            <span className="bg-primary  px-3 py-1 mr-3 rounded-full">New</span>{" "}
            Check out Popular blogs{" "}
            <span className="ml-2">
              <AiOutlineArrowRight />
            </span>
          </p>
        </div>
        <motion.h1
          className="text-5xl md:px-2 font-bold text-center md:text-5xl md:text-start"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          We Provide Blogs, <br />{" "}
          <span>
            For <span className="text-primary">Good</span>
          </span>
        </motion.h1>
        <p className="w-[100%] md:px-2 md:w-[60%] text-[14px] text-nt-gray/90 font-light mt-5 text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          aliquam at aliquid nostrum obcaecati quisquam, fugit ex! Nemo ullam,
          rem nobis, non quaerat doloremque cumque similique id vitae quos
          optio?
        </p>
        <div className="w-fit">
          <Button>
            Get Started{" "}
            <span className="mx-2 my-auto hover:translate-x-2 duration-100">
              <AiOutlineArrowRight />
            </span>
          </Button>
        </div>
      </div>
      <div className="w-full">
        <motion.img
          className="mx-auto"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          src={hero}
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default HomeSection;
