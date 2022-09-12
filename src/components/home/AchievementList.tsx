import { imageDataSet } from '../ImageDatabase';
import Carousel from 'react-multi-carousel';
const AchievementList = () => {
  return (
    <div className='achieve'>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1}
        centerMode={false}
        className='achieve__container'
        containerClass='container-with-dots'
        customTransition='all 1s linear'
        dotListClass=''
        draggable={true}
        focusOnSelect={false}
        infinite={true}
        itemClass='achieve__item'
        keyBoardControl={false}
        minimumTouchDrag={80}
        pauseOnHover={true}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay={false}
        showDots={false}
        sliderClass='achieve__list'
        slidesToSlide={1}
        swipeable={true}
        transitionDuration={2000}
      >
        {imageDataSet.map((image, index) => {
          return (
            <a href='#home' key={index}>
              <img className='achieve__image' src={image} alt='some pic' />
            </a>
          );
        })}
      </Carousel>
    </div>
  );
};

export default AchievementList;
