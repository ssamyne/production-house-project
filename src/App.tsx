import React from 'react';

import HomePage from './components/home/HomePage';
import ApplyLayout from './components/ui/ApplyLayout';

const App = () => {
  return (
    <div>
      <ApplyLayout>
        <HomePage />
      </ApplyLayout>
    </div>
  );
};

export default App;
