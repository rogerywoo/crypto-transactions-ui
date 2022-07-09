import { Fragment } from "react";
import { useParams } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import { DataGrid } from '@mui/x-data-grid';


// import LoadingSpinner from '../component/ui/LoadingSpinner'
// import useHttp from "../hook/use-http";
// import { getAllLedgers }  from "../lib/api";
import LedgerComponent from "../component/ledger/LedgerComponent";
import LedgerTransactionComponent  from "../component/ledger/LedgerTransactionComponent";

const Ledger = () => {
 

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
      <h1>Ledger</h1>
      <div style={{ height: 300, width: '100%' }}>
        <LedgerComponent/>
      </div>
      <br />
      {ledgerTransaction && <h1>Associated Transactions ({ledgerId}) </h1>}
      <div style={{ height: 500, width: '100%' }}>
        {ledgerTransaction}
      </div>
    </Fragment>
  );
};

export default Ledger;

