import './SlideVideoSpinner.scss';

const SlideVideoSpinner = () => {
  return (
    <div className='spinner__vidcontainer'>
      <h1 className='spinner__text'>
        We&lsquo;re operating in a world where one good video can lead to
        massive social following.
      </h1>
      <div className='loadingbar'></div>
    </div>
  );
};

export default SlideVideoSpinner;
