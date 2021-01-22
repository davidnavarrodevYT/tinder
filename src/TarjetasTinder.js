import React, {useState, useEffect} from 'react'
import './TarjetasTinder.css'
import TarjetaPersona from 'react-tinder-card'
import database from './firebase'
function TarjetasTinder() {
    
  

    const [persona,setPersona] = useState([]);

    useEffect(() => {
        
        const desuscribirse = database.collection('personas').onSnapshot(snapshot => (
            setPersona(snapshot.docs.map( doc => doc.data()))
        ));

        return () => {
            desuscribirse();
        }

    }, [])
    
    return (
        <div className="tarjetasTinder">
            <div className="tarjetasTinder__contenedor">
                {persona.map(persona => (

                    <TarjetaPersona
                        className="swipe"
                        key={persona.name}
                        preventSwipe={['up','down']}
                    >
                        <div 
                            className="tarjeta"
                            style={{backgroundImage:`url(${persona.url})`}}
                        >
                            <h2>{persona.nombre}</h2>
                        </div>

                    </TarjetaPersona>
                        


                ))}
            </div>
        </div>
    )
}

export default TarjetasTinder
