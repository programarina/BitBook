import FetchDataService from "./fetchDataService";
import RedirectionService from "./redirectService";

class AuthenticationService {
    constructor() {
        this.serviceData = new FetchDataService();
        this.redirectService = new RedirectionService();
    }

    logIn(user,showSuccess, showError) {


        let userLoginUrl = "/login";
        this.serviceData.post(userLoginUrl, user, (response) => {
            sessionStorage.setItem("sessionId", response.data.sessionId);
            showSuccess();

        }, (error) => {
            showError(error);
        });
    }

    logOut() {
        sessionStorage.removeItem("sessionId");
        this.redirectService.redirect("/");
    }

    isUserAuthenticated() {
        return !!sessionStorage.getItem("sessionId");
    }
    register(user, registerError) {
        let userRegisterUrl = "/register";
        this.serviceData.post(userRegisterUrl, user, (response) => {
            this.redirectService.redirect("/login");
        }, (error) => {
            registerError(error);
        });
    }
}

export default AuthenticationService;