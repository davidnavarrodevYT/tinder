import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';

function Header({botonRetroceder}) {
    const historial = useHistory();
    return (
        <div className="header">
           
           {botonRetroceder ? (
               <IconButton onClick={() => historial.replace(botonRetroceder)} >
                    <ArrowBackIosIcon fontSize="large" className="header__botonRetroceder" />
               </IconButton>
           
               ) : (

                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
           )}
            
            <Link to="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm9bUsk5L6fBkiOUGSDv9FBOKDZfVeYHJdw&usqp=CAU" 
                className="header__logo" 
                alt="logo" />
            </Link>
           

            <Link to="/chats">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
            
            
        </div>
    )
}

export default Header
