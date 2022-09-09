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
  const [direction, setDirection] = useState('start');
  const [allowClick, setAllowClick] = useState(true);
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
        // currentVidRef?.play();
        playPromise.then((_) => {
          setTimeout(() => {
            otherVidRef.forEach((ref) => ref?.pause());
          }, 800);
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

      currentAnchorRef.style.transform = 'translateX(0)';
      currentAnchorRef.style.opacity = '1';
      currentAnchorRef.style.visibility = 'inherit';

      if (direction === 'start') {
        nextAnchorRef.style.transform = 'translateX(100%)';
        nextAnchorRef.style.opacity = '0';
        nextAnchorRef.style.visibility = 'hidden';

        prevAnchorRef.style.transform = 'translateX(-100%)';
        prevAnchorRef.style.opacity = '0';
        prevAnchorRef.style.visibility = 'hidden';
      } else {
        if (direction === 'next') {
          nextAnchorRef.style.transform = 'translateX(100%)';
          nextAnchorRef.style.opacity = '0';
          nextAnchorRef.style.visibility = 'hidden';
        } else {
          nextAnchorRef.style.transform = 'translateX(100%)';
          nextAnchorRef.style.opacity = '1';
          nextAnchorRef.style.visibility = 'inherit';
        }

        if (direction === 'prev') {
          prevAnchorRef.style.transform = 'translateX(-100%)';
          prevAnchorRef.style.opacity = '0';
          prevAnchorRef.style.visibility = 'hidden';
        } else {
          prevAnchorRef.style.transform = 'translateX(-100%)';
          prevAnchorRef.style.opacity = '1';
          prevAnchorRef.style.visibility = 'inherit';
        }
      }

      otherAnchorRef.forEach((ref) => {
        if (!ref) return;

        ref.style.transform = 'translateX(-100%)';
        ref.style.opacity = '0';
        ref.style.visibility = 'hidden';
      });
    };

    playOnScreen();
    translateSlide();

    setTimeout(() => {
      setAllowClick(true);
    }, 800);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, direction]);

  return (
    <div className='slide'>
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
      <div className='slide__items'>
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
                preload='none'
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
