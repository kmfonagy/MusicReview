import React, { Component } from 'react';
import SideMenu from './SideMenu';
import MenuAlbums from './MenuAlbums';
import './Menu.css';

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            UserID: this.props.UserID
        }

        this.id = 1;
    }
    render() {
        return (
            <div className="Menu">
                <div className="MenuSide">
                    <SideMenu UserID={this.id} />
                </div>
                <div className="MenuMain">
                    
                    <MenuAlbums UserID={this.id} />
                </div>
            </div>
        )
    }
}

export default Menu;