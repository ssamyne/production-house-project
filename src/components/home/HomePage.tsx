import React from 'react';

import './HomePage.scss';
import SlideSection from './SlideSection';
import ContactSection from './ContactSection';
import ProjectGrid from './ProjectGrid';

const HomePage: React.FC = React.memo(() => {
  return (
    <div className='home'>
      <SlideSection />
      <ProjectGrid />
      <ContactSection />
    </div>
  );
});

export default HomePage;
