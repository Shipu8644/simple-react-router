import React from 'react';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    const friendStyle = {
        backgroundColor: 'lightgreen',
        borderRadius: '10px',
        padding: '10px'
    }
    return (
        <div style={friendStyle}>
            <h2> I am {name} {id} </h2>
            <h5>Call me: {phone}</h5>
            <p>Visit me:{website}</p>
            <p><small>i live in {address.city}</small></p>
            <NavLink style={{ color: 'yellow', textDecoration: 'none', fontSize: '20px' }} to={`/friend/${id}`} > <strong >Visit me</strong></NavLink>
        </div>
    );
};

export default Friend;