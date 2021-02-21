import Menu from './menu/Menu';
import Login from "./login/login";
import MyReviews from "./myReviews/MyReviews"
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      <Menu />
      <MyReviews />
    </div>
  );
}

export default App;
