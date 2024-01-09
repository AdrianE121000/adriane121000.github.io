import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { FaTelegramPlane } from 'react-icons/fa';
import logo from '../../assets/logo.ico';

const Footer = () => {
  const { translations } = useContext(LanguageContext);
  return (
    <>
      <footer className='bg-gray-950 py-4 rounded-t-2xl'>
        <div className='container mx-auto flex md:block flex-col justify-center items-center text-left'>
          <div className='flex flex-row md:flex-col'>
            <h3 className='text-xl font-bold mb-2 ml-2'>learnDeals</h3>
            <img
              src={logo}
              alt='learnDeals image'
              className='h-8 w-8 mb-2 ml-2'
            />
          </div>
          <p className='mb-2 ml-2 text-xl'>{translations.tlChannel}</p>
          <ul className='md:flex mb-2 ml-2 gap-2'>
            <li className='shadow-md text-center px-2 py-2 rounded-md hover:shadow-violet-800 transition duration-500 ease-in-out'>
              <a
                className='hover:text-violet-800 transition duration-500 ease-in-out'
                href='https://t.me/CursosUdemy_Free'
                target='_blank'
                rel='noreferrer'>
                <div className='flex'>
                  <FaTelegramPlane size={24} />
                  <span className='ml-2'>{translations.enCourses}</span>
                </div>
              </a>
            </li>
            <li className='shadow-md px-2 py-2 rounded-md hover:shadow-violet-800 transition duration-500 ease-in-out'>
              <a
                className='hover:text-violet-800 transition duration-500 ease-in-out'
                href='https://t.me/CursosUdemy_Gratis'
                target='_blank'
                rel='noreferrer'>
                <div className='flex'>
                  <FaTelegramPlane size={24} />
                  <span className='ml-2'>{translations.espCourses}</span>
                </div>
              </a>
            </li>
            <li className='shadow-md px-2 py-2 rounded-md hover:shadow-violet-800 transition duration-500 ease-in-out'>
              <a
                className='hover:text-violet-800 transition duration-500 ease-in-out'
                href='https://t.me/UdemyProgramming'
                target='_blank'
                rel='noreferrer'>
                <div className='flex'>
                  <FaTelegramPlane size={24} />
                  <span className='ml-2'>
                    {translations.programmingCourses}
                  </span>
                </div>
              </a>
            </li>
          </ul>
          <div className='text-left ml-2'>
            <p className='text-gray-400'>
              &copy; {new Date().getFullYear()} learnDeals{' '}
              <span>{translations.copyright}</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
