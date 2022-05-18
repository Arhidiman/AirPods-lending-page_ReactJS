import react, { useEffect, useRef, useState}  from 'react'
import './SeventhSectionStyle.css';
import triangles from '../images/triangles.png'


function SeventhSection() {
  return (
    <section id="SeventhSection" className="SeventhSection">
      <div className="container seventh-section-container">
        <h1 className='section-title seventh-section-title'>Получайте, как вам удобно</h1>
        <div className='section-text seventh-section-text'>
            <h2 class="seventh-section-subtitle">
                Доставка на следующий день
            </h2>
            <ul className="section-description seventh-section-description">
              <li>Бесплатная доставка на следующий<br></br>день доступна в Москве<br></br>
              и Санкт-Петербурге при условии<br></br>
              наличия тована на складе.
              </li>
              <li>
                Чтобы воспользоваться бесплатной<br></br>
                доставкой на следующий день,<br></br>
                необходимо оформить заказ до 15:00<br></br>
                по московскому времени (с<br></br>
                понедельника по пятницу)
              </li>
              <li>
                Заказ на товары с гравировкой<br></br>
                (при условии их наличия на складе)<br></br>
                необходимо оформить до 12:00.
              </li>
            </ul>
        </div>

        <div className='section-text seventh-section-text'>
            <h2 className="seventh-section-subtitle">
                Способы доставки
            </h2>
            <ul className="section-description seventh-section-description">
              <li>
                Вы можете подтвердить способ доставки<br></br>
                в сообщении элевктронной почты<br></br>
                с подтверждением заказа. (Доступны<br></br>
                такие способы, как самовывоз, доставка<br></br>
                почтой, а также курьерская доставка)
              </li>
              <li>
                Сразу после оформления заказа Apple<br></br>
                отправит вам информацию о заказе по<br></br>
                электронной почте.
              </li>
     
            </ul>
        </div>

        <div className='section-text seventh-section-text'>
            <h2 className="seventh-section-subtitle">
                Повреждённый товар
            </h2>
            <ul className="section-description seventh-section-description">
              <p>
                Если вы получили повреждённый товар,<br></br>
                обратитесь в Службу поддержки<br></br>
                покупателей магазина. В случае любого<br></br>
                повреждения вашей посылки мы в<br></br>
                кратчайшие сроки свяжемся напрямую со<br></br>
                службой доставки, чтобывыяснить<br></br>
                причину. Мы сообщим вам о результатах<br></br>
                проверки и отправим замену, если это<br></br>
                необходимо
              </p>
            </ul>
             <div className="triangles" alt="" style = {{backgroundImage: `url(${triangles})`}}> </div>
        </div>
      </div>
    </section>
  );
}

export default SeventhSection;
