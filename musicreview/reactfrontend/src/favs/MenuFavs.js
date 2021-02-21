import React, { Component } from 'react';
import Album from '../menu/Album';
import './MenuFavs.css';

class MenuFavs extends Component {
    // Can be deleted once connected to database
    static defaultProps = {
        music : [
            {
                id: 1,
                title: 'Medicine at Midnight',
                artist: 'Foo Fighters',
                release_date: '02/12/2021',
                duration: '00:37',
                rating: 5,
                genre: 'Rock',
                img: 'https://media.pitchfork.com/photos/5ff365a123155174547abec2/1:1/w_320/Foo-Fighters.jpg'
            },
            {
                id: 2,
                title: 'Glowing in the Dark',
                artist: 'Django Django',
                release_date: '02/12/2021',
                duration: '00:44',
                rating: 4,
                genre: 'Indie Pop',
                img: 'https://i1.wp.com/www.musicomh.com/wp-content/uploads/2021/02/django-django-glowing-in-the-dark.jpg?fit=640%2C640&ssl=1'
            },
            {
                id: 3,
                title: 'Tyron',
                artist: 'slowthai',
                release_date: '02/12/2021',
                duration: '00:35',
                rating: 4,
                genre: 'Hip Hop',
                img: 'https://f4.bcbits.com/img/0023565996_16.jpg'
            },
            {
                id: 4,
                title: 'Arrival of the New Elders',
                artist: 'Elephant9',
                release_date: '02/12/2021',
                duration: '01:11',
                rating: 3,
                genre: 'Jazz',
                img: 'https://images.roughtrade.com/product/images/files/000/209/491/original/elephant9_arrival_of_the_new_elders.jpg?1611071925t'
            },
            {
                id: 5,
                title: '0202',
                artist: 'The Reubens',
                release_date: '02/12/2021',
                duration: '00:38',
                rating: 3,
                genre: 'Rock',
                img: 'https://images.genius.com/3686765620550faec8182141852ad93f.1000x1000x1.jpg'
            }

        ]
    };
    render() {
        return(
            <div className="FavAlbums">
                <div className="AlbumCards">
                    {this.props.music.map((p) => (
						<Album id={p.id} title={p.title} artist={p.artist} img={p.img} />
					))}
                </div>
            </div>
        )
    }
}

export default MenuFavs;