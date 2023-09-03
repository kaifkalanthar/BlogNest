import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "./HomeSection";
import logo from "../assets/logo.png";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { SlSocialBehance } from "react-icons/sl";
import { styled } from "styled-components";

const Footer = () => {
  const List = styled.li`
    margin-bottom: 10px;
    text-color: #eee;
  `;
  return (
    <div className="px-5 md:px-20 md:py-20 py-5 text-white bg-black">
      <div className="flex flex-col md:flex-row justify-between border-b-[0.5px] border-gray text-center md:text-start pb-5">
        <h1 className="text-2xl md:text-4xl mb-5">
          Empowering Thoughts <br /> Through Words
        </h1>
        <div className="w-fit mx-auto md:mx-0">
          <Button>
            Get Started{" "}
            <span className="mx-2 my-auto hover:translate-x-2 duration-100">
              <AiOutlineArrowRight />
            </span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-x-20">
        <div>
          <div className="my-5">
            <img
              src={logo}
              className="w-[90px] h-[50px] md:w-[120px] md:h-[70px]"
            />
          </div>
          <p className="text-gray text-sm">
            At BlogNest, we're passionate about sharing insights, experiences,
            and diverse perspectives on a wide range of topics. Whether you're
            looking for practical advice, creative inspiration, or simply a good
            read, you'll find it here. Our team of talented writers and
            contributors bring you thought-provoking articles, informative
            guides, and captivating narratives. From travel adventures to tech
            trends, lifestyle tips to in-depth analysis, there's something for
            everyone.
          </p>
          <div className="flex gap-4 my-5 text-4xl">
            <BsLinkedin />
            <SlSocialBehance />
            <BsTwitter />
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-auto gap-10">
          <div>
            <h1 className="font-bold text-2xl my-5">Company</h1>
            <ul className="list-none font-light">
              <List>Cuomer Support</List>
              <List>FAQ</List>
              <List>Terms and Conditions</List>
              <List>Privacy Policy</List>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl my-5">Categories</h1>
            <ul className="list-none font-light">
              <List>Travel</List>
              <List>Technology</List>
              <List>Health & Wellness</List>
              <List>Fashion & Style</List>
              <List>Business & Finance</List>
              <List>Lifestyle</List>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-2xl my-5">Contact</h1>
            <ul className="list-none font-light">
              <List>{`+91 (63498)-(217xx)`}</List>
              <List>blognest.official@gmail.com</List>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
