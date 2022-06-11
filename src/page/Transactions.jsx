import { Fragment, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import LoadingSpinner from '../component/ui/LoadingSpinner'
import useHttp from "../hook/use-http";
import { getTransactions } from "../lib/api";


const Transactions = () => {

  const rows = [
    { id: 1, transactionType: "Buy", createdAt: '2019-05-12T09:12:37.000+00:00', size: 5, price: 200, fee: 10, total: 1010, completed: 0 },
    { id: 2, transactionType: 'Buy', createdAt: '2019-05-14T09:12:37.000+00:00', size: 10, price: 210, fee: 10.5, total: 2110.5, completed: 0 },
    { id: 3, transactionType: 'Buy', createdAt: '2019-05-20T09:12:37.000+00:00', size: 20, price: 230, fee: 11, total: 4611, completed: 0 },
  ];

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

  const { sendRequest, status, data: transactions } = useHttp(getTransactions);

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
          <DataGrid rows={transactions} columns={columns}
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
      <h1>Transactions</h1>

      <div style={{ height: 300, width: '100%' }}>
        {ledgerComponent}
      </div>
    </Fragment>
  );
};

export default Transactions;

