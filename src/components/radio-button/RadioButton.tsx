import React, { BaseSyntheticEvent, FC, useState } from 'react';
import './RadioButton.scss';
import { useDispatch } from 'react-redux';
import { EMPTY_STRING } from '../../constants/common';
import { setCarColorAction, setTariffAction } from '../../redux/actions/OrderInfoAction';

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
  const [checked, setChecked] = useState(type === 'radio' ? 'radio-id-0' : EMPTY_STRING);
  const dispatch = useDispatch();

  const handleOnChangeEvent = (event: BaseSyntheticEvent) => {
    setChecked(event.target.id);
    if (event.target.id.includes('color')) dispatch(setCarColorAction(event.target.value));
    else if (event.target.id.includes('tariff')) dispatch(setTariffAction(event.target.value));
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
            />
            <span className={`
              form_radio__fieldset__name 
              ${checked === `radio-id-${index}` && 'form_radio__fieldset__name_active'}`}
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
