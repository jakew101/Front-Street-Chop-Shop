import './App.css';
import NavBar from '../NavBar/NavBar';
import Jumbotron from '../Jumbotron/Jumbotron';
import About from '../About/About';
import ReviewList from '../ReviewList/ReviewList';
import Footer from '../Footer/Footer';

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    review: "Absolutely fantastic service! The staff was friendly, and the haircut was exactly what I wanted. Highly recommend this place."
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 5,
    review: "Great experience overall. The atmosphere was nice, and my haircut was perfect. The staff really knows their craft!"
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    review: "Exceeded my expectations! The attention to detail was impressive, and I walked out feeling great. Definitely coming back."
  },
  {
    id: 4,
    name: "Emily Davis",
    rating: 5,
    review: "Loved everything about my visit! The stylist was professional and understood exactly what I wanted. Will definitely return!"
  },
  {
    id: 5,
    name: "David Brown",
    rating: 5,
    review: "Superb service! The stylist did an amazing job, and the atmosphere was welcoming. Five stars all around!"
  }
];


function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <About />
      <ReviewList reviews={reviews} />
      <Footer />
    </div>
  );
}

export default App;
