import { sendEvent } from "./core/eventsFunctions";

function enviarLogin(email, password) {
    const encodedEmail = btoa(email);
    const encodedPassword = btoa(password);
    
    let result;

    sendEvent( { email: encodedEmail , password: encodedPassword } )
      .then((response) => {
        result = response
      })
      .catch((err) => {
        result = {error: 'Error login'};
      });

    return result;
}

export {enviarLogin};