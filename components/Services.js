import Image from 'next/image';

import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';

import css from '../public/css.png';
import html from '../public/html.png';
import javascript from '../public/javascript.png';
import nextjs from '../public/nextjs.png';
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
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-blue-300',
    },
    {
      id: 6,
      src: sass,
      title: 'SCSS',
      style: 'shadow-red-200',
    },

    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },

    {
      id: 8,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400',
    },

    {
      id: 10,
      src: illustrator,
      title: 'Illustrator',
      style: 'shadow-orange-700',
    },
  ];
  return (
    <div name='services'>
      <section>
        <div>
          <h3 className='text-3xl py-1  dark:text-fifth'>Services I offer </h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-300'>
            I offer from a wide range of services, including brand, creative,
            responsive design.
          </p>
        </div>

        <div className='text-red-100  lg:flex gap-10 dark:text-slate-300  '>
          <div className='text-center  shadow-lg p-10 rounded-xl my-10 dark:text-slate-300 bg-primary dark:bg-card'>
            <Image
              src={code}
              width={100}
              height={100}
              className=' mx-auto'
              alt='photo'
            />
            <h3 className='text-lg text-red-100 font-medium pt-8 pb-2  dark:text-fifth font-burtons'>
              Newest Technologie
            </h3>
            <p className='py-2 text-red-100  dark:text-slate-300'>
              Working with the latest trending technologies
            </p>
            <h4 className='py-4  text-red-100  dark:text-slate-300'>
              Tech tools I use
            </h4>
            <p className=' text-red-100  dark:text-slate-300'>
              Html, Css, JavaScript
            </p>
            <p className='text-red-100  dark:text-slate-300'>Tailwind, SASS</p>
            <p className='text-red-100  dark:text-slate-300'>React, NextJs</p>
          </div>

          <div className='text-center  text-red-100 shadow-lg p-10 rounded-xl my-10 bg-primary dark:bg-card '>
            <Image
              src={design}
              width={100}
              height={100}
              className=' mx-auto'
              alt='photo of code'
            />

            <h3 className='  text-red-100 text-lg font-medium pt-8 pb-2  dark:text-fifth font-burtons'>
              Beautiful Designs
            </h3>
            <p className='py-2' text-primary>
              Creating elegant modern,responsive design for your design theory
            </p>
            <h4 className='py-4  text-red-100 dark:text-slate-300'>
              Design tools I use
            </h4>
            <p className=' text-red-100 dark:text-slate-300'>Photoshop</p>
            <p className=' text-red-100 dark:text-slate-300'>Illustrator</p>
            <p className=' text-red-100 dark:text-slate-300'>Figma</p>
          </div>

          <div className='text-center  text-red-100 shadow-lg p-10 rounded-xl my-10 bg-primary dark:bg-card '>
            <Image
              src={consulting}
              width={100}
              height={100}
              className=' mx-auto'
              alt='photo'
            />
            <h3 className='text-lg font-medium pt-8 pb-2  dark:text-fifth font-burtons'>
              Code your dream project
            </h3>
            <p className='py-2'>
              Do you have an idea for your next great website?
              <br /> Let's make it a reality!
            </p>
          </div>
        </div>
      </section>
      <div name='experience' className=' w-full h-screen my-20 '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
          <div>
            <p className='text-4xl font-bold border-b-4 dark:text-fifth dark:border-fifth border-gray-500 p-2 inline '>
              Experience
            </p>
            <p className='py-6'>These are the technologies I worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 md:px-12 sm:px-0'>
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
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
