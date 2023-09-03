import { motion } from "framer-motion";
import { useState } from "react";
import { BiBookmarkPlus, BiBookmarkMinus } from "react-icons/bi";
interface Faq {
  question: string;
  answer: string;
}

interface Props {
  item: Faq;
  index: number;
}
const QAcard = ({ item, index }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div
      className={`w-[100%] md:w-[80%] mx-auto p-5 border-gray ${
        index === 4 ? "" : "border-b-[1px]"
      }`}
    >
      <div className="flex justify-between text-2xl items-center font-bold border-b-1 border-gray mb-3">
        <h1>{item.question}</h1>
        <div className="cursor-pointer" onClick={() => setIsOpened(!isOpened)}>
          {!isOpened ? <BiBookmarkPlus /> : <BiBookmarkMinus />}
        </div>
      </div>
      {isOpened && (
        <motion.h1
          className="md:w-[90%]"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          {item.answer}
        </motion.h1>
      )}
    </div>
  );
};

export default QAcard;
