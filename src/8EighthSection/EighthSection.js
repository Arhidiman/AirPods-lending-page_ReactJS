import react, { useEffect, useRef, useState}  from 'react'
import './EighthSectionStyle.css';



function EighthSection() {
  return (
    <section id="EighthSection" className="EighthSection">
      <div className="container eighth-section-container">
        <h1 className='eighth-section-title'>
          Остались вопросы?
        </h1>
        <p className='eighth-section-description'>
          Заполните заявку и мы обязательно вам ответим.
        </p>
        <form action="#" class="form">
          <input class="input" type="text" name="name" placeholder="Ваше имя" required></input>
          <input class="input" type="tel" name="phone" placeholder="Ваш телефон" required></input>
          <input class="input" type="text" name="flight" placeholder="Ваш вопрос" required></input>
	 			<button class="btn form-btn">Оставить заявку</button>
	 		</form>
      </div>
    </section>
  );
}

export default EighthSection;
