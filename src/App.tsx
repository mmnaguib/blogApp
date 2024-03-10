import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import Posts from "./pages/posts/Posts";
import CreatePost from "./pages/posts/CreatePost";
import Admin from "./pages/Admin/Admin";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/create" element={<CreatePost />} />
        <Route path="/admin-dashboard" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
