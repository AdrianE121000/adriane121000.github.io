import NavBar from './components/NavBar';
import { CoursesProvider } from './context/CoursesContext';
import Rutas from './routes/Rutas';
function App() {
  return (
    <CoursesProvider>
      <div className='font-roboto'>
        <NavBar />
        <Rutas />
      </div>
    </CoursesProvider>
  );
}

export default App;
