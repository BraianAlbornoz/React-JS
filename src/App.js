import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Componentes
import ButtonAppBar from './Componentes/NavBar/NavBar';
import HomePage from './Componentes/Pages/HomePage';
import DetailPage from './Componentes/Pages/DetailPage';
import NotFoundPage from './Componentes/Pages/NotFoundPage';
import CategoryPage from './Componentes/Pages/CategoryPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <ButtonAppBar/>

        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/Detalle/:id' element={<DetailPage/>}/>
          <Route exact path='/producto/:category' element={<CategoryPage/>}/>
          <Route exact path='*' element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;



 