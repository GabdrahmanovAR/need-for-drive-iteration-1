import React, { useEffect } from 'react';
import './AdvancedTab.scss';
import { useDispatch, useSelector } from 'react-redux';
import RadioButton from '../../radio-button/RadioButton';
import InputField from '../../input-field/InputField';
import { EMPTY_STRING } from '../../../constants/common';
import Calendar from '../../calendar/Calendar';
import { advancedTabSelector } from '../../../selectors/advancedTabSelector';
import { setEndDayAction, setStartDayAction } from '../../../redux/actions/AdvancedTabAction';
import { ScrollToTop } from '../../../utils/ScrollToTop';

const AdvancedTab = () => {
  const advancedTabState = useSelector(advancedTabSelector);
  const dispatch = useDispatch();

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
        <RadioButton btnNames={['Любой', 'Красный', 'Голубой']} />
      </header>
      <section>
        <p>Дата аренды</p>
        <div className="advanced-tab__input-fields">
          <InputField
            id="start-day"
            fieldValue={advancedTabState.startDay}
            placeholder="Выберите дату и время"
            title="С"
            onClickBtnFunc={handleStartDateDeleteClick}
            childComponent={<Calendar />}
          />
          <InputField
            id="end-day"
            fieldValue={advancedTabState.endDay}
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
          btnNames={['Поминутно, 7 ₽/мин', 'На сутки, 1999 ₽/сутки']}
          direction="column"
        />
      </section>
      <section>
        <p>Доп. услуги</p>
        <RadioButton
          btnNames={['Полный бак, 500₽', 'Детское кресло, 200₽', 'Правый руль, 1600₽']}
          type="checkbox"
          direction="column"
        />
      </section>
    </div>
  );
};

export default AdvancedTab;
