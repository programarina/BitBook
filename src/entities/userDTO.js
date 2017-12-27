class UserDTO {
    constructor(aboutShort, avatarUrl, id, lastPostDate, name) {
        this._aboutShort = aboutShort;
        this._avatarUrl = avatarUrl;
        this._id = id;
        this._lastPostDate = lastPostDate;
        this._name = name;
    }
    get aboutShort() {
        return this._aboutShort;
    }
    set aboutShort(newValue) {
        this._aboutShort = newValue;
    }
    
    get avatarUrl() {
        return this._avatarUrl;
    }
    set avatarUrl(newValue) {
        this._avatarUrl = newValue;
    }
    get id() {
        return this._id;
    }
    set id(newValue) {
        this._id = newValue;
    }
    get lastPostDate() {
        return this._lastPostDate;
    }
    set lastPostDate(newValue) {
        this._lastPostDate = newValue;
    }
    get name() {
        return this._name;
    }
    set name(newValue) {
        this._name = newValue;
    }

}

export default UserDTO;