import react, { useEffect, useRef, useState}  from 'react'

function Animation(props) {
    
    const sideMenu = useRef();
    const closeButton = useRef();
    const sideMenuInterval = useRef(null);
    const transition = useRef(0);
    const [transitionStep, setTransitionStep] = useState(15);  

   
    const currentTransition = useRef(0);
    const isAnimatingLeft = useRef(false);
    const isAnimatingRight = useRef(false);
    const childrenAnimation = useRef(null);
    // const isActive = useRef(false);
    const childrenWidth = useRef();
    const animatedBock = useRef();



    useEffect(()=>{
        // props.setSideMenu(sideMenu.current);
        // props.setSideMenuBackground(sideMenuBackground.current);
        // props.setCloseButton(closeButton.current)
        // requestAnimationFrame()

        


        // window.onclick = ()=>{
        //     if(isAnimatingLeft.current == true && currentTransition.current !== 0) {
        //         console.log(isAnimatingRight);
        //         isAnimatingLeft.current = !isAnimatingLeft.current ;
        //         isAnimatingRight.current = !isAnimatingRight.current;
        //         console.log(isAnimatingRight);
        //     }
        // }
        // if(props.closeButton !== undefined) {
        //     props.closeButton.onclick = close;
        // }

        // if((props.sideBackground !== undefined) && ( isActive.current = true)) {
        //     props.sideBackground.onclick = close;
        // }
    })

    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }
    
    function animateChildren() {
        console.log(props);
        // animatedBock.current.style.display = 'block';
        isAnimatingLeft.current = !isAnimatingLeft.current;
        // childrenWidth.current = getPixelsNumber(getComputedStyle(animatedBock.current).width)
        currentTransition.current = 0;
        childrenAnimation.current = setInterval(()=>{
            if(isAnimatingLeft.current == true) {
                currentTransition.current = currentTransition.current + transitionStep;
                animatedBock.current.style.marginLeft = (getPixelsNumber(getComputedStyle(animatedBock.current).marginLeft) - transitionStep) + 'px';
                if(currentTransition.current >= (props.transitionValue - transitionStep)) {
                    clearInterval(childrenAnimation.current);
                    isAnimatingLeft.current = false;
                    // isActive.current = true;
                }
            }
            // if(isMenuAnimatingRight.current == true) {
            //     currentTransition.current = currentTransition.current - transitionStep;
            //     animatedBock.current.style.marginLeft = (getPixelsNumber(getComputedStyle(animatedBock.current).marginLeft) + transitionStep) + 'px';
            //     if(currentTransition.current <= 0) {
            //         clearInterval(childrenAnimation.current);
            //         isAnimatingRight.current = false;
            //         isChildrenActive.current = false;
            //     }
            // }
        },props.delay)
    }

    // function closeMenu() {
    //     isMenuAnimatingRight.current = true;
    //     childrenAnimation.current = setInterval(()=>{
    //         if( isMenuActive.current = true) {
    //             currentTransition.current = currentTransition.current - transitionStep;
    //             props.sideMenu.style.marginLeft = (getPixelsNumber(getComputedStyle(props.sideMenu).marginLeft) + transitionStep) + 'px';
    //             if(currentTransition.current <= 0) {
    //                 clearInterval(childrenAnimation.current);
    //                 isMenuAnimatingRight.current = false;
    //                 isMenuActive.current = false;
    //             }
    //         }
    //     },15)
    // }


    return (
        <div ref = {animatedBock} className = 'animated' onClick={animateChildren}>
           {props.children}

        </div>
    );
}

export default Animation;
