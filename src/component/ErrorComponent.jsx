import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import AuthenticationService from '../service/AuthenticationService';
class ErrorComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);

        return (
            <header>

                <nav className="navbar navbar-expand-md nav-bar-dark bg-dark">
                    <div><a href="http://www.in28minute3s.com" className="navbar-brand">in28Minutes</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li className="nav-link"><Link to="/welcome"> Home</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li className="nav-link"><Link to="/login"> Login</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link to="/logout" onClick={AuthenticationService.logout}> Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default ErrorComponent