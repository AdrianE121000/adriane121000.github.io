import { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { FiSearch } from 'react-icons/fi';

function FilterForm({
  handleSubmit,
  register,
  onSubmit,
  setFilter,
  setLanguage,
  errors,
}) {
  const { translations } = useContext(LanguageContext);

  const [selectedCheckbox, setSelectedCheckbox] = useState('courses');

  const handleCheckboxChange = (value) => {
    setSelectedCheckbox(value);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-sm mx-auto mt-4'>
        <div className='flex items-center justify-center flex-col md:flex-row mb-4 gap-1  md:gap-3 '>
          <div className='bg-black shadow-md hover:shadow-violet-800 transition duration-500 ease-in-out py-2 border border-violet-800 flex items-center rounded-lg px-2 w-1/2'>
            <input
              type='checkbox'
              {...register('option')}
              id='tutorials'
              value='tutorials'
              className='mr-2 cursor-pointer'
              checked={selectedCheckbox === 'tutorials'}
              onChange={() => {
                handleCheckboxChange('tutorials');
                setFilter('tutorials');
              }}
            />
            <label
              className={`hover:text-violet-800 cursor-pointer ${
                selectedCheckbox === 'tutorials' ? 'text-violet-700' : ''
              }`}
              htmlFor='tutorials'>
              {translations.tutorials}
            </label>
          </div>
          <div className='bg-black shadow-md hover:shadow-violet-800 transition duration-500 ease-in-out py-2 border border-violet-800 flex items-center rounded-lg px-2 w-1/2'>
            <input
              type='checkbox'
              {...register('option')}
              value='courses'
              className='mr-2 cursor-pointer'
              id='courses'
              checked={selectedCheckbox === 'courses'}
              onChange={() => {
                handleCheckboxChange('courses');
                setFilter('courses');
              }}
            />
            <label
              className={`hover:text-violet-800 cursor-pointer ${
                selectedCheckbox === 'courses' ? 'text-violet-700' : ''
              }`}
              htmlFor='courses'>
              {translations.courses}
            </label>
          </div>
          <div className='bg-black shadow-md hover:shadow-violet-800 transition duration-500 ease-in-out py-2 border border-violet-800 flex items-center rounded-lg px-2 w-1/2'>
            <input
              type='checkbox'
              {...register('option')}
              value='certifications'
              id='certifications'
              className='mr-2 cursor-pointer'
              checked={selectedCheckbox === 'certifications'}
              onChange={() => {
                handleCheckboxChange('certifications');
                setFilter('certifications');
              }}
            />
            <label
              className={`hover:text-violet-800 cursor-pointer ${
                selectedCheckbox === 'certifications' ? 'text-violet-700' : ''
              }`}
              htmlFor='certifications'>
              {translations.certifications}
            </label>
          </div>
        </div>
        <div className='flex justify-center items-center mb-4'>
          <select
            className='rounded-xl border-none bg-black py-1 px-1 mr-2 md:p-2 md:mr-5'
            {...register('category')}
            onChange={(e) => setLanguage(e.target.value)}>
            <option value='all'>{translations.all[1]}</option>
            <option value='java'>Java</option>
            <option value='python'>Python</option>
            <option value='javascript'>Javascript</option>
          </select>
          <input
            id='search'
            type='text'
            placeholder={translations.search}
            className='bg-black w-36 md:w-80 lg:w-96 px-4 py-2 rounded-l-md shadow-md focus:outline-none focus:ring focus:border-violet-800 focus:shadow-violet-800 transition duration-300 ease-in-out'
            {...register('search', { required: true })}
          />
          <button
            type='submit'
            className='bg-violet-800 px-4 py-3 ml-1 md:ml-2 rounded-r-md shadow-md hover:shadow-violet-800 hover:scale-105 transition duration-300 ease-in-out'>
            <FiSearch />
          </button>
        </div>
        {errors.search && (
          <span className='text-red-500 mt-2'>{translations.error}</span>
        )}
      </form>
    </>
  );
}

export default FilterForm;
