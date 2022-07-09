// import React, { Component, useCallback, useMemo, useRef, useState } from 'react'
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import TransactionService from '../service/TransactionService';
// import { ProductType } from '../constant/Enum';
// import {AgGridCheckbox} from './common/GridComponents';
// import {TransactionComponent} from './TransactionComponent';


// export const ReconcileComponent = () => {
//     const gridRef = useRef();
//     const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
//     const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
//     const [rowData, setRowData] = useState();
//     const [columnDefs, setColumnDefs] = useState([
//         { headerName: "Id", field: "id", sortable: true, filter: true, width: 100, suppressAutoSize:true },
//         { headerName: "Trade Id", field: "tradeId", sortable: true, filter: true },
//         { headerName: "Product Type", field: "productType", sortable: true, filter: true },
//         { headerName: "Transaction Type", field: "transactionType", sortable: true, filter: true },
//         { headerName: "Date", field: "createdAt", sortable: true, filter: true },
//         { headerName: "Size", field: "size", sortable: true, filter: true },
//         { headerName: "Price", field: "price", sortable: true, filter: true },
//         { headerName: "Fee", field: "fee", sortable: true, filter: true },
//         { headerName: "Total", field: "total", sortable: true, filter: true },
//         { headerName: "Completed", field: "completed", sortable: true, filter: true,  cellRendererFramework: AgGridCheckbox  }
//     ]);

//     const defaultColDef = useMemo(() => {
//         return {
//             resizable: true,
//         };
//     }, []);

//     const onGridReady = useCallback((params) => {
//         TransactionService.retrieveAllTransactions(ProductType.ETH_USD)
//             .then(response => {
//                 console.log(response);
//                 setRowData(response.data);
//             })
//     });

//     const sizeToFit = useCallback(() => {
//         gridRef.current.api.sizeColumnsToFit();
//     }, []);

//     const autoSizeAll = useCallback((skipHeader) => {
//         const allColumnIds = [];
//         gridRef.current.columnApi.getAllColumns().forEach((column) => {
//             allColumnIds.push(column.getId());
//         });
//         gridRef.current.columnApi.autoSizeColumns(allColumnIds, skipHeader);
//     }, []);

//     return (
//         <>
//             <div>
//                 <h1>
//                     Reconcile Ledger
//                 </h1>
//             </div>
//             <TransactionComponent>
//             </TransactionComponent>
//         </>
//     );
// }
// export default ReconcileComponent

