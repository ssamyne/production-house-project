import { imageDataSet } from '../ImageDatabase';

const PropjectGrid = () => {
  const imagename = 'img_';
  return (
    <div id='our-projects' className='project'>
      <h2 className='project__heading'>our projects</h2>
      <div className='project__grid'>
        {imageDataSet.map((image, index) => {
          return (
            <a id={imagename + index.toString()} href='#home' key={index}>
              <img className='project__image' src={image} alt='some pic' />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PropjectGrid;
