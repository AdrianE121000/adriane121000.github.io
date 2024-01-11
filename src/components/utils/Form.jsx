import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { FiSearch } from 'react-icons/fi';

function Form({ handleSubmit, register, errors, onSubmit }) {
  const { translations } = useContext(LanguageContext);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex items-center flex-col'>
        <div className='flex mt-5 gap-2'>
          <input
            id='search'
            type='text'
            placeholder={translations.search}
            className='w-60 md:w-80 bg-gray-950 lg:w-96 px-4 py-2 rounded-l-md shadow-lg focus:shadow-violet-800 focus:outline-none focus:ring focus:border-violet-800 duration-300 ease-in-out'
            {...register('search', { required: true })}
          />
          <button
            type='submit'
            className='bg-violet-800 px-4 py-2 shadow-md rounded-r-md hover:shadow-violet-800 hover:scale-110 transition duration-300 ease-in-out'>
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

export default Form;
