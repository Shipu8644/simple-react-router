import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Posts.css'
const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <div>
                <h1> here is {posts.length} posts</h1>
            </div>
            <div className='posts-container'>
                {posts.map(post => <Post
                    key={post.id}
                    post={post}></Post>)}
            </div>
        </div>
    );
};

export default Posts;