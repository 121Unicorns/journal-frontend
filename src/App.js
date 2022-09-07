import logo from './logo.svg';
import RoutesTree from "./Components/RoutesTree";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import './App.css';
import './bulma.css';
import './index.css';

function App() {
  return (
    <div style={{backgroundColor: '#A27B5C'}}>
            <div>
            <Navigation/>
            <RoutesTree/>
            </div>
    </div>
  );
}

export default App;
