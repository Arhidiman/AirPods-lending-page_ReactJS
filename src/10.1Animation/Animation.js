import react, { useEffect, useRef, useState}  from 'react'

function Animation(props) {
    
    const sideMenu = useRef();
    const closeButton = useRef();
    const sideMenuInterval = useRef(null);
    const transition = useRef(0);
    const [transitionStep, setTransitionStep] = useState(15);  

   
    const currentTransition = useRef(0);
    const isAnimatingLeft = useRef(false);
    const childrenAnimation = useRef(null);
    const animatedBock = useRef();



    useEffect(()=>{

    })

    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }
    
    function animateChildren() {
        console.log(props);
        isAnimatingLeft.current = !isAnimatingLeft.current;
        currentTransition.current = 0;
        childrenAnimation.current = setInterval(()=>{
            if(isAnimatingLeft.current == true) {
                currentTransition.current = currentTransition.current + transitionStep;
                animatedBock.current.style.marginLeft = (getPixelsNumber(getComputedStyle(animatedBock.current).marginLeft) - transitionStep) + 'px';
                if(currentTransition.current >= (props.transitionValue - transitionStep)) {
                    clearInterval(childrenAnimation.current);
                    isAnimatingLeft.current = false;
                }
            }

        },props.delay)
    }


    return (
        <div ref = {animatedBock} className = 'animated' onClick={animateChildren}>
           {props.children}

        </div>
    );
}

export default Animation;
