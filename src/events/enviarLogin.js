import { sendEvent } from "./core/eventsFunctions.js";

function enviarLogin(email, password) {
    const infoLogin = {email, password};
    sendEvent( infoLogin );
}

export {enviarLogin};