import React, { useState, useRef, useEffect } from 'react';
import './Incoterms.css';

const terms = [
  {
    code: 'EXW – Ex Works',
    description: 'Продавачът предоставя стоката в своите помещения. Купувачът поема всички разходи и рискове по транспортирането.'
  },
  {
    code: 'FOB – Free On Board',
    description: 'Продавачът доставя стоката на борда на кораба, избран от купувача, в уговореното пристанище на товарене.'
  },
  {
    code: 'CIF – Cost, Insurance and Freight',
    description: 'Продавачът поема разходите за транспорт и застраховка до пристанището на разтоварване.'
  },
  {
    code: 'DAP – Delivered at Place',
    description: 'Продавачът носи отговорност до доставката на стоката на указаното място, без разтоварване.'
  },
  {
    code: 'DDP – Delivered Duty Paid',
    description: 'Продавачът поема всички разходи и митнически формалности до крайната точка, включително мита.'
  }
];

const TermItem = ({ term, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="term-section">
      <div className="term-header" onClick={() => setOpenIndex(isOpen ? null : index)}>
        <span>{term.code}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </div>
      <div
        ref={contentRef}
        className={`term-description ${isOpen ? 'open' : ''}`}
        style={{ maxHeight: height }}
      >
        <div className="term-description-content">
          {term.description}
        </div>
      </div>
    </div>
  );
};

const Incoterms = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="incoterms-page">
      <h1 className="incoterms-title">Incoterms 2020</h1>
      <div className="incoterms-list">
        {terms.map((term, index) => (
          <TermItem
            key={index}
            term={term}
            index={index}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Incoterms;
