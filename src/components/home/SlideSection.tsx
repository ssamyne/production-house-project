import React, { useState, useRef, useEffect } from 'react';
import './HomePage.scss';

const videoUrl = [
  '/videos/vid-1.mp4',
  '/videos/vid-2.mp4',
  '/videos/vid-3.mp4',
  '/videos/vid-4.mp4',
  '/videos/vid-5.mp4',
];
const delay = 7000;

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
      prevIndex === 0 ? videoUrl.length - 1 : prevIndex - 1
    );
    setDirection('prev');
  };

  const nextSlideHandler = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videoUrl.length - 1 ? 0 : prevIndex + 1
    );
    setDirection('next');
  };

  useEffect(() => {
    setAllowClick(false);
    resetTimeout();

    timeoutRef.current = window.setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === videoUrl.length - 1 ? 0 : prevIndex + 1
      );

      setDirection('next');
    }, delay);

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

    const translateSlide = () => {
      const currentAnchorRef = anchorRefs.current[currentIndex];
      const nextAnchorRef =
        currentIndex === videoUrl.length - 1
          ? anchorRefs.current[0]
          : anchorRefs.current[currentIndex + 1];
      const prevAnchorRef =
        currentIndex === 0
          ? anchorRefs.current[videoUrl.length - 1]
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

      currentAnchorRef.style.transform =
        'translateX(0) perspective(3000px) scale(1.2)';
      currentAnchorRef.style.opacity = '1';
      currentAnchorRef.style.visibility = 'inherit';
      currentAnchorRef.style.zIndex = '2';
      currentAnchorRef.style.boxShadow =
        'rgba(50, 50, 93, 0.35) 0px 13px 27px -5px, rgba(0, 0, 0, 0.35) 0px 8px 16px -8px';

      nextAnchorRef.style.transform =
        'translateX(50%) perspective(2000px) scaleZ(1.5) rotateY(-30deg)';
      nextAnchorRef.style.opacity = '1';
      nextAnchorRef.style.visibility = 'inherit';
      nextAnchorRef.style.boxShadow =
        'rgba(50, 50, 93, 0.35) 0px 6px 12px -2px, rgba(0, 0, 0, 0.35) 0px 3px 7px -3px';

      if (direction === 'next') {
        nextAnchorRef.style.zIndex = '-1';
      } else {
        nextAnchorRef.style.zIndex = '1';
      }

      prevAnchorRef.style.transform =
        'translateX(-50%) perspective(2000px) scaleZ(1.5) rotateY(30deg)';
      prevAnchorRef.style.opacity = '1';
      prevAnchorRef.style.visibility = 'inherit';
      prevAnchorRef.style.boxShadow =
        'rgba(50, 50, 93, 0.35) 0px 6px 12px -2px, rgba(0, 0, 0, 0.35) 0px 3px 7px -3px';

      if (direction === 'prev') {
        prevAnchorRef.style.zIndex = '-1';
      } else {
        prevAnchorRef.style.zIndex = '1';
      }

      otherAnchorRef.forEach((ref) => {
        if (!ref) return;

        ref.style.transform = 'translateX(0)';
        ref.style.opacity = '1';
        ref.style.visibility = 'visible';
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
        {videoUrl.map((videoUri, index) => {
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
                <source src={videoUri} type='video/mp4' />
              </video>
            </a>
          );
        })}
      </div>
      <h1 className='slide__heading'>finesse productions</h1>
    </div>
  );
};

export default SlideSection;
