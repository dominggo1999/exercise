import React from 'react';
import Header from './components/Header';
import MenuPreviewSection from './components/MenuPreviewSection';
import OurStory from './components/OurStory';
import Testimonials from './components/Testimonials';

// clone dari https://demo-storage.com/pm/html/restbeef/index.html

const App = () => {
  return (
    <div>
      <Header />
      <MenuPreviewSection />
      <OurStory />
      <Testimonials />
    </div>
  );
};

export default App;
