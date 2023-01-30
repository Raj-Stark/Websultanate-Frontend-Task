import Benefits from "./components/sectionComponents/Benefits";
import ExploreByCategory from "./components/sectionComponents/ExploreByCategory";
import Footer from "./components/sectionComponents/Footer";
import Hero from "./components/sectionComponents/Hero";
import Newsletter from "./components/sectionComponents/Newsletter";
import PopularProducts from "./components/sectionComponents/PopularProducts";
import Testimonial from "./components/sectionComponents/Testimonial";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Hero></Hero>
      <ExploreByCategory></ExploreByCategory>
      <PopularProducts></PopularProducts>
      <Benefits></Benefits>
      <Testimonial></Testimonial>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
