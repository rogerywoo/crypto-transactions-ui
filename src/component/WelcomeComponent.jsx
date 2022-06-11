import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
// import HelloWorldService from '../../api/todo/HelloWorldService';

class WelcomeComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            welcomeMessage: 'Hello'
        }

        // this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        // this.handleSuccessfulResponse =  this.handleSuccessfulResponse.bind(this);
        // this.handleError =  this.handleError.bind(this);
    }
    render() {

        return (
            <>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome to Crypto-Transaction
                </div>
                <div className="container">
                    Click hear
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success"> Get Welcome Message</button>
                </div> 
                <div className="container">
                    {this.state.welcomeMessage}
                </div>            
            </>
        );
    }
    // retrieveWelcomeMessage(){
    //     console.log('retrieve clicked') ;
    //     HelloWorldService.executeHelloWorldPathVariableService(this.props.params.name)
    //     .then(response =>  this.handleSuccessfulResponse(response))
    //     .catch(error => this.handleError(error));
        
    //     // HelloWorldService.executeHelloWorldService()
    //     // .then(response =>  this.handleSuccessfulResponse(response));
    // }

    // handleSuccessfulResponse(response) {
    //     this.setState(
    //         {welcomeMessage: response.data.message})

    //     // this.setState(
    //     //     {welcomeMessage: response.data})
    // }

    handleError(error) {
        console.log(error.response);
        let errorMessage = '';
        if (error.message){
            errorMessage += error.message;
        }
        if (error.response && error.response.data){
            errorMessage += error.response.data.message;
        }

        this.setState(        
            {welcomeMessage: errorMessage});

        // this.setState(
        //     {welcomeMessage: response.data})
    }
}



export default WelcomeComponent