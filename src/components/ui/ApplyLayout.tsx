import React from 'react';
import './ApplyLayout.scss';

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

interface LayoutProps {
  children: JSX.Element;
}

const ApplyLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default ApplyLayout;
