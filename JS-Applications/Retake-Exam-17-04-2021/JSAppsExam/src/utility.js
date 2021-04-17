export function getUserData() {
    const user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    } else {
        return undefined;
    }
}

export function setUserData(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function clearUserData() {
    localStorage.removeItem("user");
}
