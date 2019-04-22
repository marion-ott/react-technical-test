import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import { TweenLite, Power2 } from 'gsap'


class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.startAnimation = this.startAnimation.bind(this)
        this.getWindowHeight = this.getWindowHeight.bind(this)
        this.windowHeight = window.innerHeight
    }

    componentDidMount() {
        this.title.style.transform = "scale(0.9)"
        window.addEventListener('scroll', this.startAnimation)
        window.addEventListener('resize', this.getWindowHeight)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.startAnimation)
        window.removeEventListener('resize', this.getWindowHeight)
    }

    startAnimation = () => {        
        if(this.contact.getBoundingClientRect().top < this.windowHeight) {
            TweenLite.to(this.contact,1,{ease: Power2.easeOut, opacity: 1, delay: 0.5})
            TweenLite.to(this.title,0.5,{ease: Power2.easeOut, scale: 1, delay: 0.5})
        }
    }

    getWindowHeight = () => {
        this.windowHeight = window.innerHeight
    }

    render() {
        const { title, cta } = this.props.data
        return(
            <div ref={el => this.contact = el} className="Contact">
                <h4 ref={el => this.title = el} className="Contact__title">{title}</h4>
                <Link className="Contact__link" to={cta.route}>{cta.label}</Link>
            </div>
        )
    }
}

export default Contact