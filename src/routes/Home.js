import React from 'react';

import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Image from '../components/Image';
import Contact from '../components/Contact';

function Home() {

  return(
    <div>
      <Header />
      <Image />
      <Contact />
      <Card />
      <Footer />
    </div>
  )
}

export default Home;
