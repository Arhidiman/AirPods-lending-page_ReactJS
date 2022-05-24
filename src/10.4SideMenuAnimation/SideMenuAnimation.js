import react, { Children, useEffect, useRef, useState}  from 'react'

function Header(props) {

 
    const [transitionStep, setTransitionStep] = useState(10);
    const menuLines = useRef();
    const sideMenu = useRef();
    const menuWidth = useRef(0);
    const menuCurrentTransition = useRef(0);
    const isMenuAnimatingLeft = useRef(false);
    const isMenuAnimatingRight = useRef(false);
    const menuAnimation = useRef(null);
    const isMenuActive = useRef(false);

    
    useEffect(()=>{
        console.log(props.closeButton);
        console.log(props.sideMenuButton);
        document.documentElement.onclick = ()=>{
            if(isMenuAnimatingLeft.current == true && menuCurrentTransition.current !== 0) {
                isMenuAnimatingLeft.current = !isMenuAnimatingLeft.current ;
                isMenuAnimatingRight.current = !isMenuAnimatingRight.current;
            }
        }

        if(props.sideMenuButton !== undefined) {
            props.sideMenuButton.onclick = animateSideMenu;
        }
       
        if(props.closeButton !== undefined) {
            props.closeButton.onclick = closeMenu;
        }

        if((props.sideMenuBackground !== undefined) && ( isMenuActive.current = true)) {
            props.sideMenuBackground.onclick = closeMenu;
        }
    })

    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }

    function animateSideMenu() {
        sideMenu.current.style.display = 'grid';
        props.sideMenuBackground.classList.remove('fade');
        props.sideMenuBackground.style.display = 'block';
        isMenuAnimatingLeft.current = !isMenuAnimatingLeft.current;
        menuWidth.current = getPixelsNumber(getComputedStyle(sideMenu.current).width)
        menuCurrentTransition.current = 0;
        menuAnimation.current = setInterval(()=>{
            if(isMenuAnimatingLeft.current == true) {
                menuCurrentTransition.current = menuCurrentTransition.current + transitionStep;
                sideMenu.current.style.marginLeft = (getPixelsNumber(getComputedStyle(sideMenu.current).marginLeft) - transitionStep) + 'px';
                console.log(menuCurrentTransition.current)
                if(menuCurrentTransition.current >= (menuWidth.current - transitionStep)) {
                    clearInterval(menuAnimation.current);
                    isMenuAnimatingLeft.current = false;
                    isMenuActive.current = true;
                    console.log(isMenuAnimatingLeft.current)
                }
            }
            if(isMenuAnimatingRight.current == true) {
                props.sideMenuBackground.classList.add('fade');
                menuCurrentTransition.current = menuCurrentTransition.current - transitionStep;
                sideMenu.current.style.marginLeft = (getPixelsNumber(getComputedStyle(sideMenu.current).marginLeft) + transitionStep) + 'px';
                if(menuCurrentTransition.current <= 0) {
                    clearInterval(menuAnimation.current);
                    isMenuAnimatingRight.current = false;
                    isMenuActive.current = false;
                    sideMenu.current.style.display = 'none';
                    props.sideMenuBackground.style.display = 'none';
                  
                }
            }
        },15)
    }

    function closeMenu() {
        props.sideMenuBackground.classList.add('fade');
        isMenuAnimatingRight.current = true;
        menuAnimation.current = setInterval(()=>{
            if( isMenuActive.current = true) {
                menuCurrentTransition.current = menuCurrentTransition.current - transitionStep;
                sideMenu.current.style.marginLeft = (getPixelsNumber(getComputedStyle(sideMenu.current).marginLeft) + transitionStep) + 'px';
                if(menuCurrentTransition.current <= 0) {
                    clearInterval(menuAnimation.current);
                    isMenuAnimatingRight.current = false;
                    isMenuActive.current = false;
                    sideMenu.current.style.display = 'none';
                    props.sideMenuBackground.style.display = 'none';
                }
            }
        },15)
    }

    return (
        <nav ref = {sideMenu} className = 'side-menu'> 
            {props.children}
        </nav>
    );
}

export default Header;
