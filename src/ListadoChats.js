import React from 'react'
import ChatPrevisualizacion from './ChatPrevisualizacion'
function ListadoChats() {
    return (
        <div className="listadoChats">
            <ChatPrevisualizacion 
                nombre="María"
                mensaje="Hola qué tal!?"
                timestamp="Hace 40seg"
                imgPerfil="https://cadena100-cdnmed.agilecontent.com/resources/jpg/1/6/1567083274361.jpg"
            />

            <ChatPrevisualizacion 
                nombre="Agus"
                mensaje="eres tonto"
                timestamp="Hace 1h"
                imgPerfil="https://img.freepik.com/foto-gratis/retrato-hermosa-modelo-sonriente-peinado-afro-rizos-vestido-ropa-hipster-verano-chica-despreocupada-sexy-posando-junto-pared-azul-mujer-divertida-positiva-moda_158538-15691.jpg?size=626&ext=jpg"
            />

            <ChatPrevisualizacion 
                nombre="Laura"
                mensaje="yo tambien programo!!!"
                timestamp="Hace 1 día"
                imgPerfil="https://cadenaser00.epimg.net/ser/imagenes/2019/12/10/radio_palencia/1575964596_154168_1575965180_noticia_normal.jpg"
            />

            <ChatPrevisualizacion 
                nombre="Sandra"
                mensaje="eres el de youtube??! no lo creo"
                timestamp="Hace 1 semana"
                imgPerfil="https://st.depositphotos.com/1020341/4414/i/600/depositphotos_44145175-stock-photo-portrait-of-beautiful-young-woman.jpg"
            />



        </div>
    )
}

export default ListadoChats
