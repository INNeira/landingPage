import React from 'react'
import './Styles/header.css'

export const Header = () => {
    return (
        <div className="box">
            <div className="info">
                <span className='fullName'>
                    <i>Ignacio Neira</i>
                </span>
                <span className='position'>
                    FrontEnd Developer
                </span>
                <span className='techs'>
                    Javascript - Svelte - React.js
                </span>
            </div>

            <div className="buttonFather">
                <button>
                    Flecha pa abajo
                </button>
            </div>
        </div>
    )
}
