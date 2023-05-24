import React, { useState, useEffect, useContext } from "react";
import { ContextGeneral } from "../../context/GeneralContext";
import { createWorker } from "../core/worker";

import jwt from 'jsonwebtoken';

function ReceiverEvents() {
    const { user, updateUser, flagPedido, setFlagPedido } = useContext(ContextGeneral);
    const [ worker, setWorker ] = useState(null);

    const handleUpdateUser = (user) => {
        updateUser(user);
    };

    const eventHandler = (newEvent) => {
        if (newEvent?.body.type === "send_login") {
            const tokenStr = newEvent.body.data;
            const objUser = jwt.decode(tokenStr);

            handleUpdateUser({ idUser: objUser.idUser, idType: objUser.idType });
        } else if (newEvent?.body.type === "send_pedido" || newEvent?.body.type === "send_preparacion") {
            // const idNuevoPedido = newEvent.body.data;
            setFlagPedido(!flagPedido);
        }
    }

    useEffect(() => {
        worker?.terminate();

        // Crear el worker inicial cuando se monte el componente
        const newWorker = createWorker(user, (newEvents) => {
            newEvents.forEach(newEvent => {
                eventHandler(newEvent);
            });
        });

        setWorker(newWorker);
    }, [user]);

    useEffect(() => {
        return () => {
            // Cerrar el worker anterior cuando se desmonte el componente o se cambie 'user'
            worker?.terminate();
        };
    }, []);


    return (
        <>
        </>
    );
}

export { ReceiverEvents };