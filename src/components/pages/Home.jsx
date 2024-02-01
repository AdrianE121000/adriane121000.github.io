import { useNavigate } from 'react-router-dom';
import Cookies from '../utils/Cookies';
import Footer from '../utils/Footer';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Home = () => {
  const navigate = useNavigate();
  const { translations } = useContext(LanguageContext);
  return (
    <>
      <div>
        <section className='p-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-4'>
              {translations.introHome}
            </h1>
            <p className='text-2xl mb-8'>{translations.titleHome}</p>
          </div>
        </section>

        <section className='py-12'>
          <div className='max-w-7xl mx-auto px-4'>
            <h2 className='text-2xl font-bold mb-4'>
              {translations.interesting}
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {translations.routes.map((element, index) => (
                <button
                  key={index}
                  className='bg-gray-950 rounded-lg text-center  py-4 shadow-md hover:shadow-violet-600 hover:text-violet-800 hover:scale-105 transition duration-300 ease-in-out'
                  onClick={() => navigate(`/cat/${element.ruta}`)}>
                  <h3 className='text-lg'>{element.nombre}</h3>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className='py-12'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              {translations.introStart}
            </h2>
            <p className='text-lg mb-8'>{translations.titleStart}</p>
            <button
              onClick={() => navigate('/courses')}
              className='bg-gray-950 rounded-lg w-52 text-center p-4 shadow-md hover:shadow-violet-600 hover:text-violet-800 hover:scale-105 transition duration-300 ease-in-out'>
              {translations.startButton}
            </button>
          </div>
        </section>
      </div>
      <Cookies />
      <Footer />
    </>
  );
};

export default Home;
