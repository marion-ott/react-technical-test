import React from 'react'
import './global.scss'
import { Link } from 'react-router-dom'

class Button extends React.Component {
    render() {
        return(
            <Link style={this.props.animated && {opacity: 0}} className="Button" to={this.props.route}>{this.props.label}</Link>
        )
    }
}

export default Button