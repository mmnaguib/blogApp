import React from "react";
import PostItem from "./PostItem";

const PostIList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((item) => (
        <PostItem post={item} key={item._id} />
      ))}
    </div>
  );
};

export default PostIList;
