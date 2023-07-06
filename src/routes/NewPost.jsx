import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

import "./NewPost.css";

const NewPost = () => {

  const Navigate = useNavigate()
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault();
    const post = {title, body, userID: 1};
    await blogFetch.post("/posts",{
      body: post,
    });
    Navigate("/")
  };

  return (
    <div className='new-post'>
      <h2>Inserir novo Post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input 
          type="text" 
          id="title" 
          name='title' 
          placeholder='Digite o Título'
          onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteudo:</label>
          <textarea 
          id="body" 
          name='body' 
          placeholder='Digite o Conteudo'
          onChange={(e) => setBody(e.target.value)}/>
        </div>
        <input type='submit' value="Criar Post" className='btn'/>
      </form>
    </div>
  )
}

export default NewPost;