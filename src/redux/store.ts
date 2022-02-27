import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import sidebarMenuReducer from './reducers/SidebarMenuReducer';
import orderLocationReducer from './reducers/OrderLocationReducer';
import cardModelCardReducer from './reducers/CardCardReducer';
import advancedTabReducer from './reducers/AdvancedTabReducer';
import inputFieldReducer from './reducers/InputFieldReducer';
import orderConfirmReducer from './reducers/OrderConfirmReducer';

export const store = createStore(
  combineReducers({
    sidebarMenu: sidebarMenuReducer,
    orderLocation: orderLocationReducer,
    carCard: cardModelCardReducer,
    advancedTab: advancedTabReducer,
    inputField: inputFieldReducer,
    orderConfirm: orderConfirmReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
