import Menu from './menu/Menu';
import Login from "./login/login";
import MyReviews from "./myReviews/MyReviews"
import './App.css';
import { Route } from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      <Route path='/menu' component={Menu} />
      {/*Keep at bottom */} <Route path='/' component={Login} />

      { /* <MyReviews /> */}
    </div>
  );
}

export default App;
