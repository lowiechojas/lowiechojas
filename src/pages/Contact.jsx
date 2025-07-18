import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const navigate = useNavigate()
  const form = useRef();

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: 'Lowie Hojas',
    message: message,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current, {
        publicKey:
        import.meta.env.VITE_EMAILJS_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div className='flex items-center justify-around bg-[#0c2b45] h-dvh w-screen p-4'>

        <form className='bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'  ref={form} onSubmit={sendEmail}>
          <div className='mb-4'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">Company Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name='from_name'
            onChange={(e) => setName(e.target.value)}
            value={name} type="text" placeholder='name'/>
          </div>
          <div className='mb-6'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name='from_email'
            onChange={(e) => setEmail(e.target.value)}
            value={email} type="email" placeholder='email'/>       
          </div>
          <div className='mb-6'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Message</label>
            <textarea className='shadow appearance-none border text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            name='message'
            onChange={(e) => setMessage(e.target.value)}
            value={message} rows="4" cols="50">

            </textarea>
           </div>
          <button type='submit' value="send" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
            Send
          </button>
        </form>
     </div>
  );
};

export default Contact