import React, { Component } from 'react';
import Album from './Album';
import './MenuAlbums.css';

class MenuAlbums extends Component {
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
            },
            {
                id: 6,
                title: "And It's Still Alright",
                artist: 'Nathaniel Rateliff',
                release_date: '02/14/2021',
                duration: '00:42',
                rating: 4,
                genre: 'Soul',
                img: 'https://cdn2.thelineofbestfit.com/images/remote/https_cdn2.thelineofbestfit.com/media/2014/NR_ItsStillAlright_Cover_5inchprint-1024x1024.jpg'
            },
            {
                id: 7,
                title: 'Drug of Choice',
                artist: 'Cube',
                release_date: '02/12/2021',
                duration: '00:38',
                rating: 2,
                genre: 'Electronic',
                img: 'https://f4.bcbits.com/img/a4073958906_16.jpg'
            },
            {
                id: 8,
                title: 'Heading into the Fire',
                artist: 'Toledo Steel',
                release_date: '02/12/2021',
                duration: '00:41',
                rating: 0,
                genre: 'Metal',
                img: 'https://assets.bigcartel.com/product_images/280926980/Album+Small.jpg?auto=format&fit=max&w=1200'
            }

        ]
    };
    render() {
        return(
            <div className="MenuAlbums">
                <div className="AlbumCards">
                    {this.props.music.map((p) => (
						<Album id={p.id} title={p.title} artist={p.artist} img={p.img} />
					))}
                </div>
            </div>
        )
    }
}

export default MenuAlbums;