import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from "prop-types";
import Loading from '../Loading/Loading';


const PrivateRoute = ({ children }) => {
    const { pathname } = useLocation();
    const { email, isLoading } = useSelector((state) => state.userSlice);
    console.log(email);


    if (isLoading) {
        return <Loading></Loading>;
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
