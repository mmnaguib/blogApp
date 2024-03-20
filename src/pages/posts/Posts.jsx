import PostIList from "../../components/posts/PostIList";
import Sidebar from "../../components/sidebar/Sidebar";
import "./postpage.css";
import Pagination from "../../components/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PostsCount, fetchPosts } from "../../redux/apiCalls/PostCall";
import { fetchCategories } from "../../redux/apiCalls/CategoryCall";
const Posts = () => {
  const POST_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, postsCount } = useSelector((state) => state.post);
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const pages = Math.ceil(postsCount / POST_PER_PAGE);
  useEffect(() => {
    dispatch(fetchPosts(currentPage));
    window.scrollTo(0, 0);
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(PostsCount());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <section className="posts-page">
        <PostIList posts={posts} />
        <Sidebar categories={categories} />
      </section>{" "}
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCount={setCurrentPage}
      />
    </>
  );
};

export default Posts;
