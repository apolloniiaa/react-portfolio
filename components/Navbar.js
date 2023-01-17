import { useState, useEffect } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setDarkMode('dark');
    } else {
      setDarkMode('light');
    }
  }, []);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleThemeSwitch = () => {
    setDarkMode(darkMode === 'dark' ? 'light' : 'dark');
  };

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'portfolio',
    },
    {
      id: 3,
      link: 'services',
    },

    {
      id: 4,
      link: 'contact',
    },
  ];
  return (
    <div>
      <div className=' bg-primary  flex justify-between items-center w-full h-20 text-white  px-4 dark:bg-textDark '>
        <div>
          <h1 className='text-xl font-burtons ml-2 text-linksLight  dark:text-secondary '>
            apollonia | dev
          </h1>
        </div>

        <ul className='  hidden md:flex'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer font-burtons  text-linksLight cap hover:scale-105 duration-200 dark:text-secondary'
            >
              <Link to={link} smooth duration={500}>
                {link}{' '}
              </Link>
            </li>
          ))}

          <BsFillMoonStarsFill
            onClick={handleThemeSwitch}
            className=' text-linksLight  cursor-pointer text-xl dark:text-secondary'
          />
        </ul>

        <div
          onClick={() => setnav(!nav)}
          className='text-secondary cursor-pointer pr-4  md:hidden z-20  '
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen dark:   text-secondary z-10 dark:bg-textDark '>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className='px-4 cursor-pointer capitalize py-6   text-secondary text-4xl hover:scale-105  duration-200 dark:textDark'
              >
                <Link
                  onClick={() => setnav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
