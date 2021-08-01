console.log("i'm cookies.js")

function setCookie (key, value, options) {
    const expireDate = new Date('07/31/2021').toUTCString();
    document.cookie = `${key}=${value};Expires=${expireDate};Max-Age=10;SameSite=Strict`;
}
setCookie("test", "working");
