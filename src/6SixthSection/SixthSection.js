import react, { useEffect, useRef, useState}  from 'react'
import './SixthSectionStyle.css';
import twoCases from '../images/two-cases.png'


function SixthSection() {
  return (
    <section id="SixthSection" class="SixthSection">
      <div className="container fourth-section-container">
        <div class="two-cases section-image" alt="" style = {{backgroundImage: `url(${twoCases})`}}> </div>
        <div className='sixth-section-text section-text'>
            <h1 class="section-title sixth-section-title">
                Сделайте их<br></br> 
                индивидуальными.
            </h1>
            <p class="section-description sixth-section-description">  
                AirPods можно нанести гравировку<br></br>
                с использованием абсолютно любых символов.
            </p>
        </div>
      </div>
    </section>
  );
}

export default SixthSection;
