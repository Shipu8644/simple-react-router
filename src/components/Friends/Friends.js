import React, { useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setFriends(data))
    return (
        <div>
            <h1>I have {friends.length} friends</h1>
            <div className='friends-container'>
                {friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}></Friend>)}
            </div>
        </div>

    );
};

export default Friends;