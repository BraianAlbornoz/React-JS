import { Container } from "@mui/system"
//Componentes
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const HomePage = () =>{
    return(
        <Container className='general-container'>
          <ItemListContainer title={'Producto Recomendado'} />
        </Container>
    )
}

export default HomePage