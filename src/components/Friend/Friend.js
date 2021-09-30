import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    const history = useHistory();
    const friendStyle = {
        backgroundColor: 'lightgreen',
        borderRadius: '10px',
        padding: '10px'
    }
    const handleFriendClick = () => {
        history.push(`/friend/${id}`);
    }
    return (
        <div style={friendStyle}>
            <h2> I am {name} {id} </h2>
            <h5>Call me: {phone}</h5>
            <p>Visit me:{website}</p>
            <p><small>i live in {address.city}</small></p>
            <NavLink style={{ color: 'yellow', textDecoration: 'none', fontSize: '20px' }} to={`/friend/${id}`} > <strong >Visit me</strong></NavLink>
            <br />
            <br />
            <NavLink to={`/friend/${id}`}>
                <button style={{ fontSize: '20px', cursor: 'pointer' }}>Visit Me (using Link or NavLink)</button>
            </NavLink>
            <br />
            <br />
            <button onClick={handleFriendClick} style={{ fontSize: '20px', cursor: 'pointer' }}>Visit Me (usinghandle)</button>

        </div>
    );
};

export default Friend;