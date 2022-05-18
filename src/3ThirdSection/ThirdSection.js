import react, { useEffect, useRef, useState}  from 'react'
import './ThirdSectionStyle.css';
import podsInCase from '../images/case.png'


function ThirdSection() {
  return (
    <section id="ThirdSection" class="ThirdSection">
      <div className="container second-section-container">
        <div className='third-section-text section-text'>
            <h1 class="section-title third-section-title">
                Положите - зарядите.
            </h1>
            <p class="section-description third-section-description">
              Заряжать AirPods очень просто: положите беспроводной <br></br>
              зарядный футляр AirPods на устройство для беспроводной <br></br>
              зарядки стандарта Qi. Это всё, что нужно. Светящийся <br></br>
              Индикатор на передней панели футляра означает, что ваши <br></br>
              AirPods заряжаются. А если под рукой нет устройства для<br></br>
              беспроводной зарядки, то футляр можно зарядить через <br></br>
              разъём lightning.

            </p>
        </div>
        <div class="pods-in-case section-image" alt="" style = {{backgroundImage: `url(${podsInCase})`}}> </div>
      </div>
    </section>
  );
}

export default ThirdSection;
