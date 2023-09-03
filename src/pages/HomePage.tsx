import BlogsGrid from "../components/BlogsGrid";
import Faq from "../components/Faq";
import HomeCard from "../components/HomeCard";
import HomeSection from "../components/HomeSection";

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <BlogsGrid />
      <HomeCard />
      <Faq />
    </>
  );
};

export default HomePage;
