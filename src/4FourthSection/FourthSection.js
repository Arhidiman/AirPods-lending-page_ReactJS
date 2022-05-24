import react, { useEffect, useRef, useState}  from 'react'
import './FourthSectionStyle.css';
import podsWithoutCase from '../images/pods-without-case.png'


function FourthSection() {
  return (
    <section id="FourthSection" class="FourthSection">
      <div className="container fourth-section-container advantages-container advantages-container-light">
        <div class="pods-without-case section-image" alt="" style = {{backgroundImage: `url(${podsWithoutCase})`}}> </div>
        <div className='fourth-section-text section-text'>
            <h1 class="section-title fourth-section-title">
                Легко настроить. <br></br> 
                Просто заслушаться.
            </h1>
            <p class="section-description fourth-section-description">
              AirPods мгновенно устанавливают соединение с вашим <br></br> 
              iPhone, Apple Watch, Mac и iPad. Поэтому, когда вы <br></br> 
              переключчаетесь с одного устройства на другое, смена <br></br> 
              источника звука происходит моментально. <br></br> 
              Простая настройка-волшебный результат.
            </p>
        </div>
      </div>
    </section>
  );
}

export default FourthSection;
