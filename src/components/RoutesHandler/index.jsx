import React, { useContext } from 'react'
import { useEffect } from 'react';
import { ContextGeneral } from '../../context/GeneralContext';

const RoutesHandler = () => {
    const { user } = useContext(ContextGeneral);

    useEffect(() => {
        
    }, [user])
    

    return (
        <></>
    )
}

export {RoutesHandler};