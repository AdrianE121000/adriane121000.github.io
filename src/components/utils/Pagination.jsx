const Pagination = ({
  productsForPage,
  currentPage,
  setCurrentPage,
  totalProducts,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsForPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSelectedPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      className={`flex items-center justify-between bg-white mt-5 px-4 py-3 sm:px-6 ${
        pageNumbers.length <= 1 ? '' : 'border-t border-gray-400'
      }`}>
      <div className='flex flex-1 justify-between sm:hidden'>
        <button
          style={{ visibility: currentPage === 1 ? 'hidden' : '' }}
          onClick={onPreviusPage}
          className='inline-flex items-center rounded-md border border-gray-500 bg-white px-4 py-2 text-sm font-medium text-gray-500 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </button>
        <button
          style={{ visibility: pageNumbers.length <= 1 ? 'hidden' : '' }}
          aria-current='page'
          className='inline-flex items-center border-4 border-indigo-600 px-4 py-2 text-sm font-semibold text-gray-900  rounded-lg'>
          {currentPage}
        </button>
        <button
          style={{
            visibility: currentPage >= pageNumbers.length ? 'hidden' : '',
          }}
          onClick={onNextPage}
          className='ml-3 inline-flex items-center rounded-md border border-gray-500 bg-white px-4 py-2 text-sm font-medium text-gray-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div className='m-auto'>
          <nav
            className=' inline-flex gap-3 -space-x-px rounded-md shadow-sm'
            aria-label='Pagination'>
            <button
              style={{ visibility: currentPage === 1 ? 'hidden' : '' }}
              onClick={onPreviusPage}
              className='inline-flex items-center rounded-l-md px-2
              py-2 text-gray-500 border border-gray-500 '>
              <span className='sr-only'>Previous</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            </button>
            <div className='flex gap-1'>
              {pageNumbers.map((item) => (
                <button
                  onClick={() => onSelectedPage(item)}
                  key={item}
                  style={{
                    visibility: pageNumbers.length <= 1 ? 'hidden' : '',
                  }}
                  aria-current='page'
                  className={`px-4 py-2 text-gray-900 border border-gray-500 rounded-lg ${
                    currentPage === item ? 'border-4 border-indigo-600' : ''
                  }`}>
                  {item}
                </button>
              ))}
            </div>
            <button
              style={{
                visibility: currentPage >= pageNumbers.length ? 'hidden' : '',
              }}
              onClick={onNextPage}
              className='inline-flex items-center rounded-r-md px-2 py-2 text-gray-500 border border-gray-500'>
              <span className='sr-only'>Next</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
