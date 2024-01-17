import { ArrowLeft, ArrowRight } from './Icons';

const Pagination = ({
  productsForPage,
  currentPage,
  totalProducts,
  onNextPage,
  onPreviusPage,
  onSelectedPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsForPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className={`flex items-center justify-between mt-5 px-4 mb-3 py-3 sm:px-6 ${
        pageNumbers.length <= 1 ? '' : 'border-t border-gray-400'
      }`}>
      <div className='flex flex-1 justify-between sm:hidden'>
        <button
          style={{ visibility: currentPage === 1 ? 'hidden' : '' }}
          onClick={onPreviusPage}
          className='inline-flex items-center rounded-md border border-violet-800 text-violet-800 bg-black px-4 py-2 text-sm font-medium'>
          <ArrowLeft />
        </button>
        <button
          style={{ visibility: pageNumbers.length <= 1 ? 'hidden' : '' }}
          aria-current='page'
          className='inline-flex items-center border-4 border-violet-800 bg-black px-4 py-2 text-sm font-semibold text-violet-800  rounded-lg'>
          {currentPage}
        </button>
        <button
          style={{
            visibility: currentPage >= pageNumbers.length ? 'hidden' : '',
          }}
          onClick={onNextPage}
          className='ml-3 inline-flex items-center rounded-md border border-violet-800 bg-black px-4 py-2 text-sm font-medium text-violet-800'>
          <ArrowRight />
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
              py-2 text-violet-800 bg-black border border-violet-800 shadow-md hover:shadow-violet-800 hover:scale-125 transition duration-300 ease-in-out'>
              <span className='sr-only'>Previous</span>
              <ArrowLeft />
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
                  className={`px-4 py-2 text-violet-800 border border-violet-800 bg-black rounded-lg shadow-md hover:shadow-violet-800 hover:scale-105 transition duration-300 ease-in-out ${
                    currentPage === item ? 'border-4' : ''
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
              className='inline-flex items-center rounded-r-md px-2 py-2 text-violet-800 border border-violet-800 bg-black shadow-md hover:shadow-violet-800 hover:scale-125 transition duration-300 ease-in-out'>
              <span className='sr-only'>Next</span>
              <ArrowRight />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
