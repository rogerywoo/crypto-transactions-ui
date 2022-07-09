import { Fragment, useEffect } from "react";
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import LoadingSpinner from '../ui/LoadingSpinner'
import useHttp from "../../hook/use-http";
import { getTransactionsSoldUnReconciled } from "../../lib/api";
import TransactionComponent from "./TransactionComponent";


const SellTransactionComponent = (props) => {


  return (
    <Fragment>
      <TransactionComponent transactionApi={getTransactionsSoldUnReconciled} />
    </Fragment>
  );
};

export default SellTransactionComponent;

