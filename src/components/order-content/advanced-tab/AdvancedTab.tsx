import React, { BaseSyntheticEvent, useState } from 'react';
import './AdvancedTab.scss';
import RadioButton from '../../radio-button/RadioButton';
import InputField from '../../input-field/InputField';
import { EMPTY_STRING } from '../../../constants/common';

const AdvancedTab = () => {
  const [startDay, setStartDay] = useState(EMPTY_STRING);
  const [endDay, setEndDay] = useState(EMPTY_STRING);

  // TODO Попытаться объединить функции обработки input и click
  const handleStartDateInput = (event: BaseSyntheticEvent) => {
    setStartDay(event.target.value);
  };

  const handleStartDateDeleteClick = () => {
    setStartDay(EMPTY_STRING);
  };

  const handleEndDateInput = (event: BaseSyntheticEvent) => {
    setEndDay(event.target.value);
  };

  const handleEndDateDeleteClick = () => {
    setEndDay(EMPTY_STRING);
  };

  return (
    <div className="advanced-tab">
      <header className="advanced-tab__header">
        <p>Цвет</p>
        <RadioButton btnNames={['Любой', 'Красный', 'Голубой']} />
      </header>
      <section className="advanced-tab__date">
        <p>Дата аренды</p>
        <div className="advanced-tab__date__input-fields">
          <InputField
            fieldValue={startDay}
            placeholder="Введите дату и время"
            title="С"
            onInputFunc={handleStartDateInput}
            onClickBtnFunc={handleStartDateDeleteClick}
          />
          <InputField
            fieldValue={endDay}
            placeholder="Введите дату и время"
            title="По"
            onInputFunc={handleEndDateInput}
            onClickBtnFunc={handleEndDateDeleteClick}
          />
        </div>
      </section>
    </div>
  );
};

export default AdvancedTab;
