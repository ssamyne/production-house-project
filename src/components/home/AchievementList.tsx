import { imageDataSet } from '../ImageDatabase';
import CarouselItem from './CarouselItem';

const AchievementList = () => {
  return (
    <div id='our-projects' className='achieve'>
      <h2 className='achieve__heading'>our projects</h2>
      <CarouselItem imageData={imageDataSet} slide={0.1} />
      <CarouselItem imageData={imageDataSet} slide={0.4} />
      <CarouselItem imageData={imageDataSet} slide={0.3} />
    </div>
  );
};

export default AchievementList;
