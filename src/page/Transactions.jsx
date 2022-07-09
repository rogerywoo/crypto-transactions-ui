import { Fragment } from "react";

import BuyTransactionComponent from '../component/transaction/BuyTransactionComponent';

import SellTransactionComponent from "../component/transaction/SellTransactionComponent";

const Transactions = () => {

  return (
    <Fragment>
      <h1>Sell Transactions Without Buys</h1>
      <div style={{ height: 300, width: '100%' }}>
        <SellTransactionComponent />
      </div>
      <p>. </p>
      <h1>Buy Transactions Without Sold</h1>
      <div style={{ height: 500, width: '100%' }}>
        <BuyTransactionComponent />
      </div>
    </Fragment >
  );
};

export default Transactions;

