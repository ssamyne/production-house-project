const ContactSection = () => {
  return (
    <div className='contact'>
      <input
        type='checkbox'
        className='contact__toggle'
        id='contact'
        name='sortpanel'
      />
      <label htmlFor='contact' className='contact__label'>
        &nbsp;
      </label>
      <div className='contact__anounce'>
        <h2 className='contact__heading'>Contact Us here.</h2>
      </div>
      <div className='contact__main'>
        <div className='contact__social'>
          <a
            href='https://www.instagram.com/ssamyne_/'
            className='contact__link'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='contact__icon'
              src='/images/instagram.png'
              alt='instragram'
            />
          </a>
          <a
            href='https://www.facebook.com/klitsana.chooprayoon'
            className='contact__link'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='contact__icon'
              src='/images/facebook.png'
              alt='facebook'
            />
          </a>
          <a href='tel:085-155-5766' className='contact__link' target='#'>
            <img
              className='contact__icon'
              src='/images/telephone.png'
              alt='telephone'
            />
          </a>
          <a
            href='mailto: klitsanac@hotmail.com'
            className='contact__link'
            target='#'
          >
            <img
              className='contact__icon'
              src='/images/email.png'
              alt='email'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
