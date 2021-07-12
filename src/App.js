import './app.css'
import Home from "./screens/home/Home";
import Navbar from './components/navbar/Navbar'
import Single from './screens/single/Single';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Single />
    </div>
  );
}

export default App;
