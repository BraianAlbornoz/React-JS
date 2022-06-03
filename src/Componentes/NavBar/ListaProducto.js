import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ListaProducto =()=> {

    const [anchorEL,setAnchorEl] = useState(null)

    const handleOpenMenu=(e)=>{
        setAnchorEl (e.currentTarget)
    }
    const handleCloseMenu=()=>{
        setAnchorEl (null)
    }


  
  return (
    <>
        <Button variant='contained' onClick={handleOpenMenu} aria-controls='menu'>
            Productos
        </Button>

        <Menu id='menu' onClose={handleCloseMenu} anchorEl={anchorEL} open={Boolean(anchorEL)} >

        <MenuItem onClick={handleCloseMenu}><Link to={`/producto/remera`}> Remera </Link></MenuItem>
        <MenuItem onClick={handleCloseMenu}><Link to={`/producto/muñeco`}> Muñeco </Link></MenuItem>
        <MenuItem onClick={handleCloseMenu}><Link to={`/producto/manga`}>  Mangas </Link></MenuItem>
        
            
        </Menu>
    </>
  )
}

export default ListaProducto