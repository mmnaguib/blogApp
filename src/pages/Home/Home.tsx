import PostIList from "../../components/posts/PostIList";
import "./home.css";
import { posts } from "../../dummyData";
import { categories } from "../../dummyData";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="homeContent">
      <div className="home">
        <div className="home-header">Welcome To Blog</div>
      </div>
      <div className="home-latest-posts">Latest Posts</div>
      <div className="home-container">
        <PostIList posts={posts.slice(0, 3)} />
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
