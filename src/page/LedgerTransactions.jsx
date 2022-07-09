import { Fragment } from "react";
import { useParams } from "react-router-dom";

import LedgerTransactionComponent from "../component/ledger/LedgerTransactionComponent";


const LedgerTransactions = () => {

  const params = useParams();

  const { ledgerId } = params;  // same as this  const quoteId = params.quoteId;

  let ledgerTransaction;

  if (ledgerId) {
    ledgerTransaction = (
      <LedgerTransactionComponent ledgerId={ledgerId} />
    )
  }

  return (
    <Fragment>
      <h1>Ledger Transaction for Ledger Id = {ledgerId} </h1>
      <div style={{ height: 300, width: '100%' }}>
        {ledgerTransaction}
      </div>
    </Fragment>
  );
};

export default LedgerTransactions;

