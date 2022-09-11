import { imageDataSet } from '../ImageDatabase';

const AchievementList = () => {
  return (
    <div className='achieve'>
      <h1 className='achieve__heading'>Our Works</h1>
      <ul className='achieve__list'>
        {imageDataSet.map((image, index) => {
          return (
            <li key={index} className='achieve__item'>
              <img className='achieve__image' src={image} alt='some pic' />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AchievementList;
