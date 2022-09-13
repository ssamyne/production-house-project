import React, { useState, useRef, useEffect } from 'react';
import './HomePage.scss';
import { videoData } from '../VideoDatabase';

const SlideSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('start');
  const [allowClick, setAllowClick] = useState(true);
  const timeoutRef = useRef<null | number>(null);
  const vidRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const anchorRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const prevSlideHandler = async () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videoData.length - 1 : prevIndex - 1
    );
    setDirection('prev');
  };

  const nextSlideHandler = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videoData.length - 1 ? 0 : prevIndex + 1
    );
    setDirection('next');
  };

  useEffect(() => {
    setAllowClick(false);
    resetTimeout();

    timeoutRef.current = window.setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === videoData.length - 1 ? 0 : prevIndex + 1
      );

      setDirection('next');
    }, 6000);

    //handle autoplay video
    const playOnScreen = () => {
      const currentVidRef = vidRefs.current[currentIndex];
      const otherVidRef = vidRefs.current.filter(
        (ref) => ![currentVidRef?.id].includes(ref?.id)
      );

      if (!currentVidRef) return;

      const playPromise = currentVidRef?.play();

      if (playPromise !== undefined) {
        currentVidRef.currentTime = 0;

        playPromise.then((_) => {
          setTimeout(() => {
            otherVidRef.forEach((ref) => ref?.pause());
          }, 600);
        });
      }
    };

    // handle slide function
    const translateSlide = () => {
      const currentAnchorRef = anchorRefs.current[currentIndex];
      const nextAnchorRef =
        currentIndex === videoData.length - 1
          ? anchorRefs.current[0]
          : anchorRefs.current[currentIndex + 1];
      const prevAnchorRef =
        currentIndex === 0
          ? anchorRefs.current[videoData.length - 1]
          : anchorRefs.current[currentIndex - 1];
      const otherAnchorRef = anchorRefs.current.filter(
        (ref) =>
          ![
            currentAnchorRef?.id,
            nextAnchorRef?.id,
            prevAnchorRef?.id,
          ].includes(ref?.id)
      );

      if (
        !currentAnchorRef ||
        !nextAnchorRef ||
        !prevAnchorRef ||
        !otherAnchorRef
      ) {
        return;
      }

      //current slide
      currentAnchorRef.style.transform =
        'translateX(0) perspective(3000px) scale(1.2)';
      currentAnchorRef.style.visibility = 'inherit';
      currentAnchorRef.style.zIndex = '2';
      currentAnchorRef.style.boxShadow = '0 11px 14px 5px rgba(0,0,0,0.36)';

      //next slide
      nextAnchorRef.style.transform =
        'translateX(50%) perspective(2000px) scaleZ(1.5) rotateY(-30deg)';
      nextAnchorRef.style.visibility = 'inherit';
      nextAnchorRef.style.boxShadow = '0 6px 9px 1px rgba(0,0,0,0.37)';

      //prevent unwanted movement
      if (direction === 'next') {
        nextAnchorRef.style.zIndex = '-1';
      } else {
        nextAnchorRef.style.zIndex = '1';
      }

      //prev slide
      prevAnchorRef.style.transform =
        'translateX(-50%) perspective(2000px) scaleZ(1.5) rotateY(30deg)';
      prevAnchorRef.style.visibility = 'inherit';
      prevAnchorRef.style.boxShadow = '0 6px 9px 1px rgba(0,0,0,0.37)';

      //prevent unwanted movement
      if (direction === 'prev') {
        prevAnchorRef.style.zIndex = '-1';
      } else {
        prevAnchorRef.style.zIndex = '1';
      }

      //other slide
      otherAnchorRef.forEach((ref) => {
        if (!ref) return;

        ref.style.transform = 'translateX(0)';
        ref.style.visibility = 'inherit';
        ref.style.zIndex = '-1';
      });
    };

    playOnScreen();
    translateSlide();

    setTimeout(() => {
      setAllowClick(true);
    }, 600);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, direction]);

  return (
    <div className='slide'>
      <div className='slide__items'>
        <button
          disabled={!allowClick}
          className='slide__prev'
          onClick={prevSlideHandler}
        >
          &#8249;
        </button>
        <button
          disabled={!allowClick}
          className='slide__next'
          onClick={nextSlideHandler}
        >
          &#8250;
        </button>
        {videoData.map((video, index) => {
          return (
            <a
              id={index.toString()}
              ref={(anchorId) => (anchorRefs.current[index] = anchorId)}
              className='slide__link'
              href={'https://youtu.be/RY5X4N1F3fc'}
              target='_blank'
              rel='noreferrer'
              key={index}
            >
              <video
                id={index.toString()}
                ref={(vidId) => (vidRefs.current[index] = vidId)}
                className='slide__item'
                preload='metadata'
                playsInline
                muted
              >
                <source src={video.url} type='video/mp4' />
              </video>
              <span className='slide__play'>
                <img
                  className='slide__playbutton'
                  src='/images/play-button.png'
                  alt='play'
                />
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SlideSection;
