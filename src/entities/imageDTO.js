export default class ImageDTO {
    constructor({imageUrl, id, dateCreated, userId,  userDisplayName, type, commentsNum}) {
        this._imageUrl= imageUrl;
        this._dateCreated = dateCreated;
        this._id = id;
        this._type = type;
        this._userDisplayName = userDisplayName;
        this._userId = userId;
        this._commentsNum = commentsNum;
        
    }


    get dateCreated() {
        return this._dateCreated;
    }
    set dateCreated(newValue) {
        this._dateCreated = newValue;
    }
    get id() {
        return this._id;
    }
    set id(newValue) {
        this._id = newValue;
    }
    get imageUrl() {
        return this._imageUrl;
    }
    set type(newValue) {
        this._type = newValue;
    }
    get type() {
        return this._type;
    }
    set imageUrl(newValue) {
        this._imageUrl = newValue;
    }
    get userDisplayName() {
        return this._userDisplayName;
    }
    set userDisplayName(newValue) {
        this._userDisplayName = newValue;
    }
    get userId() {
        return this._userId;
    }
    set userId(newValue) {
        this._userId = newValue;
    }
    get commentsNum() {
        return this._commentsNum;
    }
    set commentsNum(newValue) {
        this._commentsNum = newValue;
    }

}