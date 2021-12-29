import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Header from './Component/Navbar/Header';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
      <Switch>
        <Route path="/register">
          <Register></Register>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
