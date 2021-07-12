import React from 'react';
import Icon from '../sample.jpg';

interface ProfileProps {
    name: string;
    email: string;
}

const Profile = (props: ProfileProps) => {
    return (
        <div className="profile">
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>
            <img src={Icon} alt="アイコン" /> 
        </div>
    );
}

export default Profile;
