import { sendEvent } from "./core/eventsFunctions.js";

function enviarLogin(email, password) {
    const infoLogin = { email, password };
    const encodedLogin = btoa(JSON.stringify(infoLogin));

    console.log(encodedLogin);

    sendEvent('login',encodedLogin);
}

export { enviarLogin };