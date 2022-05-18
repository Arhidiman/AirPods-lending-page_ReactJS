import react, { useEffect, useRef, useState}  from 'react'

function Animation(props) {

    const scrollBock = useRef();
    const [scrollDelta, setDcrollDelta] = useState(10);
    const [delay, setDelay] = useState(5);
    const [scrollByWheel, setScrollByWheel] = useState(1000);
    const scrollCounter = useRef(0);
    const scrollInterval = useRef(0);
    const ratio = useRef();
  
    scrollBock.current.onwheel = (e)=>{
      console.log('wheeled', e.deltaY);
      clearInterval(scrollInterval.current);
      if(e.deltaY > 0) {
        scrollCounter.current = 0;
        ratio.current = 0;
        scrollInterval.current = setInterval(()=>{
          if(scrollCounter.current <= scrollByWheel/1.15) {
            scrollCounter.current = scrollCounter.current + scrollDelta;
            ratio.current = (scrollByWheel/(scrollByWheel-scrollCounter.current));
            scrollBock.current.scrollTop = scrollBock.current.scrollTop + (scrollDelta/ratio.current);
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
      else {
        scrollCounter.current = 0;
        ratio.current = 0;
        scrollInterval.current = setInterval(()=>{
          if(scrollCounter.current < scrollByWheel/1.2) {
            scrollCounter.current = scrollCounter.current + scrollDelta;
            ratio.current = (scrollByWheel/(scrollByWheel-scrollCounter.current));
            scrollBock.current.scrollTop = scrollBock.current.scrollTop - (scrollDelta/ratio.current);
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
    }

    return (
        <div ref = {scrollBock} className = 'scrolled' onClick={animateChildren}>
           {props.children}

        </div>
    );
}

export default Animation;
