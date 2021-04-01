
import Menu from './menu/Menu';
import Login from "./login/login";
import Favorites from './favs/Favs';
import MyReviews from './myReviews/MyReviews';
import Review from './review/Review';
import SignUp from './signUp/SignUp';
import './App.css';
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import { RecentActorsSharp } from '@material-ui/icons';
import React from 'react';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      UserID: 0,
      AlbumID: 0
    }
  }
  UpdateUserID = (id) => {
    this.setState({
      UserID: id
    })
    console.log("AppUserID = " + this.state.UserID)
  }

  UpdateAlbumID = id => {
    this.setState({
      AlbumID: id
    })
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={
            props => <Login {...props} setUserID={this.UpdateUserID} />
          } />
          <Route path='/menu' render={
            props => <Menu {...props} userID={this.state.UserID} />
          } />
          <Route path='/my-favorites' component={Favorites} />
          <Route path='/review' component={Review} />
          <Route path='/album-review' component={Review} />
          <Route path='/my-reviews' component={MyReviews} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
