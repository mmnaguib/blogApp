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
import Profile from "./pages/profile/Profile";
import UsersTable from "./pages/admin/UsersTable";
import CategoriesTable from "./pages/admin/CategoriesTable";
import PostsTable from "./pages/admin/PostsTable";
import CommentsTable from "./pages/admin/CommentsTable";
import ForgotPassword from "./pages/forms/ForgotPassword";
import ResetPassword from "./pages/forms/ResetPassword";
import NotFound from "./pages/not-found/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/posts" element={<Posts />} />
        <Route path="post">
          <Route path="create" element={<CreatePost />} />
          <Route path="details/:id" element={<PostDetails />} />
          <Route path="category/:category" element={<Category />} />
        </Route>

        <Route path="profile/:id" element={<Profile />} />

        <Route path="/admin-dashboard">
          <Route index element={<Admin />} />
          <Route path="users-table" element={<UsersTable />} />
          <Route path="categories-table" element={<CategoriesTable />} />
          <Route path="posts-table" element={<PostsTable />} />
          <Route path="comments-table" element={<CommentsTable />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer theme="colored" position="top-center" />
    </BrowserRouter>
  );
}

export default App;
