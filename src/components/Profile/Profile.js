import React from 'react';
import './Profile.css';

export const user = {
    name: 'Emmanuel Lakis',
    email: 'manolilakis@gmail.com',
    imageUrl: 'BBF5F4A4-8682-48C5-BE81-AEBE4B161ACE_1_201_a.jpeg',
    imageSize: 100,
};

function Profile() {
    return (
        <>
            <div className='profile-container'>
                <img
                    className='profile-pic'
                    src={user.imageUrl}
                    alt={'Photo of ' + user.name}
                    style={{
                        width: user.imageSize,
                        height: user.imageSize
                    }}
                />
                <h1 className='user-name'>{user.name}</h1>
            </div>
        </>
    );
}

export default Profile;