import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    let history = useHistory();

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    const allFriendHandler = () => {
        history.push('/friends');
    }

    return (
        <div>
            <h3>Hey detail of friend: {friendId}</h3>
            <h3>Name: {friend.name}</h3>
            <h3>Phone: {friend.phone}</h3>
            <h4>Website: {friend.website}</h4>
            <p>Wroks at: {friend.company?.name}</p>

            <button onClick={allFriendHandler} style={{ fontSize: '20px', cursor: 'pointer' }}>See All Friends</button>

        </div>
    );
};

export default FriendDetail;