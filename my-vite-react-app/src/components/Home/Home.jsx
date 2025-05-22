import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Home.css';

const Home = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState(null);

  const openInquiryForm = () => setFormVisible(true);
  const closeInquiryForm = () => {
    setFormVisible(false);
    setSendResult(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_ng25',
      'template_78te7ck',
      e.target,
      'dguNhcDlweSz9mQNm'
    ).then((result) => {
      setIsSending(false);
      setSendResult('Вашето запитване беше изпратено успешно!');
      e.target.reset();
    }, (error) => {
      setIsSending(false);
      setSendResult('Грешка при изпращане. Моля, опитайте по-късно.');
    });
  };

  return (
    <>
      <div className="banner-section-home">
        <img className="banner-img" src="/banner.jpg" alt="Truck background" />
        <div className="banner-overlay">
          <h1>Доставка и транспортни услуги</h1>
          <h2>За всички нуждаещи се от транспортни решения</h2>
        </div>
      </div>

      <div className="home-container modern-section">
        <section className="highlight-card">
          {/* <img src="/truck-icon.png" alt="Truck icon" className="highlight-icon" /> */}
          <h3 className='title-home-container'>Научете повече за Nikea Global</h3>
          <p className='text-home-container'>надежден партньор в организирането на транспорт за вашите стоки</p>
        </section>

        <section className="service-grid">
  <div className="service-card">
    <img src="/symbols/fast-delivery.png" alt="Fast delivery" className="card-icon" />
    <h3>Бърз транспорт</h3>
    <p>Бърз и сигурен транспорт на стоки</p>
  </div>
  <div className="service-card">
    <img src="/symbols/globe.png" alt="Flexible" className="card-icon" />
    <h3>Гъвкави решения</h3>
    <p>Вътрешни и международни превози</p>
  </div>
  <div className="service-card">
    <img src="/symbols/cargo.png" alt="Special" className="card-icon" />
    <h3>Специализиран транспорт</h3>
    <p>Услуги за различни видове товари</p>
  </div>
  <div className="service-card">
    <img src="/symbols/custom.png" alt="Custom" className="card-icon" />
    <h3>Индивидуални решения</h3>
    <p>Персонализиран транспорт за бизнеса</p>
  </div>
  <div className="service-card">
    <img src="/symbols/tracking.png" alt="Tracking" className="card-icon" />
    <h3>Проследяване</h3>
    <p>Мониторинг на пратки в реално време</p>
  </div>
  <div className="service-card">
    <img src="/symbols/planning.png" alt="Consulting" className="card-icon" />
    <h3>Консултации</h3>
    <p>Оптимални маршрути и планиране</p>
  </div>
  <div className="service-card">
    <img src="/symbols/container.png" alt="Container" className="card-icon" />
    <h3>Контейнери</h3>
    <p>Пълна логистика с контейнери</p>
  </div>
</section>


        {!isFormVisible && (
          <button className="inquiry-btn styled-btn" onClick={openInquiryForm}>Запитване</button>
        )}

        {isFormVisible && (
          <div className="inquiry-form modern-form">
            <h2>Форма за запитване</h2>

            <form className='form-container' onSubmit={handleSubmit}>
              <label htmlFor="name">Вашето име:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Вашият имейл:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Вашето съобщение:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit" className="styled-btn" disabled={isSending}>
                {isSending ? 'Изпращане...' : 'Изпрати'}
              </button>
            </form>

            {sendResult && <p className="send-result">{sendResult}</p>}

            <button className="close-btn styled-btn" onClick={closeInquiryForm}>Затвори</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
