import { useState, useContext } from 'react';
import StaggeredDropDown from '../utils/StaggeredDropDown';
import logo from '../../assets/logo.ico';
import { LanguageContext } from '../../context/LanguageContext';
import { BarIcon, XMark } from '../utils/Icons';
import { useNavigate, NavLink } from 'react-router-dom';
import DropDown from './DropDown';

const NavBar = () => {
  const { translations } = useContext(LanguageContext);
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
  ];

  return (
    <>
      <nav className='bg-gray-950 fixed z-50 w-full top-0 p-4 sm:text-sm md:text-lg '>
        <div className='relative flex h-8 items-center justify-between'>
          <div
            className='flex flex-shrink-0 items-center cursor-pointer'
            onClick={() => navigate('/')}>
            <img
              src={logo}
              alt='Logo'
              className='h-8'
            />
            <h1 className='ml-3 font-bold px-2 hover:text-violet-800 '>
              learnDeals
            </h1>
          </div>

          <div className='hidden space-x-4 md:block'>
            {navItems.map((nav, index) => (
              <NavLink
                key={index}
                to={nav.to}
                className='rounded-md px-3 text-sm py-2 font-medium hover:text-violet-800 shadow-md hover:shadow-violet-600 transition duration-300 ease-in-out'>
                {nav.name}
              </NavLink>
            ))}
            <StaggeredDropDown />
          </div>
          <div className='hidden space-x-4 pr-10 md:flex'>
            <DropDown />
          </div>
          <div className='flex items-center md:hidden'>
            <button
              className='hover:text-violet-800'
              onClick={handleMobileMenuClick}>
              {mobileMenuOpen ? <XMark /> : <BarIcon />}
            </button>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div
          className={`block md:hidden fixed z-50 w-full animate-slowTop bg-gray-950 pb-1 sm:text-lg md:text-xl lg:text-2xl ${
            mobileMenuOpen ? 'animate-slowBottom' : 'animate-slowTop'
          }`}>
          <div className='flex flex-col justify-center items-center text-center gap-1 '>
            {navItems.map((nav, index) => (
              <NavLink
                key={index}
                to={nav.to}
                onClick={handleMobileMenuClick}
                className='w-2/5 rounded-md px-3 py-2 text-sm font-medium hover:text-violet-800 shadow-md hover:shadow-violet-600 transition duration-300 ease-in-out'>
                {nav.name}
              </NavLink>
            ))}
            <div className='flex justify-center gap-2'>
              <StaggeredDropDown />
              <DropDown />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
