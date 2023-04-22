import { sendEvent } from "./core/eventsFunctions.js";

function enviarLogin(email, password) {
    const infoLogin = {email, password};
    const encodedLogin = btoa(infoLogin);
    sendEvent( encodedLogin );
}

export {enviarLogin};