import React from 'react'
import './Styles/footer.css'
import linkedIn from '../assets/linkedin.png'

export const Footer = () => {
  return (
    <div className='footerBox'>
      <div className="author">
        <span className='name'>
          Ignacio Nicolás Neira. 2022
        </span>
      </div>
      <div className="socials">
        <div className="container icons">
          <img src={linkedIn} alt="" />
          <img src={linkedIn} alt="" />
          <img src={linkedIn} alt="" />
        </div>
      </div>
    </div>
  )
}
