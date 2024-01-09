import { useContext } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { IconDropDown } from './Icons';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations } = useContext(LanguageContext);

  return (
    <div className='relative inline-block  text-left'>
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type='button'
            className='inline-flex text-sm md:text-lg w-full justify-center rounded-md px-3 py-2 hover:text-violet-800 shadow-md hover:shadow-violet-600 transition duration-300 ease-in-out'
            id='options-menu'
            aria-expanded='true'
            aria-haspopup='true'>
            {translations.category}
            <IconDropDown />
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className='origin-top-right absolute items-center mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none'
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
                className='block px-4 py-1 text-sm rounded-xl hover:bg-gray-950 shadow-sm  hover:text-violet-700 hover:shadow-violet-600 transition duration-300 ease-in-out'
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
