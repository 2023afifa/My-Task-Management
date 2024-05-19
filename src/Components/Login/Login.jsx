import { Link, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleLoginUser, loginUser } from "../redux/features/user/userSlice";
import { useAddUsersMutation } from "../redux/features/user/userApi";

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { isLoading, email, name, photo } = useSelector((state) => state.userSlice);
    const [addUser] = useAddUsersMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(email);

    useEffect(() => {
        if (!isLoading && email) {
            navigate(location?.state ? location?.state : "/");
        }
    }, [isLoading, email])

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage("");

        dispatch(loginUser({ email, password }));

    }

    const handleGoogleLogIn = async () => {
        const resultAction = await dispatch(googleLoginUser());
        if (googleLoginUser.fulfilled.match(resultAction)) {
            const { email, name, photo } = resultAction.payload;
            await addUser({ email, name, photo });
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center mx-20">
                <img className="max-h-screen" src="https://i.ibb.co/GMy4RVB/6343845.jpg" alt="" />
                <div className="flex-1">
                    <h2 className="text-center text-4xl text-purple-700 font-semibold pt-10 mb-10">Welcome Back!!!</h2>
                    <p className=" text-center">If you do not have any account <Link to="/signup"><span className="text-purple-700 font-semibold">Sign up</span></Link> here</p>
                    <p className="text-center">Or, You Can Login with <a onClick={handleGoogleLogIn} className="text-purple-700 font-semibold cursor-pointer">Google</a></p>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered border-purple-700 rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered border-purple-700 rounded-3xl" required />
                        </div>
                        {
                            errorMessage && <p className="text-center text-red-500">{errorMessage}</p>
                        }
                        <div className="mt-6 mx-auto">
                            <button className="btn normal-case text-lg bg-purple-700 text-white hover:bg-purple-600 rounded-3xl border-none">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;