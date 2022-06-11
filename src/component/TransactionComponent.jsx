
import React, { Component, useCallback, useMemo, useRef, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import TransactionService from '../service/TransactionService';
import {ProductType} from '../constant/Enum';
export class TransactionComponent extends Component {
    constructor(props) {
        super(props);

        this.refreshTransactions = this.refreshTransactions.bind(this);


        this.state = {
            columnDefs: [
                { headerName: "Id", field: "id", sortable: true, filter: true },
                { headerName: "Trade Id", field: "tradeId", sortable: true, filter: true },
                { headerName: "Product Type", field: "productType", sortable: true, filter: true },
                { headerName: "Transaction Type", field: "transactionType", sortable: true, filter: true },
                { headerName: "Date", field: "createdAt", sortable: true, filter: true },
                { headerName: "Size", field: "size", sortable: true, filter: true },
                { headerName: "Price", field: "price", sortable: true, filter: true },
                { headerName: "Fee", field: "fee", sortable: true, filter: true },
                { headerName: "Total", field: "total", sortable: true, filter: true },
                { headerName: "Completed", field: "completed", sortable: true, filter: true }
            ],
            rowData: []
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.refreshTransactions();

    }

    refreshTransactions(){
        TransactionService.retrieveAllTransactions(ProductType.ETH_USD)
            .then(response =>{
                console.log(response);
                this.setState(
                    {rowData: response.data}   
                )
            })
    }

    render() {
        return (
            <>
                <div>
                    <h1>
                        Transactions
                    </h1>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body position-relative">
                                <div className="ag-theme-alpine" style={{ height: "550px" }}>
                                    <AgGridReact
                                        columnDefs={this.state.columnDefs}
                                        rowData={this.state.rowData}
                                    >
                                    </AgGridReact>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}
export default TransactionComponent

