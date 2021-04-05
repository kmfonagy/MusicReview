import React, { Component } from 'react';
import SideFavs from './SideFavs';
import MenuFavs from './MenuFavs';
import './Favs.css';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserID: localStorage.getItem("userID")
        }
    }
    render() {
        return (
            <div className="Favs">
                <div className="FavsSide">
                    <SideFavs UserID={this.state.UserID} />
                </div>
                <div className="FavsMain">
                    <MenuFavs UserID={this.state.UserID} />
                </div>
            </div>
        )
    }
}

export default Menu;