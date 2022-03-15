import React, { BaseSyntheticEvent, FC, useState } from 'react';
import './RadioButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { EMPTY_STRING } from '../../constants/common';
import {
  setBabyChairAction,
  setCarColorAction,
  setFullTankAction, setRightHandDriveAction,
  setTariffAction,
} from '../../redux/actions/OrderInfoAction';
import { changeSelectedItem } from '../../redux/actions/RadioButtonAction';
import { orderInfoSelector } from '../../selectors/orderInfoSelector';

interface IRadioButtonProps {
  formName: string,
  btnNames: string[],
  type?: string,
  direction?: string,
}

const RadioButton: FC<IRadioButtonProps> = (props) => {
  const {
    formName,
    btnNames,
    type = 'radio',
    direction = EMPTY_STRING,
  } = props;
  const [checked, setChecked] = useState(type === 'radio' ? `radio-${formName}-0` : EMPTY_STRING);
  const { car } = useSelector(orderInfoSelector);
  const dispatch = useDispatch();

  const handleOnChangeEvent = (event: BaseSyntheticEvent) => {
    setChecked(event.target.id);
    if (event.target.id.includes('color')) dispatch(setCarColorAction(event.target.value));
    else if (event.target.id.includes('tariff')) dispatch(setTariffAction(event.target.value));

    switch (event.target.value) {
      case 'Все модели': dispatch(changeSelectedItem('all'));
        break;
      case 'Эконом': dispatch(changeSelectedItem('economy'));
        break;
      case 'Премиум': dispatch(changeSelectedItem('premium'));
        break;
      case 'Полный бак, 500₽': dispatch(setFullTankAction(!car.fullTank));
        break;
      case 'Детское кресло, 200₽': dispatch(setBabyChairAction(!car.babyChair));
        break;
      case 'Правый руль, 1600₽': dispatch(setRightHandDriveAction(!car.rightHandDrive));
        break;
      default:
    }
  };

  return (
    <form className="form_radio">
      <fieldset className={`form_radio__fieldset ${direction !== EMPTY_STRING && 'form_radio__fieldset_column'}`}>
        {btnNames.map((name: string, index: number) => (
          <div key={`radio-${index}`} className="form_radio__fieldset__r-button">
            <input
              id={`${type === 'radio'
                ? `radio-${formName}-${index}`
                : `checkbox-${formName}-${index}`
              }`}
              className={`form_radio__fieldset__input ${type === 'checkbox' && 'form_radio__fieldset__input_checkbox'}`}
              type={type}
              name={`${type === 'radio'
                ? 'radio-button'
                : `checkbox-btn-${index}`
              }`}
              defaultChecked={type === 'radio' && index === 0}
              onChange={handleOnChangeEvent}
              value={name}
              // checked={type === 'radio' && index === 0}
            />
            <span className={`
              form_radio__fieldset__name 
              ${checked === `radio-${formName}-${index}` && 'form_radio__fieldset__name_active'}`}
            >
              {name}
            </span>
          </div>
        ))}
      </fieldset>
    </form>
  );
};

export default RadioButton;
