import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isCookiesAccepted } from '../../logic/cookies';

const Cookies = () => {
  const [isActive, setIsActive] = useState(
    !localStorage.getItem('cookies-accepted') ? '' : 'hidden'
  );
  const navigate = useNavigate();

  isCookiesAccepted();

  function acceptCookies() {
    setIsActive('hidden');

    localStorage.setItem('cookies-accepted', true);
  }

  function cancelCookies() {
    setIsActive('hidden');

    localStorage.setItem('cookies-accepted', false);
  }

  const privacy = () => {
    setIsActive('hidden');
    navigate('/privacy');
  };
  return (
    <>
      <div
        className={`block bg-gray-700 p-5 w-full fixed z-50 bottom-0 text-center ${isActive}`}>
        <h3 className='text-3xl mb-3'>Cookies</h3>
        <p className='mb-3'>
          We use third-party cookies to obtain statistical data on our users
          navigation and improve our services. If you accept or continue
          browsing, we consider that you accept its use and our{' '}
          <span>
            <button
              className='text-violet-600 hover:scale-110 transition duration-300 ease-in-out'
              onClick={() => privacy}>
              Privacy Policy.
            </button>
          </span>
        </p>
        <div className='flex flex-row justify-end gap-3'>
          <button
            className='bg-violet-800 border-none text-center px-3 py-3 rounded-md text-md shadow-md hover:bg-gray-900 hover:shadow-violet-800 hover:text-violet-800 hover:scale-110 transition duration-300 ease-in-out'
            onClick={acceptCookies}>
            Accept
          </button>
          <button
            className='bg-violet-800 border-none text-center px-3 py-3 rounded-md text-md shadow-md hover:bg-gray-900 hover:shadow-violet-800 hover:text-violet-800 hover:scale-110 transition duration-300 ease-in-out'
            onClick={cancelCookies}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Cookies;
