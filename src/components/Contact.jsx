import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef()
  const contactRef = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_55tnh95', 'template_d179dvk', form.current, 'mVHQhJi8-3UWaQuva')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div ref={contactRef} id='contact' className='flex flex-col items-center justify-center mt-[-5%] p-2 h-screen'>
      <h1 className='text-3xl text-center text-black font-bold mb-6'>Contact Me</h1>
      <div className='max-w-xl w-full mx-auto p-6 bg-white rounded-lg shadow-md'>
        <form ref={form} onSubmit={sendEmail} action="" className='--form-control'>
          <div className='mb-4'>
            <label className="text-black text-sm font-semibold mb-2" htmlFor="name">Name</label><br />
            <input name='name' placeholder='Name' className='w-full px-3 py-2 border rounded-lg bg-gray-100 text-black focus:border-blue-500 required' type="text" />
          </div>
          <div className='mb-4'>
            <label className="text-black text-sm font-semibold mb-2" htmlFor="email">Email</label><br />
            <input name='email' placeholder='abc@gmail.com' className='w-full px-3 py-2 border rounded-lg bg-gray-100 text-black focus:border-blue-500 required' type="text" />
          </div>
          <div className='mb-4'>
            <label className="text-black text-sm font-semibold mb-2" htmlFor="message">Message</label><br />
            <textarea name='message'
              className='w-full px-3 py-2 border rounded-lg bg-gray-100 text-black focus:border-blue-500 required'
              cols={70}
              rows={5}
              placeholder='Type a Message...'
            ></textarea>
          </div>
          <div className='flex justify-center'>
          <button
                onClick={() => redirectToGitHub("https://github.com/Mrudhula06/Online-Quiz.git")}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Send
              </button>                           
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
