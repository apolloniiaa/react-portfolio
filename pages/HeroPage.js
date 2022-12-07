import avatar from '../public/avatar.png';
import { Link } from 'react-scroll';

import { AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div name='home'>
      <section className='px-10 md:px-20 lg:px-40'>
        <div className='text-center'>
          <h2 className='text-xl font-burtons py-2 font-medium md:text-5xl  text-secondary  dark:text-fifth pt-7'>
            Apollónia Sz.
          </h2>
          <h3 className='text-2xl py-2 md:text-3xl  text-primary dark:text-slate-400 '>
            I am| <span className='text-fifth'> a creative</span> <br />{' '}
            frontend developer
          </h3>
          <p className='text-md py-5 leading-8 text-primary md:text-xl max-w-lg mx-auto dark:text-slate-400'>
            Welcome! My name is Apollónia. I'm a career changer Frontend
            developer with a high level of enthusiasm and attention.I have
            started learning web development 1,5 years ago, but serious journey
            has began 6 months ago.
          </p>
        </div>
        <div className='relative mx-auto bg-gradient-to-r from-fifth to-primary rounded-full w-48 h-48 mb-10 overflow-hidden '>
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
        <div className='text-3xl flex align-center justify-center gap-16 py-3 text-primary dark:text-fifth'>
          <Link
            to='portfolio'
            smooth
            duration={500}
            className=' group text-3xl font-burtons color-white w-fit md:px-6 md:py-3 my-2 flex items-center rounded-md  cursor-pointer'
          >
            <p className=' text-base  md:text-3xl'> P o r t f o l i o </p>
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
