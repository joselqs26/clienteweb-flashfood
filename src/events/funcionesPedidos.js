import { sendEvent } from "./core/eventsFunctions.js";

function enviarNuevoPedido(pedido) {
    const pedidoEncoded = btoa(JSON.stringify(pedido));

    console.log(pedidoEncoded);

    sendEvent('pedido',pedidoEncoded);
}

export { enviarNuevoPedido };