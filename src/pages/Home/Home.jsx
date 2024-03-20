import PostIList from "../../components/posts/PostIList";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../../redux/apiCalls/PostCall";
import { fetchCategories } from "../../redux/apiCalls/CategoryCall";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const { categories } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(fetchPosts(1));
    dispatch(fetchCategories());
    window.scroll(0, 0);
  }, [dispatch]);
  return (
    <section className="homeContent">
      <div className="home">
        <div className="home-header">Welcome To Blog</div>
      </div>
      <div className="home-latest-posts">Latest Posts</div>
      <div className="home-container">
        <PostIList posts={posts} />
        <Sidebar categories={categories} />
      </div>
      <div className="all-posts">
        <Link to="/posts" className="seeAllBtn">
          See All Posts
        </Link>
      </div>
    </section>
  );
};

export default Home;
