import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import Posts from "./pages/posts/Posts";
import Admin from "./pages/admin/Admin";
import Footer from "./components/footer/Footer";
import CreatePost from "./pages/posts/create-post/CreatePost";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PostDetails from "./pages/posts/post-details/PostDetails";
import Category from "./pages/category/Category";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/posts" element={<Posts />} />
        <Route path="post">
          <Route path="create" element={<CreatePost />} />
          <Route path="details/:id" element={<PostDetails />} />
          <Route path="category/:category" element={<Category />} />
        </Route>
        <Route path="/admin-dashboard" element={<Admin />} />
      </Routes>
      <Footer />
      <ToastContainer theme="colored" position="top-center" />
    </BrowserRouter>
  );
}

export default App;
