import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  //получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue="Cортировка"
          options={[
            {
              value: "title",
              name: "По названию",
            },
            {
              value: "body",
              name: "По описанию",
            },
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Cписок постов 1" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
      )}
    </div>
  );
}

export default App;
