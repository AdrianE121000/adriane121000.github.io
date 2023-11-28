import { useState } from 'react';
import DropDown from './DropDown';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.ico';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Navigation = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const { language, translations, handleLang } = useContext(LanguageContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className='bg-gray-800 text-white p-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <img
            src={logo}
            alt='Logo'
            className='h-8'
          />
          <h1 className='text-lg ml-3 font-bold'>learnDeals</h1>
        </div>

        <div className=' items-center hidden sm:block'>
          <NavLink
            to='/'
            className='mx-2 hover:underline'>
            {translations.all}
          </NavLink>
          <NavLink
            to='/search'
            className='mx-2 hover:underline'>
            {translations.search}
          </NavLink>
          <DropDown />
          <select
            id='select'
            value={language}
            onChange={handleLang}
            className='rounded-md border border-gray-300 bg-gray-800 px-2 py-1 mx-2 text-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue'>
            <option
              id='English'
              value='en'>
              English
            </option>
            <option
              id='Español'
              value='es'>
              Spanish
            </option>
          </select>
        </div>
        <div className='block md:hidden'>
          <button onClick={handleMobileMenuClick}>
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className='block md:hidden bg-gray-800 text-white p-4 text-lg md:text-xl lg:text-2xl '>
          <div className='flex flex-col items-start gap-2'>
            <NavLink
              to='/'
              className='no-underline text-lg'>
              {translations.all}
            </NavLink>
            <NavLink
              to='/search'
              className='no-underline'>
              {translations.search}
            </NavLink>
            <DropDown />
            <select
              id='select2'
              value={language}
              onChange={handleLang}
              className='rounded-lg text-lg border border-gray-300 bg-gray-800 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue'>
              <option
                id='English2'
                value='en'>
                English
              </option>
              <option
                id='Español2'
                value='es'>
                Spanish
              </option>
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
