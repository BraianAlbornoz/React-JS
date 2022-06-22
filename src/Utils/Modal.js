
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { useState } from 'react';




export default function BasicModal() {
  //Funciones del Modal  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //Funciones para FireBase
  const [formValue , setFormValue] = useState({
    name:'',
    phone:'',
    email:'',
  })

  //Prevenimos el Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Prevent: " ,formValue )
  }

  const hadleChange = (e) => {
    setFormValue({ [e.target.name] : e.target.value })
  }

  

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Completar la compra</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <form className="form-contact" onSubmit={handleSubmit} >
                    <TextField 
                        id="outlined-basic" 
                        name="name"
                        label="Nombre y Apellido" 
                        variant="outlined"
                        value = {formValue.name}
                        onChange={hadleChange} 
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="phone"
                        label="Telefono" 
                        variant="outlined"
                        value = {formValue.phone}
                        onChange={hadleChange} 
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="email"
                        label="Mail"
                        variant="outlined" 
                        value = {formValue.email}
                        onChange={hadleChange} 
                    />
                    <Button type='submit' variant="contained">Enviar</Button>
                </form>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
