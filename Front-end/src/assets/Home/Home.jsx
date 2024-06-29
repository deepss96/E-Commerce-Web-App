import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import FreeBook from "../../Components/FreeBook";
import Banner from "../../Components/Banner";

function Home() {
  return (
    <>
      <div id="home-pg">
        <Navbar />
        <Banner />
        <FreeBook />
        <Footer />
      </div>
    </>
  );
}

export default Home;
