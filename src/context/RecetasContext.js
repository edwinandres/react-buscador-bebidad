import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    console.log("estas son las props en recetascontext" ,props)


    const [recetas, guardarReceta] = useState([])
    const [busqueda, buscarRecetas] = useState({
        nombre:'',
        categoria:''
    })
    const [consultar, guardarConsulta] = useState(false)

    const {nombre, categoria} = busqueda;

    useEffect(() => {

        if(consultar){
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const response = await axios.get(url)
                guardarReceta(response.data.drinks)
            }
    
            obtenerRecetas();
        }
        
        

    }, [busqueda])

    return(
        <RecetasContext.Provider
            value={{
                recetas,
                buscarRecetas,
                guardarConsulta
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    )

}

export default RecetasProvider;