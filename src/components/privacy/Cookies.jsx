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
        className={`block bg-gray-300 p-5 w-full fixed bottom-0 text-center ${isActive}`}>
        <h3 className='text-xs mb-3'>Cookies</h3>
        <p className='mb-3'>
          We use third-party cookies to obtain statistical data on the
          navigation of our users and improve our services. If you accept or
          continue browsing, we consider that you accept their use.
        </p>
        <div className='flex flex-row justify-end'>
          <button
            className='bg-gray-500 border-none text-white text-center px-3 py-5 cursor-pointer rounded mr-1 text-xs hover:bg-gray-950'
            onClick={acceptCookies}>
            Accept Cookies
          </button>
          <button
            className='bg-gray-500 border-none text-white text-center px-3 py-5 cursor-pointer rounded mr-1 text-xs hover:bg-gray-950'
            onClick={cancelCookies}>
            Cancel Cookies
          </button>
          <button
            className='bg-gray-500 border-none text-white text-center px-3 py-5 cursor-pointer rounded mr-1 text-xs hover:bg-gray-950'
            onClick={privacy}>
            Privacy Policy
          </button>
        </div>
      </div>
    </>
  );
};

export default Cookies;
