import React from "react";
import { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({ title: "", body: "" });
  };

  return (
    <div>
      <form>
        <MyInput
          type="title"
          placeholder="Название поста"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <MyInput
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
