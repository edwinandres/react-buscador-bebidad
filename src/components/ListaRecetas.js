import React from 'react'
import { RecetasContext } from '../context/RecetasContext'
import { useContext } from 'react'
import Receta from './Receta'

const ListaRecetas = () => {

    //extraer las recetas

    const { recetas } = useContext(RecetasContext)
    console.log("olaaaaaaaaaaaaaaaa",recetas)
    return (
        <div className='row mt-5'>
            {recetas.map(receta=>(
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
            
        </div>
    )
}

export default ListaRecetas
