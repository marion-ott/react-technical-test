import React from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import Button from '../../global/button'
import Video from '../../global/video'
import { textAnimation } from '../../global/helpers'

class Hero extends React.Component {
    
    componentDidMount() {
        textAnimation(this.title, this.subtitle, ReactDOM.findDOMNode(this.cta))
    }

    render() {
        const { title, text, video, cta } = this.props.data
        
        return(
            <div className="Hero">
                <div className="Hero__background">
                    <div className="Hero__background--overlay"></div>
                    <div className="Hero__background__videoContainer">
                        <Video src={video} />
                    </div>
                </div>
                <div className="Hero__text">
                    <h1 ref={el => this.title = el} className="Hero__text__title">{title}</h1>
                    <p ref={el => this.subtitle = el} className="Hero__text__subtitle">{text}</p>
                    <Button animated={true} ref={el => this.cta = el} label={cta.label} route={cta.route} />
                </div>
            </div>
        )
    }
}

export default Hero