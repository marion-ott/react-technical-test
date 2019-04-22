import React from 'react'
import './styles.scss'
import Button from '../../global/button'
import Video from '../../global/video'

class Info extends React.Component {
    render() {
        const { title, text, list, icon, video, cta } = this.props.data
        return(
            <div className="Info">
                <div className="Info__side">
                    <img className="Info__side__img" src="/assets/img/angular-logo.png" alt=""/>
                </div>
                <div className="Info__content">
                    <div className="Info__content__video">
                        <div className="Info__content__video--overlay"></div>
                        <div className="Info__content__video__container">
                            <Video src={video}/>
                        </div>
                    </div>
                    <div className="Info__content__text">
                        <h2 className="Info__content__text__title" dangerouslySetInnerHTML={{__html: title}}></h2>
                        <p className="Info__content__text__paragraph">{text}</p>
                        <ul className="Info__content__text__list">
                            {
                                list.map((item, key) => (
                                    <li key={key} className="Info__content__text__list__item">
                                        <img src={`${process.env.PUBLIC_URL}${icon}`} alt=""/>
                                        <span>{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <Button label={cta.label} route={cta.route} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Info