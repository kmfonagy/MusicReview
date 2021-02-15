import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './SideMenu.css'

class SideMenu extends Component {
    render() {
        return (
            <div className="SideMenu">
                <div className="UserBtns">
                    <Button>My Favorites</Button>
                    <Button>My Reviews</Button>
                </div>
                <div className="UserInfo">
                    <p>&lt;User_Info_Here&gt;</p>
                </div>
                <div className="LoginBtns">
                    <Button>&lt;username&gt;</Button>
                    <Button>logout</Button>
                </div>
            </div>
        )
    }
}

export default SideMenu;