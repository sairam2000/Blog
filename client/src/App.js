import './app.css'
import Home from "./screens/home/Home";
import Navbar from './components/navbar/Navbar'
import Single from './screens/single/Single';
import Write from './screens/write/Write';
import Settings from './screens/settings/Settings';
import Login from './screens/login/Login';
import Register from './screens/register/Register';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  const currentUser = true;
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
