import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './SideMenu.css'

class SideMenu extends Component {
    render() {
        return (
            <div className="sideMenu">
                <div className="buttons">
                    <Button className="href" href="./Menu/Menu">Back</Button>
                    <Button>My Favorites</Button>
                    <Button className="href" href="./myReviews/MyReviews">My Reviews</Button>
                </div>
                <div className="userInfo">
                    <p>User Information</p>
                </div>
                <div className="logout">
                    <p>Username</p>
                    <Button href="./login/login">Logout Button</Button>
                    <br />
                </div>
            </div>
        )
    }
}

export default SideMenu;