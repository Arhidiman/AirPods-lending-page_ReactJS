import react, { useEffect, useRef, useState}  from 'react'

function FadeAnimation(props) {
    

    const [transitionStep, setTransitionStep] = useState(1);  
    const [windowHeight, setWindowHeight] = useState(window.outerHeight);  
    const currentOpacity = useRef(0);
    const isAnimating = useRef(false);
    const animation = useRef(null);
    const animatedBock = useRef();

    useEffect(()=>{
        animatedBock.current.style.opacity = '0%'
        console.log(window.outerHeight);

        // animatedBock.current.onscroll = fadeAnimation;
        fadeAnimation();
        // if(animatedBock.current.getBoundingClientRect().top <= getPerCentsNumber(getComputedStyle(window).height)) {
        //     fadeAnimation();
        // }

        console.log(animatedBock.current.getBoundingClientRect().top);

    })

    function getPerCentsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 1)));
    }
    
    function fadeAnimation() {
        let distanseToWindowTop = animatedBock.current.getBoundingClientRect().top
        if(currentOpacity.current == 0 && distanseToWindowTop < windowHeight/3) {
            isAnimating.current = !isAnimating.current;
            animation.current = setInterval(()=>{
                if(isAnimating.current == true) {
                    currentOpacity.current = currentOpacity.current + transitionStep;
                    animatedBock.current.style.opacity = currentOpacity.current + '%';
                    if(currentOpacity.current == 100) {
                        clearInterval(animation.current);
                        isAnimating.current = false;
                    }
                }
            },props.delay)
        }
    }


    return (
        <div ref = {animatedBock} className = 'animated' style={{display: 'grid'}}>
           {props.children}
        </div>
    );
}

export default FadeAnimation;
