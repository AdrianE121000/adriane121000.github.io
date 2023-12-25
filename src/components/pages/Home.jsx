import Cookies from '../utils/Cookies';
import Footer from '../utils/Footer';
import SEO from '@americanexpress/react-seo';

const Home = () => {
  const programmingLanguages = [
    'JavaScript',
    'Python',
    'Java',
    'Ruby',
    'C++',
    // Agrega los lenguajes adicionales que desees mostrar
  ];

  function handleLanguageClick(lang) {
    alert(`Te manda para los cursos de: ${lang}`);
  }

  const areasOfInterest = [
    { title: 'Negocio', slug: 'negocio' },
    { title: 'Diseño', slug: 'diseño' },
    { title: 'Marketing', slug: 'marketing' },
    { title: 'Desarrollo', slug: 'desarrollo' },
    // Agrega las áreas adicionales de interés que desees mostrar
  ];

  // Función para manejar la navegación a la sección de cursos de un área específica
  const handleAreaClick = (slug) => {
    // Lógica para navegar a la sección de cursos del área seleccionada
    // Utiliza react-router-dom u otra solución de enrutamiento
    alert(`Te manda para los cursos de: ${slug}`);
  };

  return (
    <>
      <SEO
        title='learnDeals'
        description='A web site for free online courses.'
        siteUrl='https://adriane121000.github.io/learnDeals'
        image={{
          src: 'https://raw.githubusercontent.com/adriane121000/adriane121000/master/resources/learnDeals.jpg',
        }}
      />
      <div>
        {/* Sección de introducción o encabezado */}
        <section className='bg-gray-100 p-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-bold mb-4'>
              Descubre tu próximo curso online
            </h1>
            <p className='text-lg mb-8'>
              Explora una variedad de cursos para potenciar tu aprendizaje.
            </p>
            {/* Formulario de búsqueda o componente de filtrado */}
            {/* Aquí puedes incluir un formulario de búsqueda o el componente de filtrado que mencionaste en tu navBar */}
          </div>
        </section>

        {/* Sección de cursos de programación */}
        <section className='bg-white py-12'>
          <div className='max-w-7xl mx-auto px-4'>
            <h2 className='text-2xl font-bold mb-4'>
              Explora por lenguaje de programación
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {programmingLanguages.map((language, index) => (
                <div
                  key={index}
                  className='border text-center border-gray-200 p-4 cursor-pointer'
                  onClick={() => handleLanguageClick(language)}>
                  <h3 className='text-lg font-bold'>{language}</h3>
                  {/* Puedes agregar más información sobre cada lenguaje si lo deseas */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de áreas de interés */}
        <section className='bg-white py-12'>
          <div className='max-w-7xl mx-auto px-4'>
            <h2 className='text-2xl font-bold mb-4'>
              Explora por área de interés
            </h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {areasOfInterest.map((area, index) => (
                <div
                  key={index}
                  className='border border-gray-200 p-4 cursor-pointer'
                  onClick={() => handleAreaClick(area.slug)}>
                  <h3 className='text-lg font-bold'>{area.title}</h3>
                  {/* Puedes agregar más información sobre cada área si lo deseas */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de llamado a la acción */}
        <section className='bg-gray-100 py-12'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Comienza tu viaje de aprendizaje hoy mismo
            </h2>
            <p className='text-lg mb-8'>
              Encuentra el curso perfecto para ti y lleva tus habilidades al
              siguiente nivel.
            </p>
            <button className='bg-gray-900 text-white rounded-md w-52 border text-center border-gray-200 p-4 cursor-pointer'>
              Start
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
