import react, { useEffect, useRef, useState}  from 'react'

function ScrollingNavigation(props) {
    

    const transition = useRef(0);
    const currentTransition = useRef(0);
    const isScrollTo = useRef(true);
    const [transitionStep, setTransitionStep] = useState(30);
    const delay = 5;

    function runTransition(e) {
        e.preventDefault();
        isScrollTo.current = true;
        console.log(props.children.props.name)
        transition.current = document.getElementById(props.scrollToElementId).getBoundingClientRect().top;
        setInterval(()=>{
            if(isScrollTo.current == true) {
                if(transition.current > 0 && Math.abs(transition.current) > Math.abs(transitionStep)) {
                    console.log(document.documentElement.scrollTop)
                    currentTransition.current = currentTransition.current + transitionStep
                    document.documentElement.scrollTop = document.documentElement.scrollTop + transitionStep;
                    if(currentTransition.current >= transition.current) {
                        clearInterval();
                        isScrollTo.current = false;
                        currentTransition.current = 0;
                    }
                }
                if(transition.current < 0 && Math.abs(transition.current) > Math.abs(transitionStep)) {
                    currentTransition.current = currentTransition.current + transitionStep
                    document.documentElement.scrollTop = document.documentElement.scrollTop - transitionStep;
                    if(currentTransition.current >= -transition.current -transitionStep) {
                        clearInterval();
                        isScrollTo.current = false;
                        currentTransition.current = 0;
                    }
                }
            }
        },delay)
    }

    return (  
        <li onClick={runTransition}>
            {props.children}
        </li>
    );
}

export default ScrollingNavigation;
