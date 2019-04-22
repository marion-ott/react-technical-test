import React from 'react'
import './styles.scss'

class UtilityItem extends React.Component {
    render() {
        return(
            <div className="UtilityItem">
                <div className="UtilityItem__icon">
                    <img src={this.props.icon} alt="" className="UtilityItem__icon__img"/>
                </div>
                <h3 className="UtilityItem__title">{this.props.title}</h3>
                <p>{this.props.paragraph}</p>
            </div>
        )
    }
} 

export default UtilityItem