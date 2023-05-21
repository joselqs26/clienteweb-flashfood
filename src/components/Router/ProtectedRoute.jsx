import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { ContextGeneral } from '../../context/GeneralContext';

const ProtectedRoute = ({idType, children}) => {
    const { user } = useContext(ContextGeneral);

    if( user && user?.idType === idType ) {
        return children;
    } else {
        return (<Navigate to="/login" />)
    }
}

export { ProtectedRoute };