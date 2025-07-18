import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(false);

  const [isSent, setIsSent] = React.useState(false);
  const [isError, setIsError] = React.useState(false);


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
     setIsLoading(true); // Start loading

    emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current, {
        publicKey:
        import.meta.env.VITE_EMAILJS_KEY,
      })
      .then(
        () => {
          setIsLoading(false); // Stop loading
          setIsSent(true);
          setIsError(false);
          setName('');
          setEmail('');
          setMessage('');
          setTimeout(() => setIsSent(false), 2000);
        },
        (error) => {
           setIsLoading(false); // Stop loading
            setIsError(true);
            setIsSent(false);
        },
      );
  };



  return (
    <div className='flex items-center justify-center bg-[#0c2b45] h-dvh w-screen p-4'>

            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-blue-400 bg-opacity-40 z-20">
                <svg
                  className="animate-spin h-10 w-10 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="5"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M12 2
                      a10 10 0 0 1 0 20
                      a10 10 0 0 1 0 -20"
                  />
                  </svg>
              </div>
          )}
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
           <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Email
            </button>
             {isSent && <p className='flex align-top text-green-500 text-3xl '>Email sent successfully!</p>}
            {isError && <p className='flex text-red-500'>Failed to send email. Please try again.</p>}
        </form>

       
     </div>
  );
};

export default Contact