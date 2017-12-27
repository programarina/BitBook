export default class PostDTO {
    constructor({ text, id, dateCreated, userId, userDisplayName, type, commentsNum }) {
        this._text = text;
        this._id = id;
        this._dateCreated = dateCreated;
        this._userId = userId;
        this._userDisplayName = userDisplayName;
        this._type = type;
        this._commentsNum = commentsNum;
    }
    get dateCreated() {
        return this._dateCreated;
    }
    set dateCreated(newValue) {
        this._dateCreated = newValue;
    }
    get commentsNum() {
        return this._commentsNum;
    }
    set commentsNum(newValue) {
        this._commentsNum = newValue;
    }
    get id() {
        return this._id;
    }
    set id(newValue) {
        this._id = newValue;
    }
    get text() {
        return this._text;
    }
    set type(newValue) {
        this._type = newValue;
    }
    get type() {
        return this._type;
    }
    set text(newValue) {
        this._text = newValue;
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




} 