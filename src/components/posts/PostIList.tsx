import React from "react";
import PostItem from "./PostItem";
import { postInterface } from "../../redux/type";

interface Props {
  posts: postInterface[];
}
const PostIList = ({ posts }: Props) => {
  return (
    <div className="post-list">
      {posts.map((item) => (
        <PostItem post={item} key={item._id} />
      ))}
    </div>
  );
};

export default PostIList;
