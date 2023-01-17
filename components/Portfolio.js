import Image from 'next/image';

import web1 from '../public/web1.jpg';
import web2 from '../public/web2.jpg';
import web3 from '../public/web3.jpg';
import web4 from '../public/web4.jpg';
import web5 from '../public/web5.jpg';
import web6 from '../public/web6.jpg';

import web7 from '../public/web7.jpg';
import web8 from '../public/web8.jpg';
import web9 from '../public/web9.jpg';
import web10 from '../public/web10.jpg';
import web11 from '../public/web11.jpg';
import web12 from '../public/web12.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: web1,
      demo: 'https://apolloniiaa.github.io/todo.list/',
      code: 'https://github.com/apolloniiaa/todo.list',
    },
    {
      id: 2,
      src: web2,
      demo: 'https://apolloniiaa.github.io/pbank-app/',
      code: 'https://github.com/apolloniiaa/pbank-app',
    },
    {
      id: 3,
      src: web3,
      code: 'https://github.com/apolloniiaa/natours-tours',
      demo: 'https://apolloniiaa.github.io/natours-tours/',
    },
    {
      id: 4,
      src: web4,
      demo: 'https://lets-sketch.netlify.app/',
      code: 'https://github.com/apolloniiaa/sketch-app',
    },
    {
      id: 5,
      src: web5,
      demo: 'https://search-your-movie-app.netlify.app/',
      code: 'https://github.com/apolloniiaa/movie-search',
    },
    {
      id: 6,
      src: web6,
      demo: 'https://phoenix-bank.netlify.app/',
      code: 'https://github.com/apolloniiaa/pb-page',
    },

    {
      id: 8,
      src: web8,
      demo: 'https://apolloniiaa.github.io/rock.paper.scissors-game/',
      code: 'https://github.com/apolloniiaa/rock.paper.scissors-game',
    },
    {
      id: 7,
      src: web7,
      demo: 'https://hungry-fox-b0834.web.app/',
      code: 'https://console.firebase.google.com/project/hungry-fox-b0834/overview',
    },
    {
      id: 9,
      src: web9,
      demo: 'https://apolloniiaa.github.io/dice.game/',
      code: 'https://github.com/apolloniiaa/dice.game',
    },
    {
      id: 10,
      src: web10,
      demo: 'https://apolloniiaa.github.io/booking-app__overkill-flexbox/',
      code: 'https://github.com/apolloniiaa/booking-app__overkill-flexbox',
    },
    {
      id: 11,
      src: web11,
      demo: 'https://apolloniiaa.github.io/travelBlog/',
      code: ' https://github.com/apolloniiaa/travelBlog',
    },
    {
      id: 12,
      src: web12,
      demo: 'https://plan-it-perfect-next-js-mw2g.vercel.app/',
      code: ' https://github.com/apolloniiaa/planItPerfect-next-js',
    },
  ];
  return (
    <div name='portfolio' className=' text-textLight  w-full '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col jutify-center w-full h-full'>
        <div className=' pb-8  text-center sm:text-left'>
          <h3 className='text-4xl  font-burtons  inline border-b-4  text-textLight border-textLight dark:border-green-100 dark:text-slate-300'>
            My works
          </h3>
          <p className='py-6  dark:text-slate-300'>
            Please take a moment to check out my latest work. Some of them are
            rather small, some of them are bigger, some of them are responsive,
            some are not, but this section will keep growing as I do more
            projects, and learn more technologies! I am particularly excited
            about 'planItPerfect', as it showcases my new skills in NextJs. I am
            always pushing myself to improve and create new and innovative
            designs, and I believe these projects reflect that. I hope you enjoy
            browsing through my work as much as I enjoyed creating it.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 mb-7'>
          {portfolios.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className='shadow-md shadow-textLight  bg-portfolioCard rounded-lg text-portfolioCardText dark:bg-fifth  dark:shadow-subtitle'
            >
              <Image
                src={src}
                demo={demo}
                code={code}
                alt='demo'
                className='rounded-md duration-200 hover:scale-105'
              />

              <div className='flex items-center justify-center'>
                <a
                  href={demo}
                  target='blank'
                  className='w-1/2 px-6 py-3 m-4 duration-200 cursor-pointer   dark:text-slate-300'
                >
                  Demo
                </a>
                <a
                  href={code}
                  target='blank'
                  className='w-1/2 px-6 py-3 m-4 duration-200 cursor-pointer   dark:text-slate-300'
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
