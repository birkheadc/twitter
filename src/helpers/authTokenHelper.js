export const setToken = (token) => {
    window.localStorage.setItem("AuthToken", token);
}

export const getToken = () => {
    return window.localStorage.getItem("AuthToken");
}

export const deleteToken = () => {
    window.localStorage.removeItem("AuthToken");
}