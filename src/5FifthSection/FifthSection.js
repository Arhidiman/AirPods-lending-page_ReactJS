import react, { useEffect, useRef, useState}  from 'react'
import './FifthSectionStyle.css';
import pods from '../images/pods.png'
import FadeAnimation from '../10.5FadeAnimation/FadeAnimation';


function FifthSection() {
  return (
    <section id="FifthSection" class="FifthSection">
      <FadeAnimation delay={20}>
      <div className="container fifth-section-container advantages-container advantages-container-dark">    
        <div className='fifth-section-text section-text'>
            <h1 class="section-title fifth-section-title">
                Целые сутки звучания.
            </h1>
            <ul class="section-description fifth-section-description">
              <li>Более 24 ч работы от аккумулятора с подзарядкой в <br></br>футляре</li>
              <li>До 5 ч работы от аккумулятора без подзарядки</li>
              <li>Всего 15 мин подзарядки для 3 часов <br></br>прослушивания аудио</li>
            </ul>
        </div>
        <div class="pods section-image" alt="" style = {{backgroundImage: `url(${pods})`}}> </div>     
      </div>
      </FadeAnimation>
    </section>
  );
}

export default FifthSection;
