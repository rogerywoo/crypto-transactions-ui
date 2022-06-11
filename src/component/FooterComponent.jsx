import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved </span>
            </footer>
        );
    }
}

export default FooterComponent