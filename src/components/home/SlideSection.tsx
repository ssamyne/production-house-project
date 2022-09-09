import React, { useState, useRef, useEffect } from 'react';
import './HomePage.scss';

const videoUrl = [
  '/videos/Woman-58142.mp4',
  '/videos/Cow-130238.mp4',
  '/videos/Jellyfish-110877.mp4',
  '/videos/Skate-110734.mp4',
  '/videos/Sand-73847.mp4',
];
const delay = 5000;

const SlideSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<null | number>(null);
  const vidRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const anchorRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const defaultStyle = {
    trasform: 'translateX(-100%)',
    opacity: '1',
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === videoUrl.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    const playOnScreen = () => {
      const currentVidRef = vidRefs.current[currentIndex];
      const prevVidRef = vidRefs.current[currentIndex - 1];
      const delay = 2000;

      currentVidRef?.play();

      if (!prevVidRef) {
        return;
      }

      prevVidRef.pause();
      setTimeout(() => {
        prevVidRef.currentTime = 0;
      }, delay);
    };

    const translateSlide = () => {
      const currentAnchorRef = anchorRefs.current[currentIndex];
      const nextAnchorRef =
        currentIndex === videoUrl.length - 1
          ? anchorRefs.current[0]
          : anchorRefs.current[currentIndex + 1];
      const otherAnchorRef = anchorRefs.current.filter(
        (ref) => ![currentAnchorRef?.id, nextAnchorRef?.id].includes(ref?.id)
      );

      if (!currentAnchorRef || !nextAnchorRef || !otherAnchorRef) {
        return;
      }

      currentAnchorRef.style.transform = 'translateX(0)';
      currentAnchorRef.style.opacity = '1';

      nextAnchorRef.style.transform = 'translateX(100%)';
      nextAnchorRef.style.opacity = '0';

      otherAnchorRef.forEach((ref) => {
        if (!ref) {
          return;
        }

        ref.style.transform = 'translateX(-100%)';
        ref.style.opacity = '1';
      });
    };

    playOnScreen();
    translateSlide();

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <div className='slide'>
      <button
        className='slide__prev'
        onClick={() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? videoUrl.length - 1 : prevIndex - 1
          );
        }}
      >
        &#8249;
      </button>
      <button
        className='slide__next'
        onClick={() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === videoUrl.length - 1 ? 0 : prevIndex + 1
          );
        }}
      >
        &#8250;
      </button>
      <div
        className='slide__items'
        // style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
      >
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
              style={defaultStyle}
            >
              <video
                id={index.toString()}
                ref={(vidId) => (vidRefs.current[index] = vidId)}
                className='slide__item'
                playsInline
                muted
              >
                <source src={videoUri} type='video/mp4' />
              </video>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SlideSection;
