
class Profile {
    constructor(name, avatarUrl, about, aboutShort, email, postsCount, commentsCount, userId) {
        this._name = name;
        this._avatarUrl = avatarUrl;
        this._postsCount = postsCount;
        this._commentsCount = commentsCount;
        this._about = about;
        this._aboutShort = aboutShort;
        this._email = email;
        this._userId = userId;
        
        
    }

    get name() {
        return this._name;
    }
    get avatarUrl() {
        return this._avatarUrl;
    }
    get postsCount() {
        return this._postsCount;
    }
    get commentsCount() {
        return this._commentsCount;
    }

    set name(newName) {
        this._name = newName;
    }
    set avatarUrl(newAvatarUrl) {
        this._avatarUrl = newAvatarUrl;
    }
    set postsCount(newPostsCount) {
        this._postsCount = newPostsCount;
    }
    set commentsCount(newCommentsCount) {
        this._commentsCount = newCommentsCount;
    }

    get about() {
        return this._about;
    }

    set about(value) {
        this._about = value;
    }

    get aboutShort() {
        return this._aboutShort;
    }

    set aboutShort(value) {
        this._aboutShort = value;
    }
    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }
    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
    }
}

export default Profile;




