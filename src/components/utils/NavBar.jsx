import { useState } from 'react';
import DropDown from '../utils/DropDown';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.ico';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { BarIcon, XMark } from '../utils/Icons';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { language, translations, handleLang } = useContext(LanguageContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    {
      name: translations.home,
      to: '/',
    },
    {
      name: translations.all[0],
      to: '/courses',
    },
    {
      name: 'Donation',
      to: '/donation',
    },
  ];

  return (
    <>
      <nav className='bg-gray-800 text-white fixed z-50 w-full top-0 p-4  sm:text-lg md:text-xl '>
        <div className='relative flex h-8 items-center justify-between'>
          <div
            className='flex flex-shrink-0 items-center cursor-pointer'
            onClick={() => navigate('/')}>
            <img
              src={logo}
              alt='Logo'
              className='h-8'
            />
            <h1 className='ml-3 font-bold'>learnDeals</h1>
          </div>

          <div className=' hidden space-x-4 sm:ml-6 md:block'>
            {navItems.map((nav, index) => (
              <NavLink
                key={index}
                to={nav.to}
                className='rounded-md px-3 py-2 text-sm font-medium bg-gray-900 text-white '>
                {nav.name}
              </NavLink>
            ))}
            <DropDown />
            <select
              id='select'
              value={language}
              onChange={handleLang}
              className='bg-gray-900 rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:border-blue-300 focus:shadow-outline-blue'>
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
          <div></div>
          <div className='flex items-center md:hidden'>
            <button onClick={handleMobileMenuClick}>
              {mobileMenuOpen ? <XMark /> : <BarIcon />}
            </button>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div
          className={`block md:hidden fixed z-50 w-full animate-slowTop bg-gray-800 text-white pb-1 sm:text-lg md:text-xl lg:text-2xl ${
            mobileMenuOpen ? 'animate-slowBottom' : 'animate-slowTop'
          }`}>
          <div className='flex flex-col justify-center text-center gap-1 '>
            {navItems.map((nav, index) => (
              <NavLink
                key={index}
                to={nav.to}
                onClick={handleMobileMenuClick}
                className='w-full rounded-md px-3 py-2 text-sm font-medium bg-gray-900 text-white'>
                {nav.name}
              </NavLink>
            ))}
            <div className='flex justify-center gap-2'>
              <DropDown />
              <select
                id='select2'
                value={language}
                onChange={handleLang}
                className='bg-gray-900 rounded-md px-3 py-2 text-sm text-center font-medium focus:outline-none focus:border-blue-300 focus:shadow-outline-blue'>
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
        </div>
      )}
    </>
  );
};

export default NavBar;
