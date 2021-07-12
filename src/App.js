import './app.css'
import Home from "./screens/home/Home";
import Navbar from './components/navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
