import { useContext, useState } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.ico';
import Pagination from '../utils/Pagination';
import { useCourseTimeCalculate } from '../../hooks/useCourseTimeCalculate';
import Footer from '../utils/Footer';

const CoursesCard = ({ courses }) => {
  const { translations } = useContext(LanguageContext);
  const { calculateCourseTime } = useCourseTimeCalculate();
  const navigate = useNavigate();

  const totalProducts = courses.length;
  const [productsForPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndext = currentPage * productsForPage;
  const firstIndex = lastIndext - productsForPage;

  return (
    <>
      <div className='container mx-auto px-4 mt-5'>
        <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {courses
            .map((curso, index) => (
              <div
                className='bg-white p-4 shadow-md rounded-md flex flex-col cursor-pointer hover:shadow-2xl'
                key={index}
                onClick={() => navigate(`/course/${curso.key}`)}>
                <div>
                  <img
                    className='w-full h-40 object-cover rounded-t-md mb-4'
                    src={logo}
                    alt='imageCourse'
                  />
                </div>
                <div className='p-2'>
                  <div className='text-lg font-bold mb-2 line-clamp-3'>
                    {curso.name}
                  </div>
                  <div className='text-blue-600 uppercase font-semibold text-sm hover:cursor-pointer'>
                    {curso.category}
                  </div>
                  <div className='text-sm py-1'>
                    {translations.fecha}:{' '}
                    {calculateCourseTime(curso.last_update_date)}
                  </div>
                </div>
              </div>
            ))
            .slice(firstIndex, lastIndext)}
        </div>
        <div className='flex flex-col md:hidden gap-2'>
          {courses
            .map((curso, index) => (
              <div
                className='bg-white pt-2 pl-2 pb-2 shadow-md rounded-md flex flex-row cursor-pointer hover:shadow-2xl'
                key={index}
                onClick={() => navigate(`/course/${curso.key}`)}>
                <div className='w-1/3'>
                  <img
                    className='w-full h-full  rounded-t-md '
                    src={logo}
                    alt='imageCourse'
                  />
                </div>
                <div className='pl-2 w-2/3'>
                  <div className='text-md font-bold mb-1 line-clamp-3'>
                    {curso.name}
                  </div>
                  <div className='text-blue-600 uppercase font-semibold text-sm hover:cursor-pointer'>
                    {curso.category}
                  </div>
                  <div className='text-sm py-0'>
                    {translations.fecha}:{' '}
                    {calculateCourseTime(curso.last_update_date)}
                  </div>
                </div>
              </div>
            ))
            .slice(firstIndex, lastIndext)}
        </div>
        <Pagination
          productsForPage={productsForPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
        />
      </div>
      <Footer />
    </>
  );
};

export default CoursesCard;