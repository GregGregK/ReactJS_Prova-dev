import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogFetch from "../axios/config";
import {Link} from "react-router-dom"
import './PostSolo.css'

const PostSolo = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await blogFetch.get(`/posts/${id}`);
        const data = response.data;
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPost();
  }, [id]);

  return (
    <div className="PostSolo">
      {post ? (
        <div className={post.id} key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <br></br>
          <Link to={"/"} className="btn">Voltar</Link>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default PostSolo;
