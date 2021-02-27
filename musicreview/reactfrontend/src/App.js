
import Menu from './menu/Menu';
import Login from "./login/login";
import Favorites from './favs/Favs';
import Reviews from "./myReviews/MyReviews";
import AlbumReview from './review/Review';
import './App.css';
import { Route } from "react-router-dom";
import { Switch } from "react-router";


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/menu' component={Menu} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/album-review' component={AlbumReview} />
      </Switch>
    </div>
  );
}

export default App;
