import './HomePage.scss';
import SlideSection from './SlideSection';
import AchievementList from './AchievementList';
import ContactSection from './ContactSection';

const HomePage = () => {
  return (
    <div id='home' className='home'>
      <SlideSection />
      <AchievementList />
      <ContactSection />
    </div>
  );
};

export default HomePage;
