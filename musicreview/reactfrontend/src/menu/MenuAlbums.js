import React, { Component } from 'react';
import Album from './Album';
import tempData from './tempData';
import { Button } from '@material-ui/core';
import Form from "react-bootstrap/Form";
import './MenuAlbums.css';


class MenuAlbums extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ``
        };
        
        this.value = 0;

    }

    handleInputChanged(event) {
        this.setState({
          searchQuery: event.target.value
        });
      }
    
      handleButtonClicked() {
        var searchQuery = this.state.searchQuery;
        console.log(this.state.searchQuery)
      }

    render() {
        const value = this.state.searchQuery.toLowerCase();
        return(
            <div className="MenuAlbums">
                <div className="MenuSearch">
                    <Form className='MenuBar' >
                        <input 
                            className='MenuInput' 
                            type="text" 
                            value={this.state.searchQuery}
                            onChange={this.handleInputChanged.bind(this)}
                        />
                    </Form>
                        
                    <Button onClick={this.handleButtonClicked.bind(this)}>Search</Button>
                </div>
                <div className="AlbumCards">
                    {tempData.music
                        .filter(album => {
                            if (!value) return true
                            if (album.title.toLowerCase().includes(value) || album.artist.toLowerCase().includes(value)) {
                                return true
                            }
                        })
                        .map((album) => (
						<Album key={album.id} title={album.title} artist={album.artist} img={album.img} />
					))}
                </div>
            </div>
        )
    }
}

export default MenuAlbums;