const ContactButton = () => {
  return (
    <div className='cbtn'>
      <input
        type='checkbox'
        className='cbtn__toggle'
        id='contact'
        name='sortpanel'
      />
      <label htmlFor='contact' className='cbtn__label'>
        &nbsp;
      </label>
      <div className='cbtn__anounce'>
        <h2 className='cbtn__heading'>Contact Us</h2>
      </div>
      <div className='cbtn__main'>
        <div className='cbtn__social'>
          <a
            href='https://www.instagram.com/ssamyne_/'
            className='cbtn__link'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='cbtn__icon'
              src='/images/instagram.png'
              alt='instragram'
            />
          </a>
          <a
            href='https://www.facebook.com/klitsana.chooprayoon'
            className='cbtn__link'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='cbtn__icon'
              src='/images/facebook.png'
              alt='facebook'
            />
          </a>
          <a href='tel:085-155-5766' className='cbtn__link' target='#'>
            <img
              className='cbtn__icon'
              src='/images/telephone.png'
              alt='telephone'
            />
          </a>
          <a
            href='mailto: klitsanac@hotmail.com'
            className='cbtn__link'
            target='#'
          >
            <img className='cbtn__icon' src='/images/email.png' alt='email' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactButton;
