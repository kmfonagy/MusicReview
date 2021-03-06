import React, { Component } from 'react';
import SideMenu from './SideMenu';
import MenuAlbums from './MenuAlbums';
import './Menu.css';

class Menu extends Component {
    

    render() {
        
        return (
            <div className="Menu">
                <div className="MenuSide">
                    <SideMenu />
                </div>
                <div className="MenuMain">
                    
                    <MenuAlbums/>
                </div>
            </div>
        )
    }
}

export default Menu;