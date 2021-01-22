import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatPrevisualizacion.css'
import { Link, useHistory } from 'react-router-dom'

function ChatPrevisualizacion({nombre, mensaje, timestamp, imgPerfil}) {
    return (
        <Link to={`/chat/${nombre}`}>
        <div className="chatPrevisualizacion">
            <Avatar className="chatPrevisualizacion__imagen" alt={nombre} src={imgPerfil} />
            <div className="chatPrevisualizacion__detalles">
                <h2>{nombre}</h2>
                <p>{mensaje}</p>
            </div>
            <p className="chatPrevisualizacion__timestamp">{timestamp}</p>
        </div>
        </Link>
    )
}

export default ChatPrevisualizacion
