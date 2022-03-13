import React, { useEffect } from 'react';
import './AdvancedTab.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RadioButton from '../../radio-button/RadioButton';
import InputField from '../../input-field/InputField';
import { EMPTY_STRING } from '../../../constants/common';
import Calendar from '../../calendar/Calendar';
import { setEndDayAction, setStartDayAction } from '../../../redux/actions/AdvancedTabAction';
import { ScrollToTop } from '../../../utils/ScrollToTop';
import { orderInfoSelector } from '../../../selectors/orderInfoSelector';
import { orderStepSelector } from '../../../selectors/orderStepSelector';

const AdvancedTab = () => {
  const { car } = useSelector(orderInfoSelector);
  const dispatch = useDispatch();
  const orderStepState = useSelector(orderStepSelector);
  const path = useNavigate();

  useEffect(() => {
    ScrollToTop();
  }, []);

  const handleStartDateDeleteClick = () => {
    dispatch(setStartDayAction(EMPTY_STRING));
  };

  const handleEndDateDeleteClick = () => {
    dispatch(setEndDayAction(EMPTY_STRING));
  };

  return (
    <div className="advanced-tab">
      <header className="advanced-tab__header">
        <p>Цвет</p>
        <RadioButton
          formName="color"
          btnNames={['Любой', ...car.colors]}
        />
      </header>
      <section>
        <p>Дата аренды</p>
        <div className="advanced-tab__input-fields">
          <InputField
            id="start-day"
            fieldValue={car.rentalDuration.from}
            placeholder="Выберите дату и время"
            title="С"
            onClickBtnFunc={handleStartDateDeleteClick}
            childComponent={<Calendar />}
          />
          <InputField
            id="end-day"
            fieldValue={car.rentalDuration.to}
            placeholder="Выберите дату и время"
            title="По"
            onClickBtnFunc={handleEndDateDeleteClick}
            childComponent={<Calendar />}
          />
        </div>
      </section>
      <section>
        <p>Тариф</p>
        <RadioButton
          formName="tariff"
          btnNames={['Поминутно, 7 ₽/мин', 'На сутки, 1999 ₽/сутки']}
          direction="column"
        />
      </section>
      <section>
        <p>Доп. услуги</p>
        <RadioButton
          formName="advanced"
          btnNames={['Полный бак, 500₽', 'Детское кресло, 200₽', 'Правый руль, 1600₽']}
          type="checkbox"
          direction="column"
        />
      </section>
      {(!orderStepState.locationTabCompleted || !orderStepState.modelTabCompleted) && path('/order/location')}
    </div>
  );
};

export default AdvancedTab;
