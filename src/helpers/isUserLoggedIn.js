export function isUserLoggedIn() {
    let token = window.localStorage.getItem("AuthToken");
    if (token === null || token === "") {
        return false;
    }
    return true;
}