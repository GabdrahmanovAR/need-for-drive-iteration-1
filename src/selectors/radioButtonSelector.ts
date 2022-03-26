import { IState } from '../types/state';

export const radioButtonSelector = (state: IState) => ({
  selectedItem: state.radioButton.selectedItem,
});
