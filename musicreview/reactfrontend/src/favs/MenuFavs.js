import React, { Component } from 'react';
import Album from '../menu/Album';
import tempData from './tempData';
import './MenuFavs.css';

class MenuFavs extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="FavAlbums">
                <div className="FavsHeader">My Favorites</div>
                <div className="AlbumCards">
                    {tempData.music.filter(favd => favd.fav).map((p) => (
                        <Album key={p.id} title={p.title} artist={p.artist} img={p.img} />
					))}
                </div>
            </div>
        )
    }
}

export default MenuFavs;