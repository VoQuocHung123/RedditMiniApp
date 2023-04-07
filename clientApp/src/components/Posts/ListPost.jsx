import React from "react";
import { useSelector } from "react-redux";
export default function ListPost() {
  const listPosts = useSelector((state) => state.posts.listPost);
  console.log(listPosts); 
  return (
    <div className="container-posts text-white ">
      {listPosts?.map((item) => {
        return (
          <div className="post-item border-t-2 border-b-2 my-2">
            <div className="title-post">{item.title}</div>
            <p className="descriptions-post">{item.descriptions}</p>
            <span className="tags-post">Tag: {item.tag}</span>
          </div>
        );
      })}
    </div>
  );
}
