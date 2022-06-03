
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BasicMenu() {
    const [anchorEL,setAnchorEl] = useState(null)

    const handleOpenMenu=(e)=>{
        
        setAnchorEl (e.currentTarget)
    }
    const handleCloseMenu=()=>{
        setAnchorEl (null)
    }

    const category = ["remera","muñeco","pantalones"]
  
  return (
    <>
        <Button variant='contained' onClick={handleOpenMenu} aria-controls='menu'>
            Productos
        </Button>

        <Menu id='menu' onClose={handleCloseMenu} anchorEl={anchorEL} open={Boolean(anchorEL)}>

        {category.map( (cat)=>{
            return <MenuItem onClick={handleCloseMenu}><Link to={`/producto/${cat}`}>{cat}</Link></MenuItem>
        })}
            
        </Menu>
    </>
  );
}