import logo from './logo.svg';
import './App.css';
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




function App(props) {
  const [sideMenu, setSideMenu] = useState();
  const [sideMenuBackground, setSideMenuBackground] = useState();
  const [closeButton, setCloseButton] = useState();

  const [scrollDelta, setscrollDelta] = useState(10);
  const [delay, setDelay] = useState(5);
  const [scrollByWheel, setScrollByWheel] = useState(1000);
  const scrollCounter = useRef(0);
  const scrollInterval = useRef(0);
  const ratio = useRef();

  // const [scrollCounter, setScrollCounter] = useState(50);
  // const [ratio, setRatio] = useState(0);
  
  useEffect(()=>{
    console.log(scrollCounter);
    console.log(ratio);
    document.documentElement.scrollTop = document.documentElement.scrollTop + (scrollDelta/ratio);
  })
//---------------------------------------------------РАБОЧИЙ ВАРИАНТ---------------------------------------------------------------------------------------
  document.onclick = ()=>{
    clearInterval(scrollInterval.current);
    scrollCounter.current = 0;
    ratio.current = 0;
  }
  
  document.onwheel = (e)=>{
    clearInterval(scrollInterval.current);
    if(e.deltaY > 0) {
      scrollDown()
    }
    else {
      scrollUp()
    }
  }


  function scrollDown() {
    scrollCounter.current = 0;
    ratio.current = 0;
    scrollInterval.current = setInterval(()=>{
      if(scrollCounter.current <= scrollByWheel/1.15) {
        scrollCounter.current = scrollCounter.current + scrollDelta;
        ratio.current = (scrollByWheel/(scrollByWheel-scrollCounter.current));
        document.documentElement.scrollTop = document.documentElement.scrollTop + (scrollDelta/ratio.current);
      }
      else{
        scrollCounter.current = scrollByWheel;
      }
      if(scrollCounter.current >= scrollByWheel) {
        clearInterval(scrollInterval.current);
        scrollCounter.current = 0;
        ratio.current = 0;
      }
    },delay)
  }

  function scrollUp() {
    scrollCounter.current = 0;
    ratio.current = 0;
    scrollInterval.current = setInterval(()=>{
      if(scrollCounter.current < scrollByWheel/1.2) {
        scrollCounter.current = scrollCounter.current + scrollDelta;
        ratio.current = (scrollByWheel/(scrollByWheel-scrollCounter.current));
        document.documentElement.scrollTop = document.documentElement.scrollTop - (scrollDelta/ratio.current);
      }
      else{
        scrollCounter.current = scrollByWheel;
      }
      if(scrollCounter.current >= scrollByWheel) {
        clearInterval(scrollInterval.current);
        scrollCounter.current = 0;
        ratio.current = 0;
      }
     
    },delay)
  }

//---------------------------------------------------РАБОЧИЙ ВАРИАНТ---------------------------------------------------------------------------------------






  // document.onwheel = (e)=>{
  //   console.log('wheeled', e.deltaY);
  //   clearInterval(scrollInterval.current);
  //   if(e.deltaY > 0) {
  //     setScrollCounter( 0);
  //     setRatio(0);
  //     scrollInterval.current = setInterval(()=>{
  //       if(scrollCounter <= scrollByWheel/1.15) {
  //         setScrollCounter( prevScrollCounter => prevScrollCounter + scrollDelta);
  //         setRatio(prevScrollCounter => scrollByWheel/(scrollByWheel-prevScrollCounter));
  //         // document.documentElement.scrollTop = document.documentElement.scrollTop + (scrollDelta/ratio);
  //         // console.log(scrollCounter);
  //         // console.log(ratio);
  //         console.log(`scrollCounter = ${scrollCounter}` );
  //         console.log(`scrollByWheel = ${scrollByWheel}` );
  //       }
  //       else{
  //         setScrollCounter( scrollByWheel);
  //       }
  //       if(scrollCounter >= scrollByWheel) {
  //         console.log('STOPPPPPP')
  //         clearInterval(scrollInterval.current);
  //         setScrollCounter( 0);
  //         setRatio(0);
  //       }
  //     },delay)
  //   }
    // else {
    //   setScrollCounter( 0);
    //   setRatio(0);
    //   scrollInterval.current = setInterval(()=>{
    //     if(scrollCounter < scrollByWheel/1.2) {
    //       setScrollCounter( scrollCounter + scrollDelta);
    //       setRatio((scrollByWheel/(scrollByWheel-scrollCounter)));
    //       document.documentElement.scrollTop = document.documentElement.scrollTop - (scrollDelta/ratio);
    //     }
    //     else{
    //       setScrollCounter( scrollByWheel);
    //     }
    //     if(scrollCounter >= scrollByWheel) {
    //       clearInterval(scrollInterval.current);
    //       setScrollCounter( 0);
    //       setRatio(0);
    //     }
    //   },delay)
  //   }
  // }

  return (
    <div>
      <SideMenu  setSideMenu = {setSideMenu} setSideMenuBackground = {setSideMenuBackground} setCloseButton = {setCloseButton}/>
      <Header sideMenu = {sideMenu} sideMenuBackground = {sideMenuBackground} closeButton = {closeButton}/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <EighthSection/>
      <Footer/>
    </div>
  );
}

export default App;
