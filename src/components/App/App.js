import './App.css';
import NavBar from '../NavBar/NavBar';
import Jumbotron from '../Jumbotron/Jumbotron';
import About from '../About/About';
import ReviewList from '../ReviewList/ReviewList';
import Footer from '../Footer/Footer';
import Location from '../Location/map';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <About />
      <Location />
      <ReviewList />
      <Footer />
    </div>
  );
}

export default App;
