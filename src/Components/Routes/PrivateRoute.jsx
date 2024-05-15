import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import PropTypes from "prop-types";
import { setUser, toggleLoading } from '../redux/features/user/userSlice';


const PrivateRoute = ({ children }) => {
    const { pathname } = useLocation();
    const { email, isLoading } = useSelector((state) => state.userSlice);
    console.log(email);


    if (isLoading) {
        return <span className="loading loading-dots loading-md"></span>;
    }

    if (!isLoading && !email) {
        return <Navigate to="/login" state={{ path: pathname }} />;
    }

    return children;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
}
