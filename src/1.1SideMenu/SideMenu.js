import react, { useEffect, useRef, useState}  from 'react'
import './SideMenuStyle.css';
import logoInstagram from '../images/logo-instagram-black.png'
import logoVk from '../images/logo-vk-black.png'
import logoTelegram from '../images/logo-telegram-black.png'



function SideMenu(props) {
    
    const sideMenu = useRef();
    const sideMenuBackground = useRef();
    const closeButton = useRef();
    const sideMenuInterval = useRef(null);
    const transition = useRef(0);
    const currentTransition = useRef(0);
    const isScrollTo = useRef(true);
    const [transitionStep, setTransitionStep] = useState(15);

    useEffect(()=>{
        props.setSideMenu(sideMenu.current);
        props.setSideMenuBackground(sideMenuBackground.current);
        props.setCloseButton(closeButton.current)
        // requestAnimationFrame()
    })

    function getPixelsNumber(pixels) {
        return(Number(pixels.substring(0, pixels.length - 2)));
    }
    
    function runTransition(e) {
        isScrollTo.current = true;
        transition.current = document.getElementById(e.target.name).getBoundingClientRect().top;
        setInterval(()=>{
            if(isScrollTo.current == true) {
                currentTransition.current = currentTransition.current + transitionStep
                document.documentElement.scrollTop = currentTransition.current;
                console.log(transition.current);
                console.log(currentTransition.current);
                if(currentTransition.current >= transition.current) {
                    clearInterval();
                    isScrollTo.current = false;
                    currentTransition.current = 0;
                }
            }
        },5)
    }


    return (
        
        <div >
            <div ref = {sideMenuBackground} className='side-navigation-background'></div>
            <nav ref = {sideMenu} className = 'side-menu'>
                <button ref = {closeButton} className = 'close-button side-menu-element'>X</button>
                <ul className = 'side-navigation side-menu-element'>
                    <li><a href='#'>Главная</a></li>
                    <li><a href='#' name='SecondSection' onClick={runTransition}>Преимущества</a></li>
                    <li><a href='#' name='SixthSection' onClick={runTransition}>Гравировка</a></li>
                    <li><a href='#' name='SeventhSection' onClick={runTransition}>Доставка</a></li>
                    <li><a href='#' name='EighthSection' onClick={runTransition}>Помощь</a></li>
                </ul>
                <div className="side-menu-logo side-menu-element" alt="Логотип" style = {{backgroundImage: `url(${logoInstagram})`}}> </div>
                <div className="side-menu-logo side-menu-element" alt="Логотип" style = {{backgroundImage: `url(${logoVk})`}}> </div>
                <div className="side-menu-logo side-menu-element" alt="Логотип" style = {{backgroundImage: `url(${logoTelegram})`}}> </div>
            </nav>
        </div>
    );
}

export default SideMenu;
