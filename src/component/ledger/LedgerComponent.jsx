import { Fragment, useEffect } from "react";
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

import LoadingSpinner from '../ui/LoadingSpinner'
import useHttp from "../../hook/use-http";
import { getAllLedgers }  from "../../lib/api";


const LedgerComponent = () => {

  const columns = [
    { field: 'ledgerId', headerName: 'Id', width: 150, renderCell: (params) => <Link to ={`/ledger/${params.value}`}>{params.value}</Link>},
    { field: 'soldAt', headerName: 'Date Sold', width: 150 },
    { field: 'size', headerName: 'Size', width: 150 },
    { field: 'proceed', headerName: 'Proceeds', width: 150 },
    { field: 'cost', headerName: 'Cost', width: 150 },
    { field: 'gain', headerName: 'Gain', width: 150 },
  ];

  const { sendRequest, status, data: ledgers } = useHttp(getAllLedgers);

  // Run after DOM has been updated.  If sendRequest has not changed, don't run.
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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
          <DataGrid rows={ledgers} columns={columns} />
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
      {ledgerComponent}
    </Fragment>
  );
};

export default LedgerComponent;

