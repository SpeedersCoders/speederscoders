import React from 'react';
import {
  Heart,
  Facebook,
  Instagram,
  GitHub,
  Twitter,
} from 'react-feather';
import ReactTooltip from 'react-tooltip';

const Footer = () => {
  return (
    <footer className='footer'>
      <ReactTooltip type='light' />
      <p className='has-text-centered is-size-4 has-text-grey-light'>• • •</p>
      <div className='column'>
        <div className='buttons is-centered'>
          <a
            href='https://www.facebook.com/SpeedersCoders'
            target='_blank'
            rel='noopener noreferrer'
            className='button button-special is-rounded box-shadow-lift'
            data-tip='contact on Facebook 🦸‍♂'
          >
            <Facebook color='blue' className='icon' />
          </a>
          <a
            href='https://www.instagram.com/SpeedersCoders/'
            target='_blank'
            rel='noopener noreferrer'
            className='button button-special is-rounded box-shadow-lift'
            data-tip='contact on Instagram 🎉'
          >
            <Instagram color='#C74B91' className='icon' />
          </a>
          <a
            href='https://github.com/SpeedersCoders'
            target='_blank'
            rel='noopener noreferrer'
            className='button button-special is-rounded box-shadow-lift'
            data-tip='contact on Github ❤️'
          >
            <GitHub className='icon' />
          </a>
          <a
            href='https://twitter.com/SpeedersCoders'
            target='_blank'
            rel='noopener noreferrer'
            className='button button-special is-rounded box-shadow-lift'
            data-tip='contact on Twitter 🤷‍♂️'
          >
            <Twitter color='#1DA1F2' className='icon' />
          </a>
          <a
            href='https://www.youtube.com/channel/UCVtK19ogPZv0awJ2_btJQVQ'
            target='_blank'
            rel='noopener noreferrer'
            className='is-hidden-touch button button-special is-rounded box-shadow-lift'
            data-tip='View YouTube Channel 😎'
          >
            <Heart color='#0077B5' className='icon' />
          </a>
        </div>
      </div>
      {/* <div className='column has-text-centered'>
        <p className='subtitle is-7 is-capitalized has-text-danger'>
          This Project is just for Learning and teaching purposes.
        </p>
      </div> */}
      <div className='column has-text-centered'>
        <p className='menu-label'>
          Made with <Heart color='red' fill='red' size='15px' />{' '}
          <a
            href='https://speederscoders.cf/'
            target='_blank'
            rel='noopener noreferrer'
          >
            By SpeedersCoders Team
          </a>{' '}
          <br />
          &copy;{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
