import React, { Component } from 'react';
import SideMenu from './SideMenu';
import MenuAlbums from './MenuAlbums';
import { Button } from '@material-ui/core';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <div className="MenuSide">
                    <SideMenu />
                </div>
                <div className="MenuMain">
                    <div className="MenuSearch">
                        <input className='MenuBar' id="search" name="search"></input>
                        <Button >Search</Button>
                    </div>
                    <MenuAlbums />
                </div>
            </div>
        )
    }
}

export default Menu;