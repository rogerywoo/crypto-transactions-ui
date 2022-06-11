import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import withNavigation from '../util/WithNavigation';
import withParams from '../util/WithParams';
import ErrorComponent from '../component/ErrorComponent';
import FooterComponent from '../component/FooterComponent';
import HeaderComponent from '../component/HeaderComponent';
import WelcomeComponent from '../component/WelcomeComponent';
import TransactionComponent from '../component/TransactionComponent';
import TransactionComponentTest from '../component/TransactionComponentTest';
import LedgerComponent from '../component/LedgerComponent';
import ReconcileComponent from '../component/ReconcileComponent';
import TestTableComponent from '../component/TestTableComponent';

class CryptoApp extends Component {

    render() {
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        return (
            <div className="cryptoApp">

                <Router>
                <HeaderComponentWithNavigation />
                    <Routes>
                        <Route path="" element={
                                <WelcomeComponentWithParams />
                            } 
                        />
                        <Route path="/welcome" element={
                                <WelcomeComponentWithParams />
                            } 
                        />
                        {/* <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponentWithNavigation />
                            </AuthenticatedRoute>
                        } /> */}

                        <Route path="/welcome/:name" element={
                            <WelcomeComponentWithParams />
                        } />

                        <Route path="/TestTable" element={
                            <TestTableComponent />
                        } />      
                          
                        <Route path="/Transaction" element={
                            <TransactionComponent />
                        } />

                        <Route path="/TransactionTest" element={
                            <TransactionComponentTest />
                        } />    
                        <Route path="/Ledger" element={
                            <LedgerComponent/>
                        } />
                        <Route path="/Reconcile" element={
                            <ReconcileComponent/>
                        } />

                        <Route path="*" element={<ErrorComponent />} />

                    </Routes>
                    <FooterComponent />
                </Router>

            </div>
        );
    }
}



export default CryptoApp