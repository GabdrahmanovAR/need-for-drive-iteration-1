import { IState } from '../types/state';

export const carModelCardSelector = (state: IState) => ({
  activeCard: state.carModelCard.activeCard,
  selectedCarInfo: state.carModelCard.selectedCarInfo,
});
