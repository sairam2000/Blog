import './app.css'
import Home from "./screens/home/Home";
import Navbar from './components/navbar/Navbar'
import Single from './screens/single/Single';
import Write from './screens/write/Write';
import Settings from './screens/settings/Settings';
import Login from './screens/login/Login';
import Register from './screens/register/Register';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Register/>
    </div>
  );
}

export default App;
