import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import { TweenLite, Power2, TimelineLite, Elastic } from 'gsap'
import { screenIsMobile } from '../../global/helpers'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.navigation = []
        this.menuItems = []
        this.hasScrolled = false
        this.burgerOpen = false
        this.tl = new TimelineLite({paused: true})
    }
    componentWillMount() {
        this.navigation = this.props.navigation
        const isMobile = screenIsMobile()
        this.setState({
            isMobile
        })
        window.addEventListener('resize', this.isMobile)
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.reduceHeader)
        if(this.state.isMobile) {
            this.setTimeline()
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.reduceHeader)
        window.removeEventListener('resize', this.isMobile)
    }

    setTimeline = () => {  
        this.tl.to(this.burgerOverlay,.4,{ease: Power2.easeOut, display: "block", opacity: 1},0)
               .to(this.burgerDiagTop,.2,{ease: Power2.easeOut, y: 10},0)
               .to(this.burgerDiagBottom,.2,{ease: Power2.easeOut, y: -10},0)
               .to(this.burgerHoriz,.2,{ease: Power2.easeOut, opacity:0},0)
               .to(this.burgerDiagTop,.2,{ease: Power2.easeOut, rotation: 45, backgroundColor: 'rgba(255,255,255,1)', delay: 0.2},0)
               .to(this.burgerDiagBottom,.2,{ease: Power2.easeOut, rotation: -45, backgroundColor: 'rgba(255,255,255,1)', delay: 0.2},0)
               .to(this.burgerContainer,.5,{ease: Elastic.easeOut.config(1, 1), display: "flex", width: "50%"},0.2)
        let timing = 0.1
        this.menuItems.map(item => {
            if(item !== null) {
                this.tl.add( TweenLite.to(item, 0.2, {opacity:1, x: -20}),timing)
                timing+= 0.1
                return true
            } else {
                return false
            }
        })
        
    }

    isMobile = () => {
        let isMobile = screenIsMobile()
        if(isMobile !== this.state.isMobile) {
            this.setState({
                isMobile
            }, () => isMobile ? this.setTimeline() : false)
        }
    }

    toggleBurger = () => {
        if(!this.burgerOpen) {            
            this.tl.play()
        } else {
            this.tl.reverse()
        }
        this.burgerOpen = !this.burgerOpen
    }

    reduceHeader = () => {
        let logoWidth = !this.state.isMobile ? "150px" : "35px"
        if(!this.hasScrolled) {
            TweenLite.to(this.header,0.3,{ease: Power2.easeOut, height:'55px'})
            TweenLite.to(this.logo,0.3,{ease: Power2.easeOut, width:logoWidth})
            this.hasScrolled = !this.hasScrolled
        } else if(window.scrollY === 0) {
            TweenLite.to(this.header,0.3,{ease: Power2.easeOut, height:'115px'})
            TweenLite.to(this.logo,0.3,{ease: Power2.easeOut, width:'auto'})
            this.hasScrolled = !this.hasScrolled
        }
    }

    onRouteChange = () => {
        if(this.state.isMobile && this.burgerOpen) {            
            this.tl.reverse()
        }
    }

    renderNavigation = () => {
        this.menuItems = []
        return(
            <ul className="Header__content__navigation">
                { this.navigation.map((item, key) => (
                    <li ref={el => this.menuItems.push(el)} className="Header__content__navigation__item" key={key}>
                        <Link onClick={this.onRouteChange} to={item.route}>{item.label}</Link>
                    </li>
                ))}
            </ul>
            
        )
    }

    render() {
        
        return(
            <header ref={el => this.header = el} className="Header">
                <div className="container Header__content">
                    <div className="Header__content__logo">
                        <Link onClick={this.onRouteChange} to="/">
                            <img ref={el => this.logo = el} src={!this.state.isMobile ? `${process.env.PUBLIC_URL}/assets/img/logo.png` : `${process.env.PUBLIC_URL}/assets/img/logo-mobile.png`} alt="" className="Header__content__logo__img"/>
                        </Link>
                    </div>
                    { !this.state.isMobile ? (
                        this.renderNavigation()
                    ) : (
                        <div className="Header__content__burger">
                            <div className="Header__content__burger__icon" onClick={this.toggleBurger}>
                                <div ref={el => this.burgerDiagTop = el} className="Header__content__burger__icon__lines diag"></div>
                                <div ref={el => this.burgerHoriz = el} className="Header__content__burger__icon__lines horizontal"></div>
                                <div ref={el => this.burgerDiagBottom = el} className="Header__content__burger__icon__lines diag"></div>
                            </div>
                            <div className="Header__content__burger--open">
                                <div ref={el => this.burgerOverlay = el} onClick={this.toggleBurger} className="Header__content__burger--overlay"></div>
                                <div ref={el => this.burgerContainer = el} className="Header__content__burger__container">
                                    { this.renderNavigation() }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        )
    }
}

export default Header