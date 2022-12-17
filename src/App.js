import React from "react";
import './App.css';
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Rowpost from "./Components/RowPost/Rowpost";
import {action} from "../src/constants/constant"

function App() {
  return (
    <div>
      <Navbar/>
      <section className="container-fluid">
      <Banner/>
      <Rowpost title="Get In On the Action" url={action}/>
      
      <Footer/>
      </section>
    </div>

  );
}

export default App;
