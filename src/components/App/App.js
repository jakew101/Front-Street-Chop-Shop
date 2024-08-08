import './App.css';
import NavBar from '../NavBar/NavBar';
import Jumbotron from '../Jumbotron/Jumbotron';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Location from '../Location/map';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <About />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
