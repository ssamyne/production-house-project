import React, { useEffect, useState } from 'react';

import HomePage from './components/home/HomePage';
import ApplyLayout from './components/ui/ApplyLayout';
import LoadingSpinner from './components/ui/LoadingSpinner';

const App = React.memo(() => {
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    const onPageLoaded = () => {
      setIsloaded(true);
    };

    const DOMready = document.readyState;

    if (DOMready === 'complete') {
      onPageLoaded();
    } else {
      document.addEventListener('readystatechange', () => {
        console.log(`readystate: ${document.readyState}\n`);
      });

      window.addEventListener('load', onPageLoaded);

      return () => {
        document.removeEventListener('readystatechange', (event) => {
          console.log('remove1');
        });

        window.removeEventListener('load', () => {
          console.log('finish');
        });
      };
    }
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <LoadingSpinner />
      ) : (
        <ApplyLayout>
          <HomePage />
        </ApplyLayout>
      )}
    </div>
  );
});

export default App;
