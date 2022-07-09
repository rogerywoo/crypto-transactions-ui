import { Fragment, useEffect } from "react";
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import LoadingSpinner from '../ui/LoadingSpinner'
import useHttp from "../../hook/use-http";
import { getTransactionsSoldUnReconciled } from "../../lib/api";



const TransactionComponent = (props) => {

  const columns = [
    { field: 'id', headerName: 'Id', width: 50, renderCell: (params) => <Link to ={`/ledger-transactions/${params.value}`}>{params.value}</Link>}, 
    { field: 'productType', headerName: 'Product', width: 100 },
    { field: 'transactionType', headerName: 'Transaction', width: 150 },
    { field: 'createdAt', headerName: 'Date', width: 150 },
    { field: 'size', headerName: 'Size', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'fee', headerName: 'Fee', width: 150 },
    { field: 'total', headerName: 'Total', width: 150 },
    { field: 'completed', headerName: 'Completed', width: 150 },
  ];

  const { sendRequest, status, data: transactions } = useHttp(props.transactionApi);

  // Run after DOM has been updated.  If sendRequest has not changed, don't run.
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let ledgerComponent;
  switch (status) {
    case 'pending':
      ledgerComponent = (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )
      break;

    case 'completed':
      if (transactions.length > 0) {
        ledgerComponent = (
          <DataGrid rows={transactions} columns={columns} components={{ Toolbar: GridToolbar }} density="compact"
          />
        )
      } else {
        ledgerComponent = (
          <p>No ledger transactions</p>
        )
      }
      break;
  }

  return (
    <Fragment>
      {ledgerComponent}
    </Fragment>
  );
};

export default TransactionComponent;

