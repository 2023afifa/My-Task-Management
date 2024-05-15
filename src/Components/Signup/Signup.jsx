import { Link, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";
import { useEffect, useState } from "react";
import { createUser } from "../redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { isLoading, email } = useSelector((state) => state.userSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && email) {
            navigate("/");
        }
    }, [isLoading, email])

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(name, email, photo, password);

        setErrorMessage("");

        if (password.length < 6) {
            setErrorMessage("Password should be at least 6 characters");
            return;
        }

        dispatch(createUser({ email, password, name, photo }));
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center mx-20">
                <img className="max-h-screen" src="https://i.ibb.co/jbj8KPr/4707071.jpg" alt="" />
                <div className="flex-1">
                    <h2 className="text-center text-3xl text-fuchsia-700 font-bold pt-10">Join Us!!!</h2>
                    <p className="text-center">If you already have an account <Link to="/login"><span className="text-fuchsia-700 font-semibold">Login</span></Link> here</p>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered border-fuchsia-700 rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered border-fuchsia-700 rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered border-fuchsia-700 rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo" className="input input-bordered border-fuchsia-700 rounded-3xl" required />
                        </div>
                        {
                            errorMessage && <p className="text-center text-red-500">{errorMessage}</p>
                        }
                        <div className="mt-4 mx-auto">
                            <button className="btn normal-case px-5 border-none text-lg font-semibold bg-fuchsia-600 text-white rounded-3xl hover:bg-fuchsia-500">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;