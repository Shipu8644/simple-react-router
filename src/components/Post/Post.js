import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Post.css'
const Post = (props) => {
    const { id, title, body } = props.post;

    const history = useHistory();
    const singlePostHandle = () => {
        history.push(`/post/${id}`)
    }
    return (
        <div className="single-post">
            <h3>Id: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <NavLink to={`/post/${id}`} >Click here</NavLink>
            <br />
            <br />
            <button onClick={singlePostHandle}>Single Post</button>
        </div>
    );
};

export default Post;