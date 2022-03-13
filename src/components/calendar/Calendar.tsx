import React from 'react';
import { DatePicker } from 'antd';
import './Calendar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { inputFieldSelector } from '../../selectors/inputFieldSelector';
import { endDayRentAction, startDayRentAction } from '../../redux/actions/OrderInfoAction';

const Calendar = () => {
  const inputFieldState = useSelector(inputFieldSelector);
  const dispatch = useDispatch();

  const onChange = (value: any, dateString: string) => {
    if (inputFieldState.focusedField === 'start-day') dispatch(startDayRentAction(dateString));
    else dispatch(endDayRentAction(dateString));
  };

  return (
    <div className="calendar">
      <DatePicker showTime onChange={onChange} />
    </div>
  );
};

export default Calendar;
