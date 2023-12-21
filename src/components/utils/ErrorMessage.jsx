const ErrorMessage = ({ text }) => {
  return (
    <>
      <div className='flex justify-center mx-5 items-center mt-26 pt-5'>
        <div
          className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded '
          role='alert'>
          <span className='block sm:inline'>{text}</span>
        </div>
      </div>
    </>
  );
};

export default ErrorMessage;
