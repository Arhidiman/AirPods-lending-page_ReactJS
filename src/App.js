import './App.css';
import './Adaptive.css';
import SideMenu from './1.1SideMenu/SideMenu';
import Header from './1Header/Header';
import SecondSection from './2SecondSection/SecondSection';
import ThirdSection from './3ThirdSection/ThirdSection';
import FourthSection from './4FourthSection/FourthSection';
import FifthSection from './5FifthSection/FifthSection';
import SixthSection from './6SixthSection/SixthSection';
import SeventhSection from './7SeventhSection/SeventhSection';
import EighthSection from './8EighthSection/EighthSection';
import Footer from './9Footer/Footer';
import { useEffect, useState, useRef } from 'react';
import Scroll from './10.2Scroll/Scroll';

function Wrapper(props) {
  return(
    <div className='wrapper' >
      {props.children}
    </div>
  )
}

function App(props) {
  const [sideMenu, setSideMenu] = useState();
  const [sideMenuBackground, setSideMenuBackground] = useState();
  const [closeButton, setCloseButton] = useState();
  const [sideMenuButton, setSideMenuButton] = useState();

  const [scrollDelta, setscrollDelta] = useState(10);
  const [delay, setDelay] = useState(5);
  const [scrollByWheel, setScrollByWheel] = useState(1000);
  const scrollCounter = useRef(0);
  const scrollInterval = useRef(0);
  const ratio = useRef();
  
  useEffect(()=>{
    console.log("renreded")
  })

  return (
    <div id = 'app'>
      <Scroll isFullPageScroll = {true} scrollPerWheelTurn = {1000}>
        {/* <Wrapper> */}
          <SideMenu  setSideMenu = {setSideMenu} setSideMenuBackground = {setSideMenuBackground} setCloseButton = {setCloseButton} sideMenuButton = {sideMenuButton}/>
          <Header sideMenu = {sideMenu} sideMenuBackground = {sideMenuBackground} closeButton = {closeButton} setSideMenuButton = {setSideMenuButton} />
          <SecondSection/>
          <ThirdSection/>
          <FourthSection/>
          <FifthSection/>
          <SixthSection/>
          <SeventhSection/>
          <EighthSection/>
          <Footer/>
        {/* </Wrapper> */}
      </Scroll>
    </div>

  );
}

export default App;
