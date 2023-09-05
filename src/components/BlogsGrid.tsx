import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import Header from "./Header";

const fadeInAnimationVariants = (index: number) => ({
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  },
});

const BlogsGrid = () => {
  return (
    <div className="my-20">
      <Header>Blogs</Header>
      <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3 w-full my-10">
        {[0, 1, 2].map((item) => (
          <motion.div
            variants={fadeInAnimationVariants(item)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            key={item}
          >
            <BlogCard />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogsGrid;
