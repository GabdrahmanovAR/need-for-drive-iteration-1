import React, { BaseSyntheticEvent, FC, useState } from 'react';
import './RadioButton.scss';
import { EMPTY_STRING } from '../../constants/common';

interface IRadioButtonProps {
  btnNames: string[],
  type?: string,
  direction?: string,
}

const RadioButton: FC<IRadioButtonProps> = ({ btnNames, type, direction }) => {
  const [checked, setChecked] = useState(type === 'radio' ? 'radio-id-0' : EMPTY_STRING);

  const handleOnChangeEvent = (event: BaseSyntheticEvent) => {
    setChecked(event.target.id);
  };

  return (
    <form className="form_radio">
      <fieldset className={`form_radio__fieldset ${direction !== EMPTY_STRING && 'form_radio__fieldset_column'}`}>
        {btnNames.map((name: string, index: number) => (
          <div key={`radio-${index}`} className="form_radio__fieldset__r-button">
            <input
              id={`${type === 'radio'
                ? `radio-id-${index}`
                : `checkbox-id-${index}`
              }`}
              className={`form_radio__fieldset__input ${type === 'checkbox' && 'form_radio__fieldset__input_checkbox'}`}
              type={type}
              name={`${type === 'radio'
                ? 'radio-button'
                : `checkbox-btn-${index}`
              }`}
              defaultChecked={type === 'radio' && index === 0}
              onChange={handleOnChangeEvent}
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
