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
      <div className=' bg-primary dark:bg-fourth flex justify-between items-center w-full h-20 text-white  px-4 '>
        <div>
          <h1 className='text-xl font-burtons ml-2 text-red-50  dark:text-fifth'>
            apollonia | dev
          </h1>
        </div>

        <ul className='  hidden md:flex'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer font-burtons  text-red-100 cap hover:scale-105 hover:text-red-200 duration-200 hover:dark:text-fifth'
            >
              <Link to={link} smooth duration={500}>
                {link}{' '}
              </Link>
            </li>
          ))}

          <BsFillMoonStarsFill
            onClick={handleThemeSwitch}
            className='text-red-100  dark:text-fifth cursor-pointer text-xl'
          />
        </ul>

        <div
          onClick={() => setnav(!nav)}
          className='cursor-pointer pr-4  text-fifth md:hidden z-20 '
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-primary text-red-100 z-10 dark:bg-secondary  '>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-red-200 duration-200 hover:dark:text-fifth'
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
