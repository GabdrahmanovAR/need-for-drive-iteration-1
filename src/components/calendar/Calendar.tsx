import React from 'react';
import { DatePicker } from 'antd';
import './Calendar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setEndDayAction, setStartDayAction } from '../../redux/actions/AdvancedTabAction';
import { inputFieldSelector } from '../../selectors/inputFieldSelector';

const Calendar = () => {
  const inputFieldState = useSelector(inputFieldSelector);
  const dispatch = useDispatch();

  const onChange = (value: any, dateString: string) => {
    if (inputFieldState.focusedField === 'start-day') dispatch(setStartDayAction(dateString));
    else dispatch(setEndDayAction(dateString));
  };

  return (
    <div className="calendar">
      <DatePicker showTime onChange={onChange} />
    </div>
  );
};

export default Calendar;
