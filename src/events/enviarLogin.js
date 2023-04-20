import { sendEvent } from "./core/eventsFunctions";

function enviarLogin(email, password) {
    const infoLogin = {email, password};
    const encodedLogin = btoa(infoLogin);
    
    let result;

    sendEvent( encodedLogin )
      .then((response) => {
        result = response
      })
      .catch((err) => {
        result = {error: 'Error login'};
      });

    return result;
}

export {enviarLogin};