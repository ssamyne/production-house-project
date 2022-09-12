import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='#home' className='navbar__brand'>
        Production House
      </a>
      <div className='navbar__links'>
        <a href='#our-projects' className='navbar__link'>
          our projects
        </a>
        <a href='#contact-us' className='navbar__link'>
          contact us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
