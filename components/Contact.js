const Contact = () => {
  return (
    <div name='contact' className='w-full   bp-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold   flex justify-center items-center '>
            Contact
          </p>
          <p className='py-3  flex justify-center items-center  '>
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className=' flex justify-center items-center'>
          <form
            action='https://getform.io/f/9040f692-5ed8-41cb-bdf8-563966f947fd'
            method='POST'
            className=' flex flex-col w-full md:w-1/2'
          >
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input
              type='text'
              name='email'
              placeholder='Enter your email'
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <textarea
              name='message'
              placeholder='Enter your message'
              rows='10'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            ></textarea>

            <button className='text-white bg-gradient-to-b from-red-100 to-primary px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
