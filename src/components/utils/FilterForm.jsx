import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

function FilterForm({ handleSubmit, register, errors, onSubmit }) {
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
        <div className='flex items-center justify-center mb-4 gap-3 '>
          <div className='border flex border-black rounded-lg px-2'>
            <input
              type='checkbox'
              {...register('courses')}
              value='courses'
              name='courses'
              className='mr-2'
              checked={selectedCheckbox === 'courses'}
              onChange={() => handleCheckboxChange('courses')}
            />
            <label>Courses</label>
          </div>
          <div className='border flex border-black rounded-lg px-2'>
            <input
              type='checkbox'
              {...register('tutorials')}
              value='tutorials'
              name='tutorials'
              className='mr-2'
              checked={selectedCheckbox === 'tutorials'}
              onChange={() => handleCheckboxChange('tutorials')}
            />
            <label>tutoriales</label>
          </div>
          <div className='border flex border-black rounded-lg px-2'>
            <input
              type='checkbox'
              {...register('certifications')}
              value='certifications'
              name='certifications'
              className='mr-2'
              checked={selectedCheckbox === 'certifications'}
              onChange={() => handleCheckboxChange('certifications')}
            />
            <label>Centificaciones</label>
          </div>
        </div>
        <div className='flex justify-center items-center mb-4'>
          <select
            className='rounded-xl p-2 mr-5'
            {...register('category')}>
            <option value='category1'>Categoría 1</option>
            <option value='category2'>Categoría 2</option>
            <option value='category3'>Categoría 3</option>
          </select>
          <input
            id='search'
            type='text'
            placeholder={translations.search}
            className='w-60 md:w-80 lg:w-96 px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300'
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
