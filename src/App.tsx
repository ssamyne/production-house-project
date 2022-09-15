import React, { useEffect, useState } from 'react';

import HomePage from './components/home/HomePage';
import ApplyLayout from './components/ui/ApplyLayout';
import LoadingSpinner from './components/ui/LoadingSpinner';

const App = React.memo(() => {
  const [isLoaded, setIsloaded] = useState(false);
  const [videoStatus, setVideoStatus] = useState<HTMLVideoElement | null>(null);

  const videoLoadedHandler = (isload: HTMLVideoElement | null) => {
    setVideoStatus(isload);
  };

  useEffect(() => {
    console.log(videoStatus);

    if (!videoStatus) {
      setIsloaded(false);
    } else {
      setIsloaded(true);
    }
  }, [videoStatus]);

  return (
    <div>
      {!isLoaded && <LoadingSpinner />}
      <ApplyLayout>
        <HomePage videoIsloaded={videoLoadedHandler} />
      </ApplyLayout>
    </div>
  );
});

export default App;
