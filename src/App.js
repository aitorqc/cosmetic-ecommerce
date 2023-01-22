import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Product from "./components/Product/Product";
import Slider from "./components/Slider/Slider";
import Virtual from "./components/Virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Product />
    </div>
  );
}

export default App;
