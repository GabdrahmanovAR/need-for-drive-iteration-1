import React, { BaseSyntheticEvent, useState } from 'react';
import './RadioButton.scss';

interface IProps {
  btnNames: string[],
}

const RadioButton = ({ btnNames }: IProps) => {
  const [checked, setChecked] = useState('radio-id-0');

  const handleOnChangeEvent = (event: BaseSyntheticEvent) => {
    setChecked(event.target.id);
  };

  return (
    <form className="form_radio">
      <fieldset className="form_radio__fieldset">
        {btnNames.map((name: string, index: number) => (
          <div key={`radio-${index}`} className="form_radio__fieldset__r-button">
            <input
              id={`radio-id-${index}`}
              type="radio"
              name="radio-button"
              defaultChecked={index === 0}
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
