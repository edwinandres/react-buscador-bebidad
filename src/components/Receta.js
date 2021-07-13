import React, { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Receta = ({receta}) => {

    //configuracion del modal de material-ui
    const [modalSytle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)
    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const { informacion, setIdReceta, setReceta } = useContext(ModalContext);

    const mostrarInformacion = informacion => {
        let ingredientes = [];
        for(let i = 1 ; i < 16; i++){
            if(informacion[`strIngredient${i}`]){
                ingredientes.push(
                    <li>{informacion[`strIngredient${i}`]}{informacion[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredientes;
    }

    return (       
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <h2 className='card-header'>{receta.strDrink}</h2>
                <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`}/>
                <div className='card-body'>
                    <button 
                        type="button" 
                        className='btn btn-block btn-primary'
                        onClick={e =>{
                            setIdReceta(receta.idDrink);
                            handleOpen()
                        }}
                    > Ver receta</button>

                    <Modal
                        open={open}
                        onClose={e=>{
                            handleClose();
                            setIdReceta(null)
                            setReceta({});
                        }}
                    >
                        <div style={modalSytle} className={classes.paper}>
                            <h2>{informacion.strDrink}</h2>
                            <h3 className='mt-4'>Intrucciones</h3>
                            <p>{informacion.strInstructions}</p>
                            <img src={informacion.strDrinkThumb} alt="" className='img-fluid my-4' />
                            <h2>Ingredientes</h2>
                            <ul>
                                {mostrarInformacion(informacion)}
                            </ul>
                        </div>
                    </Modal>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Receta
