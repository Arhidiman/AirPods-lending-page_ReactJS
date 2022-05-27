import react, { useEffect, useRef, useState}  from 'react'
import './SecondSectionStyle.css';
import podsCase from '../images/pods-case.png'
import FadeAnimation from '../10.5FadeAnimation/FadeAnimation';


function SecondSection() {

  return (
    
    <section id="SecondSection" class="SecondSection">
      <FadeAnimation delay = {20}>
        <div className="container second-section-container">    
          <div class="pods-case section-image" alt="" style = {{backgroundImage: `url(${podsCase})`}}> </div>
          <div className='second-section-text section-text'>  
            <h1 class="section-title second-section-title">
                Ноль проводов.
            </h1>     
            <p class="section-description second-section-description">
              AirPods настраиваются в одно касание. Автоматически <br></br> 
              включаются  и устанавливают соединение. Они оснащены <br></br> 
              специальными сенсорами, поэтому когда вы снимаете <br></br> 
              наушники, воспроизведение останавливается. При этом <br></br> 
              AirPods великолепно взаимодействуют как с iPhone, <br></br> 
              так и с Apple Watch, Mac и iPad. 
            </p>
          </div>
        </div>
        </FadeAnimation>
    </section>
   
  );
}

export default SecondSection;