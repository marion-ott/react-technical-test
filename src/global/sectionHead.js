import React from 'react'
import './global.scss'
import { textAnimation } from './helpers'

class SectionHead extends React.Component {
    constructor(props) {
        super(props)
        this.startAnimation = this.startAnimation.bind(this)
        this.getWindowHeight = this.getWindowHeight.bind(this)
        this.windowHeight = window.innerHeight
    }
    
    componentDidMount() {
        this.startAnimation()
        window.addEventListener('scroll', this.startAnimation)
        window.addEventListener('resize', this.getWindowHeight)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.startAnimation)
        window.removeEventListener('resize', this.getWindowHeight)
    }

    startAnimation = () => {
        if(this.container.getBoundingClientRect().top + 20 < this.windowHeight) {
            textAnimation(this.title, this.subtitle)
        }
    }

    getWindowHeight = () => {
        this.windowHeight = window.innerHeight
    }

    render() {
        return(
            <div ref={el => this.container = el} className="SectionHead">
                <h2 ref={el => this.title = el} className="SectionHead__title">{this.props.title}</h2>
                <p ref={el => this.subtitle = el} className="SectionHead__subtitle">{this.props.subtitle}</p>
            </div>
        )
    }
}


export default SectionHead