import NavBar from './components/NavBar';
import { CoursesProvider } from './context/CoursesContext';
import Rutas from './routes/Rutas';
function App() {
  return (
    <CoursesProvider>
      <NavBar />
      <Rutas />
    </CoursesProvider>
  );
}

export default App;
