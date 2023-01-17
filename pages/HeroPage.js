import avatar from '../public/avatar.png';
import { Link } from 'react-scroll';

import { AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div name='home'>
      <section className='px-px md:px-20 lg:px-40'>
        <div className='text-center'>
          <h3 className='text-2xl py-2 pt-8 md:text-3xl  text-textLight dark:text-slate-400 '>
            I am a creative
            <span className='text-subtitle font-burtons dark:text-textDark '>
              <br /> front-end developer...
            </span>
          </h3>
          <p className='text-md py-5 leading-8 text-textLight md:text-xl max-w-lg mx-auto dark:text-slate-400 mb-7'>
            a career changer who recently transitioned into the field of
            frontend development. With a background in fashion designer &
            stylist, I bring a unique perspective and set of skills to the
            table. I am passionate about creating visually appealing and
            user-friendly websites, and I am constantly learning and growing as
            a developer. On this site, you'll find examples of my work and my
            journey as a frontend developer. Thank you for visiting! 🎉
          </p>
        </div>
        <div className='relative mx-auto  rounded-full w-48 h-48 mb-10 overflow-hidden '>
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
        <div className='text-3xl flex align-center justify-center gap-16 py-3 text-textLight  dark:text-textDark'>
          <Link
            to='portfolio'
            smooth
            duration={500}
            className=' group text-3xl font-burtons color-white w-fit md:px-6 md:py-3 my-2 flex items-center rounded-md  cursor-pointer'
          >
            <p className=' text-base  md:text-3xl  dark:text-textDark'>
              L O O K _ A R O U N D{' '}
            </p>
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
