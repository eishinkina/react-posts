import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../Hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComment, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });
  useEffect(() => {
    if (params.id) {
      fetchPostById(params.id);
      fetchComment(params.id);
    }
  }, [params]);
  return (
    <div>
      <h1 style={{marginBottom:"20px", textAlign:"center"}}>Вы открыли страницу поста c ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{textAlign:"center"}}>
          {post.id}. {post.title}
        </div>
      )}
      <h1 style={{marginTop:"30px", textAlign:"center"}}>Комментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => {
            return (
              <div key={comm.id} style={{ marginTop: "25px", width: "100%", maxWidth:"800px" }}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
