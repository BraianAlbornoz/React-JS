import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
//Componentes
import Cartwidget from './Cartwidget';
import ListaProducto from './ListaProducto';



export default function ButtonAppBar() {
 
  return (
    <>
    <AppBar className='AppBar'>

      <Toolbar className='NavBar'>

        <div className='ContainerLogo'>
          <Link to="/"> <img src='../favicon.ico' alt='AnimeStore'/> </Link>
        </div>

        <div className='ContainerButton'>
            
          <Button variant="contained"> <Link to="/">Home</Link></Button>
          <ListaProducto />
          <Button variant="contained"><Link to="/Contacto">Contacto</Link></Button>

        </div>
          

        <Cartwidget/>

      </Toolbar>
    </AppBar>
    </>
    
  );
}
