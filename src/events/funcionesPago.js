import { sendEvent } from "./core/eventsFunctions.js";

function enviarPago(idPedido) {
    const idPedidoEncoded = btoa(idPedido);

    console.log(idPedidoEncoded);

    sendEvent('pago',idPedidoEncoded);
}

export { enviarPago };