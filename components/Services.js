import Image from 'next/image';

import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';

import css from '../public/css.png';
import html from '../public/html.png';
import javascript from '../public/javascript.png';
import logo from '../public/logo.png';
import react from '../public/react.png';
import sass from '../public/scss.png';
import tailwind from '../public/tailwind.png';
import github from '../public/github.png';
import photoshop from '../public/ps.png';
import illustrator from '../public/illustrator.png';

const Services = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
    },
    {
      id: 4,
      src: react,
      title: 'React',
    },
    {
      id: 6,
      src: sass,
      title: 'SCSS',
    },

    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
    },

    {
      id: 8,
      src: github,
      title: 'GitHub',
    },

    {
      id: 10,
      src: illustrator,
      title: 'Illustrator',
    },
    {
      id: 12,
      src: photoshop,
      title: 'Photoshop',
    },
    {
      id: 11,
      src: logo,
      title: 'NextJS',
    },
    {
      id: 12,
      src: logo,
      title: 'GSAP',
    },
  ];
  return (
    <div name='services'>
      <section className=' md:mb-0  max-w-screen-lg mx-auto p-4 text-center sm:text-left'>
        <div>
          <h3 className='text-3xl py-1 text-primary dark:text-slate-300'>
            Services I offer{' '}
          </h3>
          <p className='text-md py-2 leading-8  text-textLight dark:text-slate-300 text-center sm:text-left'>
            I offer a wide range of services to help bring your ideas to life.
            My expertise includes creating visually appealing and responsive
            websites using HTML, CSS and JavaScript. I also offer skills in
            modern frontend frameworks such as React. My goal is to work closely
            with clients to understand their unique needs and create a website
            that exceeds their expectations. Whether you're looking to revamp an
            existing website or build a new one from scratch, I'm here to help.
          </p>
        </div>

        <div className=' text-textLight lg:flex gap-10 dark:text-slate-300  '>
          <div className='text-center  shadow-lg p-10 rounded-xl my-10 dark:text-slate-300 bg-card dark:bg-card'>
            <Image
              src={code}
              width={100}
              height={100}
              className=' mx-auto'
              alt='photo'
            />
            <h3 className='text-lg  text-textLight font-medium pt-8 pb-2 dark:text-textDark font-burtons'>
              Newest Technologie
            </h3>
            <p className='py-2  text-textLight  dark:text-slate-300'>
              Working with the latest trending technologies
            </p>
            <h4 className='py-4   text-textLight  dark:text-slate-300'>
              Tech tools I use
            </h4>
            <p className='  text-textLight  dark:text-slate-300'>
              Html, Css, JavaScript
            </p>
            <p className=' text-textLight  dark:text-slate-300'>
              Tailwind, SASS
            </p>
            <p className=' text-textLight  dark:text-slate-300'>
              React, NextJs
            </p>
          </div>

          <div className='text-center bg-card shadow-lg p-10 rounded-xl my-10  '>
            <Image
              src={design}
              width={100}
              height={100}
              className=' mx-auto'
              alt='photo of code'
            />

            <h3 className='   text-textLight text-lg font-medium pt-8 pb-2  dark:text-textDark font-burtons'>
              Beautiful Designs
            </h3>
            <p className='py-2' text-primary>
              Creating elegant modern,responsive design for your design theory
            </p>
            <h4 className='py-4   text-textLight dark:text-slate-300'>
              Design tools I use
            </h4>
            <p className='  text-textLight dark:text-slate-300'>Photoshop</p>
            <p className='  text-textLight dark:text-slate-300'>Illustrator</p>
            <p className='  text-textLight dark:text-slate-300'>Figma</p>
          </div>

          <div className='text-center  bg-card text-textLight shadow-lg p-10 rounded-xl my-10  dark:bg-card '>
            <Image
              src={consulting}
              width={100}
              height={100}
              className=' mx-auto'
              alt='photo'
            />
            <h3 className='text-lg font-medium pt-8 pb-2  font-burtons dark:text-textDark'>
              Code your dream project
            </h3>
            <p className='py-2 dark:text-slate-300'>
              Do you have an idea for your next great website?
              <br /> Let's make it a reality!
            </p>
          </div>
        </div>
      </section>
      <div name='experience' className=' w-full   '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-center sm:text-left w-full h-full md:h-auto  text-textLight'>
          <div>
            <p className='text-4xl font-bold border-b-4  border-gray-500 p-2 inline dark:border-green-100 dark:text-slate-300'>
              Experience
            </p>
            <p className='py-6 dark:text-gray-200'>
              These are the technologies I worked with
            </p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  sm:px-0 '>
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-portfolioCard text-linksLight  dark:bg-fifth`}
              >
                <Image src={src} alt='photo' className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
