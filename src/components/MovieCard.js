import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  const [isHovered, setIsHovered] = useState(false);

    if(posterPath===null) return;
    
   const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Enlarge on hover
    transition: 'transform 0.3s ease-in-out', // Smooth transition effect
  };

  return (
    <div className='w-36 md:w-48 pr-4' onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
        <img src={IMG_CDN_URL + posterPath} 
        style={imageStyle}
        alt="Movie-Card" />
    </div>
  )
}

export default MovieCard