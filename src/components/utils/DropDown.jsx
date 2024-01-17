import { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { IconDropDown } from './Icons';
import { IoLanguageOutline } from 'react-icons/io5';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleLang, language } = useContext(LanguageContext);

  const handleClick = (event) => {
    setIsOpen(false);
    handleLang(event);
  };

  return (
    <div className='relative inline-block text-sm text-center'>
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type='button'
            className='inline-flex w-full justify-center items-center gap-1 rounded-md px-4 py-2 hover:text-violet-800 shadow-md hover:shadow-violet-600 transition duration-300 ease-in-out'
            id='options-menu'
            aria-expanded='true'
            aria-haspopup='true'>
            <IoLanguageOutline size='20px' />
            {language}
            <IconDropDown />
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className='origin-center absolute items-center mt-1 w-auto rounded-md shadow-lg bg-gray-800 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'>
          <div
            className='py-1'
            role='none'>
            <button
              onClick={() => handleClick('en')}
              className='block px-4 py-1 text-sm rounded-xl hover:bg-gray-950 shadow-sm  hover:text-violet-700 hover:shadow-violet-600 transition duration-300 ease-in-out'>
              English
            </button>
            <button
              onClick={() => handleClick('es')}
              className='block px-4 py-1 text-sm rounded-xl hover:bg-gray-950 shadow-sm  hover:text-violet-700 hover:shadow-violet-600 transition duration-300 ease-in-out'>
              Spanish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
