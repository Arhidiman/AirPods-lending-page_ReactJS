import react, { useEffect, useRef, useState}  from 'react'
import './FooterStyle.css';
import logo from '../images/logo.png'
import logoInstagram from '../images/logo-instagram.png'
import logoVk from '../images/logo-vk.png'
import logoTelegram from '../images/logo-telegram.png'



function Footer() {
  
  const transition = useRef(0);
  const currentTransition = useRef(0);
  const isScrollTo = useRef(true);
  const [transitionStep, setTransitionStep] = useState(15);

  // useEffect(()=>{
  //   console.log()
  // })

  function runTransition(e) {
    e.preventDefault();
    isScrollTo.current = true;
    transition.current = document.getElementById(e.target.name).getBoundingClientRect().top;
    console.log((e.target.name))
    setInterval(()=>{
        if(isScrollTo.current == true) {
            currentTransition.current = currentTransition.current + transitionStep
            document.documentElement.scrollTop = document.documentElement.scrollTop - transitionStep;
            console.log(transition.current);
            console.log(currentTransition.current);
            if(currentTransition.current >= -transition.current - transitionStep) {
                clearInterval();
                isScrollTo.current = false;
                currentTransition.current = 0;
            }
        }
    },5)
  }
  return (
    <footer id="Footer" className="Footer">
	 	<div className="container footer-container">
            <div className='footer-bar'>
                <div class="logo-apple logo-apple-footer" alt="Логотип" style = {{backgroundImage: `url(${logo})`}}> </div>
                <nav >
                    <ul className = 'footer-navigation'>
                      <li><a href='#' name='header' onClick={runTransition}>Главная</a></li>
                      <li><a href='#' name='SecondSection'onClick={runTransition}>Преимущества</a></li>
                      <li><a href='#' name='SixthSection' onClick={runTransition}>Гравировка</a></li>
                      <li><a href='#' name='SeventhSection' onClick={runTransition}>Доставка</a></li>
                      <li><a href='#'  onClick={(e)=>{e.preventDefault()}}>Помощь</a></li>
                    </ul>
                </nav>

                <span class="arrow-up"><a href='#' name='header' onClick={runTransition}>&uarr;</a></span>
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
