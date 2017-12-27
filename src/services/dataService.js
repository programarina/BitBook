import FetchDataService from "./fetchDataService";
import Profile from "../entities/profileDTO";
import UserDTO from "../entities/userDTO";
import VideoDTO from "../entities/videoDTO";
import PostDTO from "../entities/postDTO";
import ImageDTO from "../entities/imageDTO";

class DataService {
    constructor() {
        this.fetchDataService = new FetchDataService();
    }

    getProfile(profileDataHandler, errorHandler) {

        this.fetchDataService.get("profile", (response) => {
            const person = response.data;
            const profile = new Profile(person.name, person.avatarUrl, person.about, person.aboutShort, person.email, person.postsCount, person.commentsCount, person.userId);
            profileDataHandler(profile);
        }, errorMsg => errorHandler(errorMsg));
    };

    getUsers(usersDataHandler, errorHandler) {
        this.fetchDataService.get("users", response => {
            console.log(response);
            const arrOfUsers = response.data;

            const listOfUsers = arrOfUsers.map(user => {
                let userProfile = new UserDTO(user.aboutShort, user.avatarUrl, user.id, user.lastPostDate, user.name, user.about);
                return userProfile;
            });

            usersDataHandler(listOfUsers);
        }, (errorMsg) => errorHandler(errorMsg));
    }

  
    getUserProfile(userId, usersDataHandler, errorHandler) {
        this.fetchDataService.get(`users/${userId}`, response => {
            usersDataHandler(response);
        }, errorMsg => errorHandler(errorMsg));
    }

    updateProfile(profileData, profileDataHandler, errorHandler) {
        this.fetchDataService.put("Profiles", profileData, (response) => {
            profileDataHandler(response);
        }, errorMsg => errorHandler(errorMsg));
    }
}

export default DataService; 