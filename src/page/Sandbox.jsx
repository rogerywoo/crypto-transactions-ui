import { Fragment } from "react";
import { useParams } from "react-router-dom";

import LedgerComponent from "../component/ledger/LedgerComponent";
import SellTransactionComponent  from "../component/transaction/SellTransactionComponent";

const Sandbox = () => {
 

  const params = useParams();

  const { ledgerId } = params;  // same as this  const quoteId = params.quoteId;

  let ledgerTransaction;

  // if (ledgerId) {
  //   ledgerTransaction = (
  //     <SellTransactionComponent ledgerId={ledgerId} />
  //   )
  // }

  return (
    <Fragment>
      <h1>Sell Transaction</h1>
      <div style={{ height: 300, width: '100%' }}>
        <SellTransactionComponent/>
      </div>
      <br />
      {/* {ledgerTransaction && <h1>Associated Transactions ({ledgerId}) </h1>}
      <div style={{ height: 500, width: '100%' }}>
        {ledgerTransaction}
      </div> */}
    </Fragment>
  );
};

export default Sandbox;

