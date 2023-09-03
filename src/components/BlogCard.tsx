import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { FiMoreVertical } from "react-icons/fi";
import { PiReadCvLogoLight } from "react-icons/pi";
import cardImg from "../assets/dummy.jpg";
import Badge from "./Badge";
const BlogCard = () => {
  const categoryColor = ["#7E22CE", "#EA580C", "#15803D"];
  const category = ["Health", "Read", "Food"];
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="card-container">
      <div className="overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={cardImg}
          className="h-[280px] w-[100%] object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 py-2">
        <div className="flex justify-between items-center font-medium">
          <h1 className="flex gap-1 items-center">
            <div className="text-dprimary">
              <AiOutlineUser />
            </div>
            MhdKaif
          </h1>
          <div className="w-2 h-2 bg-yellow rounded-full" />
          <h1 className="flex gap-1 items-center">
            <div className="text-dprimary">
              <CiCalendarDate />
            </div>
            22Jul2023
          </h1>
          <div className="w-2 h-2 bg-yellow rounded-full" />
          <h1 className="flex gap-1 items-center">
            <div className="text-dprimary">
              <PiReadCvLogoLight />
            </div>
            3.min Read
          </h1>
        </div>
        <div>
          <h1 className="text-[19px] font-semibold mb-3">
            Chandrayaan-3 is a technological endeavor by the ISRO
          </h1>
          <p className="text-[13.08px] font-normal text-gray">
            The mission successfully executed a controlled descent on the moon’s
            South Pole on the 23rd of August. Re....
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            {category.map((item, index) => (
              <Badge textColor={categoryColor[index]} key={item}>
                {item}
              </Badge>
            ))}
          </div>
          <div className="flex gap-1">
            <div
              onClick={() => setIsLiked(!isLiked)}
              className="cursor-pointer"
            >
              {isLiked ? <FcLike /> : <AiOutlineHeart />}
            </div>
            <FiMoreVertical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
