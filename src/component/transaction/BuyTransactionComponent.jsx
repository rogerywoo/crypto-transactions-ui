import { Fragment, useEffect } from "react";
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import LoadingSpinner from '../ui/LoadingSpinner'
import useHttp from "../../hook/use-http";
import { getTransactionsBoughtUnReconciled } from "../../lib/api";
import TransactionComponent from "./TransactionComponent";


const BuyTransactionComponent = (props) => {


  return (
    <Fragment>
      <TransactionComponent transactionApi={getTransactionsBoughtUnReconciled}/>
    </Fragment>
  );
};

export default BuyTransactionComponent;

