import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
import './Profile.css';

const user = {
    name: 'Emmanuel Lakis',
    email: 'manolilakis@gmail.com',
    imageUrl: '../../../58F0A935-36A7-43BB-AC5F-E33E44C82A4E_1_105_c.jpeg',
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