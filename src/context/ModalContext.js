import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const ModalContext = createContext();


const ModalProvider = (props) => {

    const [idReceta, setIdReceta] = useState(null);
    const [informacion, setReceta] = useState({})

    useEffect(()=>{

        const consultarReceta = async () =>{

            if(!idReceta)return

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`

            const response = await axios.get(url); 
            setReceta(response.data.drinks[0])
        }
        consultarReceta();

    }, [idReceta])

    return(
        <ModalContext.Provider
            value={{
                informacion,
                setIdReceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider