import avatar from '../public/avatar.png';
import { Link } from 'react-scroll';

import { AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div name='home'>
      <section className=' px-10 md:px-20 lg:px-40'>
        <div className='text-center p-10 '>
          <h2 className='text-xl font-burtons py-2 font-medium md:text-5xl  text-secondary  dark:text-fifth'>
            Apollónia Sz.
          </h2>
          <h3 className='text-xl py-2 md:text-3xl  text-primary dark:text-slate-400 '>
            I am| <span className='text-fifth'> a creative</span> <br />{' '}
            frontend developer
          </h3>
          <p className='text-md py-5 leading-8 text-primary md:text-xl max-w-lg mx-auto dark:text-slate-400'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro est
            excepturi expedita optio a omnis sint, tempora saepe distinctio
            deleniti voluptatem ducimus maxime consequuntur ut eaque totam vero
            laudantium corporis!
          </p>
        </div>
        <div className='relative mx-auto  bg-gradient-to-r from-gray-900 to-teal-500 rounded-full w-80 h-80 mb-10 overflow-hidden '>
          <Image
            src={avatar}
            layout='fill'
            legacy='objectFit'
            objectFit='cover'
            alt='avatar'
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          />
        </div>
        <div className='text-5xl flex align-center justify-center gap-16 py-3 text-primary dark:text-fifth'>
          <Link
            to='portfolio'
            smooth
            duration={500}
            className=' group text-3xl font-burtons color-white w-fit px-6 py-3 my-2 flex items-center rounded-md  cursor-pointer'
          >
            P o r t f o l i o
            <span className=' group-hover:rotate-90 duration-300 '>
              <AiOutlineArrowRight size={15} className='ml-1' />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
