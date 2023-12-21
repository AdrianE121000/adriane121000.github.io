import { useContext } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { IconDropDown } from './Icons';

const DropDown = ({ width }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { translations } = useContext(LanguageContext);

  return (
    <div
      className={`relative inline-block  text-left text-sm ${width ? '' : ''}`}>
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type='button'
            className='inline-flex text-sm w-full justify-center rounded-md px-3 py-2 bg-gray-900 text-white '
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
                className='block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
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
