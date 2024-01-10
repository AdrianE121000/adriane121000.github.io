import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';

const StaggeredDropDown = () => {
  const { translations } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  return (
    <div className='relative inline-block  text-left text-sm'>
      <motion.div
        animate={open ? 'open' : 'closed'}
        className='relative'>
        <button
          onClick={() => setOpen((pv) => !pv)}
          className='flex items-center gap-0 px-3 py-0 rounded-md shadow-md hover:shadow-violet-800 hover:text-violet-800 '>
          <span className='font-medium'>categories</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: 'top', translateX: '-50%' }}
          className='flex flex-col gap-1 rounded-lg bg-gray-800 shadow-xl absolute left-[60%] overflow-hidden'>
          {translations.routes.map((element) => (
            <NavLink
              key={element.ruta}
              to={`/cat/${element.ruta}`}
              role='menuitem'>
              <Option
                text={element.nombre}
                setOpen={setOpen}
              />
            </NavLink>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className='flex items-center gap-0 w-full px-5  text-base font-medium whitespace-nowrap rounded-md hover:bg-gray-950 shadow-sm  hover:text-violet-700 hover:shadow-violet-600 duration-300 ease-in-out transition-colors cursor-pointer'>
      <motion.span variants={actionIconVariants}></motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.05,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: 'afterChildren',
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
