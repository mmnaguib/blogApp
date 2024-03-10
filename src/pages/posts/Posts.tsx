import PostIList from "../../components/posts/PostIList";
import Sidebar from "../../components/sidebar/Sidebar";
import "./postpage.css";
import { posts, categories } from "../../dummyData";
import Pagination from "../../components/pagination/Pagination";
import { useEffect } from "react";
const Posts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="posts-page">
        <PostIList posts={posts} />
        <Sidebar categories={categories} />
      </section>{" "}
      <Pagination />
    </>
  );
};

export default Posts;
