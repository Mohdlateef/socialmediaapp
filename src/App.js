import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Home from './Components/home';
function App() {
  return (
    <div style={{
      width:"90vw"
    }}>
   <Navbar/>
   <Home/>
    </div>
  );
}

export default App;
