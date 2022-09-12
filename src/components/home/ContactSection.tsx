const ContactSection = () => {
  return (
    <div id='contact-us' className='contact'>
      <h2 className='contact__heading'>contact</h2>
      <div className='contact__main'>
        <div className='contact__address'>
          <div>
            <p className='contact__address_detail'>141 Weston St. Hartford</p>
            <p className='contact__address_detail'>Connecticut 06101</p>
            <p className='contact__address_detail'>United States</p>
          </div>
          <a
            href='https://goo.gl/maps/187q61WbR7QqA53r5'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='contact__address_map'
              src='/images/google-map.png'
              alt='google map'
            />
          </a>
        </div>
        <div className='contact__tel'>
          <p className='contact__tel_detail'>Tel: 123-456-789</p>
          <p className='contact__tel_detail'>Email: example@somemail.com</p>
        </div>
        <div className='contact__social'>
          <div className='contact__social_header'>
            <a
              href='https://www.instagram.com/ssamyne_/'
              className='contact__social_link'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='contact__social_icon'
                src='/images/instagram-white.png'
                alt='instragram'
              />
            </a>
            <a
              href='https://www.facebook.com/klitsana.chooprayoon'
              className='contact__social_link'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='contact__social_icon'
                src='/images/facebook-white.png'
                alt='facebook'
              />
            </a>
            <a
              href='tel:085-155-5766'
              className='contact__social_link'
              target='#'
            >
              <img
                className='contact__social_icon'
                src='/images/telephone-white.png'
                alt='telephone'
              />
            </a>
            <a
              href='mailto: klitsanac@hotmail.com'
              className='contact__social_link'
              target='#'
            >
              <img
                className='contact__social_icon'
                src='/images/email-white.png'
                alt='email'
              />
            </a>
          </div>
          <div className='contact__social_line'>
            <img
              className='contact__social_qr'
              src='/images/line-qr.jpg'
              alt='line qr code'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
