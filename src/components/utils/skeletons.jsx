const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CoursesSkeleton() {
  return (
    <div className='container mx-auto px-4 mt-5'>
      <div
        className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
        <div className='bg-white p-4 shadow-md rounded-md flex flex-col'>
          <div className='h-40 mb-4 rounded-md bg-gray-200'></div>
          <div className='p-2'>
            <div className='ml-0 h-8 w-full rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-6 w-1/2 rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-4 w-3/4 rounded-md bg-gray-200 text-sm font-medium'></div>
          </div>
        </div>
        <div className='bg-white p-4 shadow-md rounded-md flex flex-col'>
          <div className='h-40 mb-4 rounded-md bg-gray-200'></div>
          <div className='p-2'>
            <div className='ml-0 h-8 w-full rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-6 w-1/2 rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-4 w-3/4 rounded-md bg-gray-200 text-sm font-medium'></div>
          </div>
        </div>
        <div className='bg-white p-4 shadow-md rounded-md flex flex-col'>
          <div className='h-40 mb-4 rounded-md bg-gray-200'></div>
          <div className='p-2'>
            <div className='ml-0 h-8 w-full rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-6 w-1/2 rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-4 w-3/4 rounded-md bg-gray-200 text-sm font-medium'></div>
          </div>
        </div>
        <div className='bg-white p-4 shadow-md rounded-md flex flex-col'>
          <div className='h-40 mb-4 rounded-md bg-gray-200'></div>
          <div className='p-2'>
            <div className='ml-0 h-8 w-full rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-6 w-1/2 rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-4 w-3/4 rounded-md bg-gray-200 text-sm font-medium'></div>
          </div>
        </div>
        <div className='bg-white p-4 shadow-md rounded-md flex flex-col'>
          <div className='h-40 mb-4 rounded-md bg-gray-200'></div>
          <div className='p-2'>
            <div className='ml-0 h-8 w-full rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-6 w-1/2 rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-4 w-3/4 rounded-md bg-gray-200 text-sm font-medium'></div>
          </div>
        </div>
        <div className='bg-white p-4 shadow-md rounded-md flex flex-col'>
          <div className='h-40 mb-4 rounded-md bg-gray-200'></div>
          <div className='p-2'>
            <div className='ml-0 h-8 w-full rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-6 w-1/2 rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-4 w-3/4 rounded-md bg-gray-200 text-sm font-medium'></div>
          </div>
        </div>
        <div className='bg-white p-4 shadow-md rounded-md flex flex-col'>
          <div className='h-40 mb-4 rounded-md bg-gray-200'></div>
          <div className='p-2'>
            <div className='ml-0 h-8 w-full rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-6 w-1/2 rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-4 w-3/4 rounded-md bg-gray-200 text-sm font-medium'></div>
          </div>
        </div>
        <div className='bg-white p-4 shadow-md rounded-md flex flex-col'>
          <div className='h-40 mb-4 rounded-md bg-gray-200'></div>
          <div className='p-2'>
            <div className='ml-0 h-8 w-full rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-6 w-1/2 rounded-md bg-gray-200 text-sm font-medium'></div>
            <div className='mt-2 h-4 w-3/4 rounded-md bg-gray-200 text-sm font-medium'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CourseSkeleton() {
  return (
    <div
      className={`${shimmer} max-w-6xl mx-auto  rounded-lg p-6 m-4 relative overflow-hidden bg-gray-100 shadow-sm`}>
      <div className='flex flex-col md:flex-row'>
        <div className='h-40 mb-4 rounded-md bg-gray-200 md:w-1/3 pr-6'></div>
        <div className='md:w-2/3 px-2'>
          <h2 className='h-14 w-3/4 rounded-md bg-gray-200 text-sm font-medium'></h2>
          <p className='mt-2 h-6 w-1/2 rounded-md bg-gray-200 text-sm font-medium'></p>
          <p className='mt-2 h-6 w-1/2 rounded-md bg-gray-200 text-sm font-medium'></p>
          <p className='mt-2 h-6 w-1/2 rounded-md bg-gray-200 text-sm font-medium'></p>
        </div>
      </div>
      <div className='mt-4'>
        <p className='mt-2 h-80 w-full rounded-md bg-gray-200 text-sm font-medium' />
      </div>
    </div>
  );
}
