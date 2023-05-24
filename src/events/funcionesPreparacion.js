import { sendEvent } from "./core/eventsFunctions.js";

function enviarNuevaPreparacion(idPedido) {
    const idPedidoEncoded = btoa(idPedido);

    console.log(idPedidoEncoded);

    sendEvent('preparacion',idPedidoEncoded);
}

export { enviarNuevaPreparacion };