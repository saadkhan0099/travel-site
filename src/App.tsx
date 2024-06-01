import Carousel from "./components/Carousel";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";

type Props = {};

const App = ({}: Props) => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Selects />
      <Footer />
    </div>
  );
};

export default App;
