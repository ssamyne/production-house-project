import React from 'react';

import './HomePage.scss';
import SlideSection from './SlideSection';
import ContactSection from './ContactSection';
import ProjectGrid from './ProjectGrid';

interface HomeProps {
  videoIsloaded: (isload: HTMLVideoElement | null) => void;
}

const HomePage: React.FC<HomeProps> = React.memo(({ videoIsloaded }) => {
  return (
    <div className='home'>
      <SlideSection videoIsloaded={videoIsloaded} />
      <ProjectGrid />
      <ContactSection />
    </div>
  );
});

export default HomePage;
