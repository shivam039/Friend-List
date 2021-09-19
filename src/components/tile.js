import React from "react";
import '../assets/stylesheets/tile.scss'
import star from '../assets/images/star.png'
import starSelected from '../assets/images/star-selected.png'
import bin from '../assets/images/bin.png'

const Tile = props => {
    const { addToFavourites, index, delName } = props;
    return (
        <div className='tile'>
            <div className='tile_content'>
                <span className='tile_content_head'>{props.data.name}</span>
                <span className='tile_content_body'>is your friend</span>
            </div>
            <div className='tile_icon'>
                {!props.data.favourite && <img className='tile_icon_style' src={star} alt="unfavourite" onClick={() => addToFavourites(index)} />}
                {props.data.favourite && <img className='tile_icon_style' src={starSelected} alt="favourite" onClick={() => addToFavourites(index)} />}
                <img className='tile_icon_style' src={bin} alt="trash-icon" onClick={() => delName(index)} />
            </div>
        </div>
    )

}

export default React.memo(Tile)