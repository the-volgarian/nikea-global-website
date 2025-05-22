import './Services.css';
import { Truck, Ship, PackageCheck, FileText } from 'lucide-react';

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">НАШИТЕ УСЛУГИ</h2>

      <div className="service-card">
        <h3 className="service-heading">
          <Truck size={50} />
          Международна спедиция
        </h3>
        <p className="service-text">
          Организираме сигурен и ефективен транспорт на стоки до и от Европа, Близкия Изток и други региони. Работим с утвърдени партньори и гарантираме точност и надеждност.
        </p>
        <ul className="service-list">
          <li>Групажни и комплектни товари</li>
          <li>Наземен, морски и въздушен транспорт</li>
          <li>Митническо съдействие</li>
        </ul>
      </div>

      <div className="service-card">
        <h3 className="service-heading">
          <Ship size={50} />
          Контейнерен транспорт (FCL / LCL)
        </h3>
        <p className="service-text">
          Предлагаме морски и сухопътен контейнерен транспорт според вашите изисквания. Работим с водещи пристанища и логистични оператори.
        </p>
        <ul className="service-list">
          <li>Пълни (FCL) и групажни (LCL) контейнери</li>
          <li>Превоз от/до Европа, Азия и Америка</li>
          <li>Съдействие с митници и терминали</li>
        </ul>
      </div>

      <div className="service-card">
        <h3 className="service-heading">
          <PackageCheck size={50} />
          Вътрешна спедиция
        </h3>
        <p className="service-text">
          Бърз и сигурен транспорт в рамките на България. Обслужваме всички основни региони чрез надеждни превозвачи.
        </p>
        <ul className="service-list">
          <li>Доставка от врата до врата</li>
          <li>Специализирани курсове и товари</li>
          <li>Експресни доставки при нужда</li>
        </ul>
      </div>

      <div className="service-card">
        <h3 className="service-heading">
          <FileText size={50} />
          Документация и консултации
        </h3>
        <p className="service-text">
          Помагаме при планиране, изготвяне на документи и навигиране в регулации и митнически изисквания. Осигуряваме ясна и практична логистична подкрепа.
        </p>
        <ul className="service-list">
          <li>Съвети за международна търговия</li>
          <li>Митнически консултации и съдействие</li>
        </ul>
      </div>

      <div className="cta-box">
        <h3>Готови ли сте да работим заедно?</h3>
        <p>Свържете се с нас още днес за безплатна оферта или консултация!</p>
        <a href="/contact" className="cta-button">Свържи се с нас</a>
      </div>
    </div>
  );
};

export default Services;
