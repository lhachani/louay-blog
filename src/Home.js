import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // let name = "louay";
  const [blogs, setBlogs] = useState([
    { title: "React Website", body: "lorem ipsum...", author: "louay", id: 1 },
    {
      title: "React Website2",
      body: "lorem ipsum...",
      author: "hachani",
      id: 2,
    },
    { title: "React Website3", body: "lorem ipsum...", author: "louay", id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="Blogs List" />
    </div>
  );
};

export default Home;
