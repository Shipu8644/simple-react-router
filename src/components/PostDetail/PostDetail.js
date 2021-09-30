import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';


const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const history = useHistory();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const postsHandle = () => {
        history.push('/posts');
    }

    const { userId, id, title, body } = post;
    return (
        <div>
            <div>
                <h2>See the detail below</h2>
            </div>
            <div>
                <h3>UserId: {userId}</h3>
                <h3>Id: {id}</h3>
                <p>Title: {title}</p>
                <p>{body}</p>
                <button onClick={postsHandle}>See all posts</button>
            </div>
        </div>
    );
};

export default PostDetail;