import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import sidebarMenuReducer from './SidebarMenuReducer';

export const store = createStore(
  combineReducers({
    sidebarMenu: sidebarMenuReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
