import React from 'react'
import './BotonesSwipe.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

function BotonesSwipe() {
    return (
        <div className="botonesSwipe">
            <IconButton className="botonesSwipe__replay">
                <ReplayIcon font="large"/>
            </IconButton>

            <IconButton className="botonesSwipe__close">
                <CloseIcon font="large"/>
            </IconButton>

            <IconButton className="botonesSwipe__star">
                <StarIcon font="large"/>
            </IconButton>

            <IconButton className="botonesSwipe__fav">
                <FavoriteIcon font="large"/>
            </IconButton>

            <IconButton className="botonesSwipe__flash">
                <FlashOnIcon font="large"/>
            </IconButton>
            

        </div>
    )
}

export default BotonesSwipe
