import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations } = useContext(LanguageContext);

  return (
    <div className='relative inline-block text-left sm:text-lg md:text-xl lg:text-2xl'>
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type='button'
            className='inline-flex sm:text-lg md:text-xl lg:text-2xl justify-center w-full rounded-md  bg-gray-800  py-1 text-white '
            id='options-menu'
            aria-expanded='true'
            aria-haspopup='true'>
            {translations.category}
            <svg
              className='-mr-1 ml-2 h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'>
              <path
                fillRule='evenodd'
                d='M10 19a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 16.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 19z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className='origin-top-right absolute items-center mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'>
          <div
            className='py-1'
            role='none'>
            {translations.routes.map((element) => (
              <NavLink
                key={element.ruta}
                onClick={() => {
                  setIsOpen(false);
                }}
                to={`/cat/${element.ruta}`}
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                role='menuitem'>
                {element.nombre}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
