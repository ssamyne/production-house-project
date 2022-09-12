import { imageDataSet } from '../ImageDatabase';
import CarouselItem from './CarouselItem';

const AchievementList = () => {
  return (
    <div id='our-projects' className='achieve'>
      <h2 className='achieve__heading'>our projects</h2>
      <CarouselItem imageData={imageDataSet} slide={0.1} reverse={false} />
      <CarouselItem imageData={imageDataSet} slide={0.15} reverse={true} />
      <CarouselItem imageData={imageDataSet} slide={0.15} reverse={false} />
    </div>
  );
};

export default AchievementList;
