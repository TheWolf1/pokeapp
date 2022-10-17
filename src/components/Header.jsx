import React from 'react'
import logoPokedex from '../../public/logoPokedex.png'
const Header = () => {
  return (
    <header id='header'>
        <div className="container_image">
            <img src={logoPokedex} alt="" />
        </div>
    </header>
    
  )
}

export default Header