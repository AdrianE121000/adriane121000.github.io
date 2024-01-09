import { WarningIcon } from './Icons';

const ErrorMessage = ({ text }) => {
  return (
    <>
      <div className='flex justify-center mx-5 mt-26 pt-5'>
        <div
          className='bg-gray-950 flex md:items-center gap-1 text-red-500 px-4 py-3 rounded-2xl '
          role='alert'>
          <WarningIcon />
          <span className='block sm:inline'>{text}</span>
        </div>
      </div>
    </>
  );
};

export default ErrorMessage;
