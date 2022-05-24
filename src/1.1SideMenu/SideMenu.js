import react, { useEffect, useRef, useState}  from 'react'
import './SideMenuStyle.css';
import logoInstagram from '../images/logo-instagram-black.png'
import logoVk from '../images/logo-vk-black.png'
import logoTelegram from '../images/logo-telegram-black.png'
import ScrollingNavigation from '../10.3ScrollingNavigation/ScrollingNavigation'
import SideMenuAnimation from '../10.4SideMenuAnimation/SideMenuAnimation'



function SideMenu(props) {
    
    const sideMenu = useRef();
    const sideMenuBackground = useRef();
    const closeButton = useRef();
    const [sideMenuButton, setsSideMenuButton] = useState(props.sideMenuButton);
    

    useEffect(()=>{
        console.log(props.sideMenuButton);
        props.setSideMenu(sideMenu.current);
        props.setSideMenuBackground(sideMenuBackground.current);
        props.setCloseButton(closeButton.current)
    })

    return (  
        <div >
            <div ref = {sideMenuBackground} className='side-navigation-background'></div>
            <SideMenuAnimation sideMenuButton ={props.sideMenuButton} sideMenuBackground ={sideMenuBackground.current} closeButton = {closeButton.current}>
            {/* <nav ref = {sideMenu} className = 'side-menu'> */}
                <button ref = {closeButton} className = 'close-button side-menu-element'>X</button>
               
                <ul className = 'side-navigation side-menu-element'>
                    <ScrollingNavigation scrollToElementId = 'header'><a href='#' name='header'>Главная</a></ScrollingNavigation>
                    <ScrollingNavigation scrollToElementId = 'SecondSection'><a href='#' name='SecondSection'>Преимущества</a></ScrollingNavigation>
                    <ScrollingNavigation scrollToElementId = 'SixthSection'><a href='#' name='SixthSection'>Гравировка</a></ScrollingNavigation>
                    <ScrollingNavigation scrollToElementId = 'SeventhSection'><a href='#' name='SeventhSection'>Доставка</a></ScrollingNavigation>
                    <ScrollingNavigation scrollToElementId = 'EighthSection'><a href='#' name='EighthSection'>Помощь</a></ScrollingNavigation>
                </ul>
                <div className="side-menu-logo side-menu-element" alt="Логотип" style = {{backgroundImage: `url(${logoInstagram})`}}> </div>
                <div className="side-menu-logo side-menu-element" alt="Логотип" style = {{backgroundImage: `url(${logoVk})`}}> </div>
                <div className="side-menu-logo side-menu-element" alt="Логотип" style = {{backgroundImage: `url(${logoTelegram})`}}> </div>
            {/* </nav> */}
            </SideMenuAnimation>
        </div>
    );
}

export default SideMenu;
