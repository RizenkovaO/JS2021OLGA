console.log('Im cookies.js');

function setCokie (key, value, options) {
    const expireData = new Date('07/31/2021').toUTCString();
    document.cookie = `${key}=${value};
    Expires=${expireData};
    SameSite=Strict`;
}

setCokie('test', 'working');