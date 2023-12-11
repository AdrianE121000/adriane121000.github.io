import NavBar from './components/NavBar';
import { CoursesProvider } from './context/CoursesContext';
import Rutas from './routes/Rutas';
function App() {
  return (
    <CoursesProvider>
      <div className='font-roboto'>
        <NavBar />
        <section className='mt-16'>
          <Rutas />
        </section>
      </div>
    </CoursesProvider>
  );
}

export default App;
