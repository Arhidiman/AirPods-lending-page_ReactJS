import react, { useEffect, useRef, useState}  from 'react'
import './FooterStyle.css';
import logo from '../images/logo.png'
import logoInstagram from '../images/logo-instagram.png'
import logoVk from '../images/logo-vk.png'
import logoTelegram from '../images/logo-telegram.png'
import ScrollingNavigation from '../10.3ScrollingNavigation/ScrollingNavigation'



function Footer() {
  
  const transition = useRef(0);
  const currentTransition = useRef(0);
  const isScrollTo = useRef(true);
  const [transitionStep, setTransitionStep] = useState(15);

  // useEffect(()=>{
  //   console.log()
  // })

  return (
    <footer id="Footer" className="Footer">
	 	<div className="container footer-container">
            <div className='footer-bar'>
                <div class="logo-apple logo-apple-footer" alt="Логотип" style = {{backgroundImage: `url(${logo})`}}> </div>
                <nav >
                    <ul className = 'footer-navigation'>
                      <ScrollingNavigation scrollToElementId = 'header'><a href='#' name='header'>Главная</a></ScrollingNavigation>
                      <ScrollingNavigation scrollToElementId = 'SecondSection'><a href='#' name='SecondSection'>Преимущества</a></ScrollingNavigation>
                      <ScrollingNavigation scrollToElementId = 'SixthSection'><a href='#' name='SixthSection'>Гравировка</a></ScrollingNavigation>
                      <ScrollingNavigation scrollToElementId = 'SeventhSection'><a href='#' name='SeventhSection'>Доставка</a></ScrollingNavigation>
                        <li><a href='#'  onClick={(e)=>{e.preventDefault()}}>Помощь</a></li>
                    </ul>
                </nav>
                <ScrollingNavigation scrollToElementId = 'header'><span class="arrow-up"><a href='#' name='header'>&uarr;</a></span></ScrollingNavigation>
                
                {/* <div className='contacts'> */}


                  <div className="logo-instagram" alt="Логотип" style = {{backgroundImage: `url(${logoInstagram})`}}> </div>
                  <div className="logo-vk" alt="Логотип" style = {{backgroundImage: `url(${logoVk})`}}> </div>
                  <div className="logo-telegram" alt="Логотип" style = {{backgroundImage: `url(${logoTelegram})`}}> </div>
                {/* </div> */}
            </div>
		</div>

    </footer>
  );
}

export default Footer;
