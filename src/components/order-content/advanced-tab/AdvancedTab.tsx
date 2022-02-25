import React, { BaseSyntheticEvent, useState } from 'react';
import './AdvancedTab.scss';
import RadioButton from '../../radio-button/RadioButton';
import OrderInputField from '../order-input-field/OrderInputField';
import { EMPTY_STRING } from '../../../constants/common';

const AdvancedTab = () => {
  const [startDay, setStartDay] = useState(EMPTY_STRING);

  const testFunc = (event: BaseSyntheticEvent) => {
    setStartDay(event.target.value);
  };

  return (
    <div className="advanced-tab">
      <header className="advanced-tab__header">
        <p>Цвет</p>
        <RadioButton btnNames={['Любой', 'Красный', 'Голубой']} />
      </header>
      <section>
        <p>Дата аренды</p>
        <OrderInputField
          fieldValue={startDay}
          placeholder="Введите дату и время"
          title="С"
          onInputFunc={testFunc}
        />
      </section>
    </div>
  );
};

export default AdvancedTab;
