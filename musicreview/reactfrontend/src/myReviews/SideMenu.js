import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './SideMenu.css'

class SideMenu extends Component {
    render() {
        return (
            <div className="sideMenu">
                <div className="buttons">
                    <Button>Back</Button>
                    <Button>My Favorites</Button>
                    <Button>My Reviews</Button>
                </div>
                <div className="userInfo">
                    <p>User Information</p>
                </div>
                <div className="logout">
                    <p>Username</p>
                    <Button>Logout Button</Button>
                    <br />
                </div>
            </div>
        )
    }
}

export default SideMenu;