import React, { useContext, useState } from 'react'
import {CategoriasContext} from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'


const Formulario = () => {

    const {categorias} = useContext(CategoriasContext)

    const { buscarRecetas, guardarConsulta } = useContext(RecetasContext)

    //state propio de formulario
    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    })


    //guardar los datos para realizar la busqueda
    const guardarBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    };


    

    return (
        <form className='col-md-12'
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsulta(true)
            }}
        
        >
            <fieldset className='text-center'>
                <legend>Busca bebidas por Categoria o Ingredientes</legend>
            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4 mt-4'>
                    <input 
                        type="text" 
                        name="nombre" 
                        className="form-control"
                        placeholder='Buscar por ingrediente'
                        onChange={guardarBusqueda}
                    />
                    
                </div>
                <div className='col-md-4 mt-4'>
                    <select
                        className='form-control'
                        name='categoria'
                        onChange={guardarBusqueda}
                    >
                        <option value="">--Selecciona Categoria--</option>
                        {categorias.map(categoria => (
                            <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                        ))}
                        
                    </select>
                    
                </div>

                <div className='col-md-4 mt-4'>
                    <input 
                        type="submit" 
                        className="btn btn-block btn-primary" 
                        value="Buscar recetas"
                    />
                    
                </div>
                
            </div>
        </form>
    )
}

export default Formulario
