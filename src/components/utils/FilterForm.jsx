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
          <div className='border flex items-center border-black rounded-lg px-2 w-1/2'>
            <input
              type='checkbox'
              {...register('option')}
              id='tutorials'
              value='tutorials'
              className='mr-2'
              checked={selectedCheckbox === 'tutorials'}
              onChange={() => {
                handleCheckboxChange('tutorials');
                setFilter('tutorials');
              }}
            />
            <label htmlFor='tutorials'>{translations.tutorials}</label>
          </div>
          <div className='border flex items-center border-black rounded-lg px-2 w-1/2'>
            <input
              type='checkbox'
              {...register('option')}
              value='courses'
              id='courses'
              className='mr-2'
              checked={selectedCheckbox === 'courses'}
              onChange={() => {
                handleCheckboxChange('courses');
                setFilter('courses');
              }}
            />
            <label htmlFor='courses'>{translations.courses}</label>
          </div>
          <div className='border flex items-center border-black rounded-lg px-2 w-1/2'>
            <input
              type='checkbox'
              {...register('option')}
              value='certifications'
              id='certifications'
              className='mr-2'
              checked={selectedCheckbox === 'certifications'}
              onChange={() => {
                handleCheckboxChange('certifications');
                setFilter('certifications');
              }}
            />
            <label htmlFor='certifications'>
              {translations.certifications}
            </label>
          </div>
        </div>
        <div className='flex justify-center items-center mb-4'>
          <select
            className='rounded-xl py-1 mr-2 md:p-2 md:mr-5'
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
            className='w-40 md:w-80 lg:w-96 px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300'
            {...register('search', { required: true })}
          />
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-3 ml-1 rounded-r-md'>
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
