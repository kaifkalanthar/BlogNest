import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const HomeCard = () => {
  const count = useMotionValue(1);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, 100, { duration: 5 });
      return controls.stop;
    }
  }, [inView]);

  const data = [
    { total: 122, name: "Blogs" },
    { total: 64, name: "Organizations" },
    { total: 1232, name: "Total views" },
  ];

  return (
    <div
      ref={ref}
      className={`flex flex-col -mx-5 md:-mx-20 md:flex-row bg-primary md:p-20 p-5 justify-around text-center my-10`}
    >
      {data.map((item, index) => (
        <motion.div key={index + 1} className="my-10 md:my-0">
          <div className="flex justify-center md:justify-none">
            <motion.h1 className="text-5xl">{rounded}</motion.h1>
            <h1 className="text-5xl">+</h1>
          </div>

          <h1>{item.name}</h1>
        </motion.div>
      ))}
    </div>
  );
};

export default HomeCard;
