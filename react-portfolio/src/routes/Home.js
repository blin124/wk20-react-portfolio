import React from 'react';

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Image from '../components/Image';
import Contact from '../components/Contact';

function Home() {

  return(
    <div>
      <Navbar />
      <Image />
      <Contact />
      <Card />
      <Footer />
    </div>
  )
}

export default Home;
