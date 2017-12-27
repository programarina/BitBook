export default class CommentDTO {
    constructor({id, dateCreated, body, postId, authorName, authorId}) {
        this._id = id;
        this._dateCreated = dateCreated;
        this._body = body;
        this._postId = postId;
        this._authorName = authorName;
        this._authorId = authorId;
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
    get body() {
        return this._body;
    }
    set body(newValue) {
        this._body = newValue;
    }
    get postId() {
        return this._postId;
    }
    set postId(newValue) {
        this._postId = newValue;
    }
    get authorName() {
        return this._authorName;
    }
    set authorName(newValue) {
        this._authorName = newValue;
    }
    get authorId() {
        return this._authorId;
    }
    set authorId(newValue) {
        this._authorId = newValue;
    }

}