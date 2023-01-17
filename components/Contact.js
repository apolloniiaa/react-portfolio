const Contact = () => {
  return (
    <div name='contact' className='w-full   bp-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl  text-center text-textLight font-burtons flex justify-center items-center dark:text-gray-200'>
            Thanks for taking the time to fill out this form. Your input is
            important to me, and I will respond to your inquiry as soon as
            possible.
          </p>
          <p className='pt-8  font-burtons text-center text-textLight flex justify-center items-center dark:text-gray-200 '>
            Hit the "Send message" button below <br />
            and let's start the journey of creating something
            <br /> amazing together!
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
              className='p-2 bg-transparent border-2  border-card rounded-md text-subtitle  focus:outline-none dark: border-green-100 dark:text-gray-300'
            />
            <input
              type='text'
              name='email'
              placeholder='Enter your email'
              className='my-4 p-2 bg-transparent border-2 border-card rounded-md text-subtitle focus:outline-none  dark: border-green-100 dark:text-gray-300'
            />
            <textarea
              name='message'
              placeholder='Enter your message'
              rows='10'
              className='p-2 bg-transparent border-2 rounded-md border-card text-subtitle  focus:outline-none   dark: border-green-100 dark:text-gray-300'
            ></textarea>

            <button className='text-textLight font-burtons px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 dark:text-textDark'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
