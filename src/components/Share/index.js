import React from 'react'
import './styles.scss'

class Share extends React.Component {
    render() {
        return(
            <div id={this.props.id} onClick={(event) => this.props.closePopin(event)} className="Share">
                <div className="Share__popin">
                    <span id={this.props.closeId} className="Share__popin__close" onClick={(event) => this.props.closePopin(event)}>X</span>
                    <div>
                        <p className="Share__popin__title">Partager</p>
                        <div className="Share__popin__details">
                            <div className="Share__popin__details__thumbnail" style={{ backgroundImage: `url(${this.props.image})` }}></div>
                            <div className="Share__popin__details__text">
                                <h3>{this.props.title}</h3>
                                <p>{this.props.subtitle}</p>
                            </div>
                        </div>
                    </div>
                    <form className="Share__popin__form">
                        <label htmlFor="email">Destinataire(s)</label>
                        <div>
                            <input className="Share__popin__form__input" type="text" name="email" placeholder="front-end@altima-agency.com"/>
                            <input className="Share__popin__form__submit" type="submit" value="Envoyer"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Share