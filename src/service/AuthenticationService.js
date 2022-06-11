import axios from "axios";
// import TodoDataService from "../../api/todo/TodoDataService";

export const authUser = 'authenticatedUser';

class AuthenticationService {

    // executeBasicAuthenticationService(username, password){
    //     return TodoDataService.login(username, password);
    // }

    // executeJwtAuthenticationService(username, password){
    //     return TodoDataService.jwtLogin(username, password);
    // }

    // registerSuccessfulLogin(username, password) {
    //     console.log("Logged In");
    //     let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);

    //     sessionStorage.setItem(authUser, username);
    //     this.setupAxiosInterceptors(basicAuthHeader);
    // }

    // registerSuccessfulLoginToken(username, token) {

    //     let authHeader = 'Bearer ' + token;
    //     sessionStorage.setItem(authUser, username);
    //     this.setupAxiosInterceptors(authHeader);
    // }

    // logout() {
    //     sessionStorage.removeItem(authUser);
    //     console.log("Log Out");
    // }
    isUserLoggedIn() {
        // let user = sessionStorage.getItem(authUser);
        // if (user === null)
        //     return false;
        // else
            return true;
    }
    // getLoggedInUserName() {
    //     if (sessionStorage.getItem(authUser) === null){
    //         return '';
    //     }
    //     else {
    //         return sessionStorage.getItem(authUser);
    //     }
    // }

    // setupAxiosInterceptors(basicAuthHeader){

    //     axios.interceptors.request.use((config) =>
    //     {
    //        // if (this.isUserLoggedIn()){
    //             config.headers.authorization = basicAuthHeader
    //         //}
    //         return config
    //     })
    // }
}


export default new AuthenticationService()