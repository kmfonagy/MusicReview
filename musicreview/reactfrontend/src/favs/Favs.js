import React, { Component } from 'react';
import SideFavs from './SideFavs';
import MenuFavs from './MenuFavs';
import './Favs.css';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserID: this.props.UserID
        }

        this.id = 1;
    }
    render() {
        return (
            <div className="Favs">
                <div className="FavsSide">
                    <SideFavs UserID={this.id} />
                </div>
                <div className="FavsMain">
                    <MenuFavs UserID={this.id} />
                </div>
            </div>
        )
    }
}

export default Menu;