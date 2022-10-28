import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Banner from '../banner';
import Solution from '../solution';
import ZipForm from '../zip-form';
import '../../App.css';

const App = () => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Header />
      <Banner />
      <Solution />
      <ZipForm />
      <Footer />
    </div>
  );
};

export default App;
