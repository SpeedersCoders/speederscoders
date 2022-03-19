import React, { useContext } from 'react';
import { Sun, Moon } from 'react-feather';
import { Link, withRouter } from 'react-router-dom';
import ThemeContext from '../context/theme/themeContext'

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const { isDarkMode, toggleTheme } = themeContext;
  const active = window.location.pathname;
  document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );
    const anchors = document.querySelectorAll('.navbar-item');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', () => {
        document
          .querySelector('#navbarBasicExample')
          .classList.remove('is-active');

        document.querySelector('.navbar-burger').classList.remove('is-active');
      });
    });

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });

  return (
    <nav
      className='navbar is-fixed-top is-light'
      role='navigation'
      id='navbar'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <Link className='navbar-item' id='brand' to='/'>
          {/*<Terminal color={ isDarkMode ? '#FFCC4D' : 'blue'} />*/}
          <img height="370" src="https://s10.gifyu.com/images/output-onlinegiftoolsb462c66aaf7c5f73.gif" alt={"SpeedersCoders"}/>

          &emsp;SPEEDERSCODERS
        </Link>
        <div
          role='button'
          className='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </div>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-end'>
          <Link
            className={`navbar-item ${active === '/' ? 'is-active' : ''}`}
            to='/'
          >
            Home
          </Link>

          <Link
            className={`navbar-item ${active.includes('/resources') ? 'is-active' : ''
              }`}
            to='/resources'
          >
            Projects
          </Link>

          <Link
            className={`navbar-item ${active === '/bookmarked' ? 'is-active' : ''
              }`}
            to='/bookmarked'
          >
            My BookMarks
          </Link>

          <a
            className='navbar-item'
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/SpeedersCoders'
          >
            Contacts
          </a>
          <div
            className='navbar-item'
            style={{ cursor: 'pointer' }}
            onClick={toggleTheme}
          >
            {isDarkMode ? <Sun color='#00d1b2' /> : <Moon color='#00d1b2' />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
