import './HomePage.scss';
import SlideSection from './SlideSection';
import AchievementList from './AchievementList';
import ContactSection from './ContactSection';
import ProjectGrid from './ProjectGrid';

const HomePage = () => {
  return (
    <div className='home'>
      <SlideSection />
      {/* <AchievementList /> */}
      <ProjectGrid />
      <ContactSection />
    </div>
  );
};

export default HomePage;
