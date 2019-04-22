import React from 'react'
import './styles.scss'

const Social = () => (
    <div className="Social container">
        <div className="Social__container">
            <span className="Social__copyright">© Copyright 2017 altima</span>
            <div className="Social__icons">
                <a rel="noopener noreferrer" href="https://twitter.com/altima" target="_blank">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/icons/twitter.png`} alt=""/>
                </a>
                <a rel="noopener noreferrer" href="https://fr-fr.facebook.com/altima/" target="_blank">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/icons/facebook.png`} alt=""/>
                </a>
                <a rel="noopener noreferrer" href="/" target="_blank">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/icons/pinterest.png`} alt=""/>
                </a>
                <a rel="noopener noreferrer" href="/" target="_blank">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/icons/google.png`} alt=""/>
                </a>
            </div>
        </div>
    </div>
)

export default Social