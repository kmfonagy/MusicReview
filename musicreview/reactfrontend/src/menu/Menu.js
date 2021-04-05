import React, { Component } from 'react';
import SideMenu from './SideMenu';
import MenuAlbums from './MenuAlbums';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserID: localStorage.getItem("userID")
        }

        console.log("Apps.js UserID is " + this.props.userID + " &amp; Menu.js UserID is " + this.state.UserID)
    }
    render() {
        return (
            <div className="Menu">
                <div className="MenuSide">
                    <SideMenu UserID={this.state.UserID} />
                </div>
                <div className="MenuMain">
                    <MenuAlbums UserID={this.state.UserID} />
                </div>
            </div>
        )
    }
}

export default Menu;