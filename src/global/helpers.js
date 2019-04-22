import ReactDOM from 'react-dom'
import { TweenLite, Power2 } from 'gsap'

export function textAnimation(title, subtitle, cta = null) {
    TweenLite.to(subtitle,0.5,{ease: Power2.easeOut, y: -10, opacity: 1, delay: 0.5})
    TweenLite.to(title,0.5,{ease: Power2.easeOut, y: -20, opacity: 1, delay: 0.9})
    if(cta) {
        TweenLite.to(cta,0.3,{ease: Power2.easeOut, opacity: 1, delay: 1.1})
    }
}

export function cascadeAppear(array) {
    let timing = 0.2    
    array.map(item => {
        TweenLite.to(ReactDOM.findDOMNode(item),0.3,{ease: Power2.easeOut, y: -5, opacity: 1, delay: timing})
        timing += 0.2
        return true
    })
}

let breakpointMobile = 767
export function screenIsMobile() {
    const winWidth = window.innerWidth
    const isMobile = winWidth <= breakpointMobile ? true : false
    return isMobile
} 