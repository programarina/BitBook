export default class VideoDTO {
    constructor({ videoUrl, id, dateCreated, userId, userDisplayName, type, commentsNum }) {
        this._videoUrl = videoUrl;
        this._id = id;
        this._dateCreated = dateCreated;
        this._userId = userId;
        this._userDisplayName = userDisplayName;
        this._type = type;
        this._commentsNum = commentsNum;
    }
    get videoUrl() {
        return this._videoUrl;
    }
    set videoUrl(newValue) {
        this._videoUrl = newValue;
    }
    get id() {
        return this._id;
    }
    set id(newValue) {
        this._id = newValue;
    }
    get dateCreated() {
        return this._dateCreated;
    }
    set dateCreated(newValue) {
        this._dateCreated = newValue;
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
    set type(newValue) {
        this._type = newValue;
    }
    get type() {
        return this._type;
    }
    get commentsNum() {
        return this._commentsNum;
    }
    set commentsNum(newValue) {
        this._commentsNum = newValue;
    }

}