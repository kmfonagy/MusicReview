import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './SideFavs.css'

class SideFavs extends Component {
    render() {
        return (
            <div className="SideFavs">
                <div className="UserBtns">
                <Link to="/menu" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary">
                            Menu
                        </Button>
                    </Link>
                    <Link to="/reviews" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="secondary">
                            My Reviews
                        </Button>
                    </Link>
                </div>
                <div className="UserInfo">
                    
                </div>
                <div className="LoginBtns">
                    &lt;username&gt;
                    <Link to="/" style={{ textDecoration: 'none', backgroundColor: 'inherit' }}>
                        <Button variant="contained" color="secondary">
                            logout
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default SideFavs;