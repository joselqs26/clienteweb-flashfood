import { sendEvent } from "./core/eventsFunctions.js";

// import jwt_decode from "jwt-decode";
// import { decode, verify } from "jsonwebtoken";

function enviarLogin(email, password) {
    const infoLogin = { email, password };
    const encodedLogin = btoa(JSON.stringify(infoLogin));

    console.log(encodedLogin);

    sendEvent('login',encodedLogin);
}

// function recibirLogin(token) {
//     // Decodificar el token
//     const decodedToken = jwt_decode(token);

//     // Verificar la firma del token
//     try {
//         const decoded = decode(token, { complete: true });
//         const verified = verify(token, secret);

//         console.log(decoded);
//     } catch (error) {
//         console.error(error);
//         return false;
//     }

//     // Verificar la expiración del token
//     const tokenExpired = Date.now() >= decodedToken.exp * 1000;
//     if (tokenExpired) {
//         console.log("El token ha expirado");
//         return false;
//     }

//     // Validación exitosa
//     return true;
// }

export { enviarLogin };