import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <AiFillLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/apolloniiaa/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Github <AiFillGithub size={30} />
        </>
      ),
      href: 'https://github.com/apolloniiaa',
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <AiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:apoll93@hotmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-primary dark:bg-fourth' +
              ' ' +
              style
            }
          >
            <a
              href={href}
              className='flex justify-between items-center w-full text-fifth'
              download={download}
              target='_blank'
              rel='noreferrer'
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
