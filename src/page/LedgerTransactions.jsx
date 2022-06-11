import { Fragment, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from "react-router-dom";

import LoadingSpinner from '../component/ui/LoadingSpinner'
import useHttp from "../hook/use-http";
import { getLedgerTransaction } from "../lib/api";

const LedgerTransactions = () => {


  // const rows = [
  //   { id: 1, createdAt: '2019-06-20 00:00:00', transactionType: 'BUY', fee:10, price:200, productType:'ETH', ledgerSize: 1, size: 5, sizeUnitType: 2, total:1010 },
  //   { id: 4,  createdAt: '2019-06-20 00:00:00', transactionType: 'SELL',  fee:10, price:400, productType:'ETH', ledgerSize: 1, size: 1, sizeUnitType: 2, total:410 },
  // ];

  const columns = [
    { field: 'transactionId', headerName: 'T Id', width: 50 },
    { field: 'transactionType', headerName: 'Transaction', width: 100, sortable: false },    
    { field: 'createdAt', headerName: 'T Date', width: 150 },
    { field: 'fee', headerName: 'Fee', width: 150 },
    { field: 'total', headerName: 'T Price', width: 150 },
    { field: 'ledgerPrice', headerName: 'L Price ', width: 150, valueGetter: (param) => (param.row.fee / param.row.size) + param.row.price },
    { field: 'productType', headerName: 'Product', width: 150 },
    { field: 'size', headerName: 'L Size', width: 150 },
    { field: 'transactionSize', headerName: 'T Size', width: 150 },

  ];

  const params = useParams();

  const { ledgerId } = params;  // same as this  const quoteId = params.quoteId;

  const { sendRequest, status, data: ledgers } = useHttp(getLedgerTransaction);

  // Run after DOM has been updated.  If sendRequest has not changed, don't run.
  useEffect(() => {
    sendRequest(ledgerId);
  }, [sendRequest, ledgerId]);

  let ledgerComponent = [];
  switch (status) {
    case 'pending':
      ledgerComponent = (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )
      break;

    case 'completed':
      if (ledgers.length > 0) {
        ledgerComponent = (
          <DataGrid rows={ledgers} columns={columns}
            initialState={{
              sorting: {
                sortModel: [{ field: 'transactionType', sort: 'desc' }]
              }
            }} />
        )
      } else {
        ledgerComponent = (
          <p>No ledger transactions</p>
        )
      }
      break;

    default:
      ledgerComponent = (
        <p>Unknown Statu</p>
      )
  }
  return (
    <Fragment>
      <h1>Ledger Transaction for Ledger Id = {ledgerId} </h1>
      <div style={{ height: 300, width: '100%' }}>
        {ledgerComponent}
        {/* <DataGrid rows={rows} columns={columns} /> */}
      </div>
    </Fragment>
  );
};

export default LedgerTransactions;

