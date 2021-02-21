import React, { Component } from 'react';
import SideFavs from './SideFavs';
import MenuFavs from './MenuFavs';
import './Favs.css';

class Menu extends Component {
    render() {
        return (
            <div className="Favs">
                <div className="FavsSide">
                    <SideFavs />
                </div>
                <div className="FavsMain">
                    <div className="FavsHeader">Favorites</div>
                    <MenuFavs />
                </div>
            </div>
        )
    }
}

export default Menu;