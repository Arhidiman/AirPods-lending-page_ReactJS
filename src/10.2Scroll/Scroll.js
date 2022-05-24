import react, { useEffect, useRef, useState}  from 'react'

function Scroll(props) {

    const scrollBlock = useRef()
    const [scrollDelta, setDcrollDelta] = useState(10);
    const [delay, setDelay] = useState(5);
    const [scrollPerWheelTurn] = useState(props.scrollPerWheelTurn);
    const scrollCounter = useRef(0);
    const ratio = useRef();
    let scrollInterval = null;

    function scroll(e) {
        clearInterval(scrollInterval);
        if(e.deltaY > 0) {
            scrollDown();
        }
        else {
            scrollUp();
        }
    }

    useEffect(()=>{
        console.log("scroll")
        scrollBlock.current.addEventListener("scrollActivated", function(event) {
            // window.dispatchEvent(event);
        });
        window.onclick = ()=>{
            clearInterval(scrollInterval);
            scrollCounter.current = 0;
            ratio.current = 0;
            console.log('stop')
        }
    })

    if(props.isFullPageScroll === true) {
        scrollBlock.current = document.documentElement
    }

    function scrollDown() {
        let event = new Event("scrollActivated");
        scrollBlock.current.dispatchEvent(event);
        scrollCounter.current = 0;
        ratio.current = 0;
        scrollInterval = setInterval(()=>{
          if(scrollCounter.current <= scrollPerWheelTurn/1.15) {
            scrollCounter.current = scrollCounter.current + scrollDelta;
            ratio.current = (scrollPerWheelTurn/(scrollPerWheelTurn-scrollCounter.current));
            scrollBlock.current.scrollTop = scrollBlock.current.scrollTop + (scrollDelta/ratio.current);
          }
          else{
            scrollCounter.current = scrollPerWheelTurn;
          }
          if(scrollCounter.current >= scrollPerWheelTurn) {
            clearInterval(scrollInterval);
            scrollCounter.current = 0;
            ratio.current = 0;
          }
        },delay)
    }

    function scrollUp() {
        let event = new Event("scrollActivated");
        window.dispatchEvent(event);
        scrollCounter.current = 0;
        ratio.current = 0;
        scrollInterval = setInterval(()=>{
          if(scrollCounter.current < scrollPerWheelTurn/1.2) {
            scrollCounter.current = scrollCounter.current + scrollDelta;
            ratio.current = (scrollPerWheelTurn/(scrollPerWheelTurn-scrollCounter.current));
            scrollBlock.current.scrollTop = scrollBlock.current.scrollTop - (scrollDelta/ratio.current);
          }
          else{
            scrollCounter.current = scrollPerWheelTurn;
          }
          if(scrollCounter.current >= scrollPerWheelTurn) {
            clearInterval(scrollInterval);
            scrollCounter.current = 0;
            ratio.current = 0;
          } 
        },delay)
    }

    return (
        <div ref = {scrollBlock} className = 'scrolled' onWheel = {(e)=>{scroll(e)}} >
           {props.children}

        </div>
    );
}

export default Scroll;
