import React, { useEffect } from 'react';
import './OrderPage.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderContent from '../../components/order-content/OrderContent';
import Header from '../../components/header/Header';
import { IState } from '../../types/state';
import { headerAddClassAction } from '../../redux/actions/HeaderAction';
import OrderStep from '../../components/order-step/OrderStep';

interface IProps {
  headerAddClass: (customClass: string) => void,
}

const OrderPage = ({ headerAddClass }: IProps) => {
  useEffect(() => {
    headerAddClass('order-page__header');
  }, []);

  return (
    <main className="order-page">
      <Header />
      <OrderStep />
      <OrderContent />
    </main>
  );
};

export default connect(
  (state: IState) => state,
  (dispatch) => ({
    headerAddClass: bindActionCreators(headerAddClassAction, dispatch),
  }),
)(OrderPage);
