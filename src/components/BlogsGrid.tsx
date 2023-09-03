import BlogCard from "./BlogCard";
import Header from "./Header";

const BlogsGrid = () => {
  return (
    <div className="my-20">
      <Header>Blogs</Header>
      <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-3 w-full my-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogsGrid;
