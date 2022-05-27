import react, { useEffect, useRef, useState}  from 'react'
import React from 'react';

function FadeAnimation(props) {
    

    const [transitionStep, setTransitionStep] = useState(1);  
    const [windowHeight, setWindowHeight] = useState(window.outerHeight);  
    const currentOpacity = useRef(0);
    const animatedBock = useRef();

    useEffect(()=>{
        // animatedBock.current.style = 
        console.log(props.children)
        animatedBock.current.style.opacity = '0%'
        window.addEventListener('scroll', fadeAnimation);
    })
    
    function fadeAnimation() {
        let distanseToWindowTop = animatedBock.current.getBoundingClientRect().top
        if(currentOpacity.current == 0 && distanseToWindowTop < windowHeight/2) {
            console.log('lda')
            let animation = setInterval(()=>{
                currentOpacity.current = currentOpacity.current + transitionStep;
                animatedBock.current.style.opacity = currentOpacity.current + '%';
                if(currentOpacity.current >= 100) {
                    clearInterval(animation);
                }
            },props.delay)
        }
    }

    return (
        <div ref = {animatedBock} className = 'animated'>
            {props.children}
     
        </div>
    );
}

export default FadeAnimation;
