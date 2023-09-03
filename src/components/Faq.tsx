import faq from "../data/faq";
import Header from "./Header";
import QAcard from "./QAcard";

const Faq = () => {
  return (
    <div>
      <Header>FAQ</Header>
      <div className="flex flex-col gap-3 w-full my-5">
        {faq.map((item, index) => (
          <QAcard key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
