import React, { useState, useEffect, useContext } from "react";
import { ContextGeneral } from "../../context/GeneralContext";
import { createWorker } from "../core/worker";

import jwt from 'jsonwebtoken';

function ReceiverEvents() {
    const { updateUser } = useContext(ContextGeneral);

    const handleUpdateUser = (user) => {
        updateUser(user);
    };

    const eventHandler = (newEvent) => {
        if( newEvent?.body.type === "send_login" ) {
            const tokenStr = newEvent.body.data;
            const objUser = jwt.decode(tokenStr);

            handleUpdateUser( { idUser: objUser.idUser , idType: objUser.idType } );
        }
    } 

    useEffect(() => {
        const worker = createWorker((newEvents) => {
            // Agregar los nuevos eventos recibidos al estado
            newEvents.forEach(newEvent => {
                eventHandler( newEvent );
            });
        });

        // El worker se ejecutará en segundo plano y recibirá eventos continuamente

        return () => {
            // Cerrar el worker cuando se desmonte el componente
            worker.terminate();
        };
    }, []);

    return (
        <>
        </>
    );
}

export { ReceiverEvents };
