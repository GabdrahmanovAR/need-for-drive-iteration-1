import { IRadioButtonActionType } from '../../types/actions';
import { SELECT_ITEM } from '../../constants/actions/radioButton';

export const changeSelectedItem = (item: string): IRadioButtonActionType => ({
  type: SELECT_ITEM,
  selectedItem: item,
});
