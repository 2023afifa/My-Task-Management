import { Link } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";

const Login = () => {
    const handleLogin = () => {

    }

    const handleGoogleLogIn = () => {

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center mx-20">
                <img className="max-h-screen" src="https://i.ibb.co/GMy4RVB/6343845.jpg" alt="" />
                <div className="flex-1">
                    <h2 className="text-center text-4xl text-blue-700 font-semibold pt-10 mb-10">Welcome Back!!!</h2>
                    <p className=" text-center">If you do not have any account <Link to="/signup"><span className="text-blue-700 font-semibold">Sign up</span></Link> here</p>
                    <p className="text-center">Or, You Can Login with <a onClick={handleGoogleLogIn} className="text-blue-700 font-semibold">Google</a></p>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered border-blue-700 rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered border-blue-700 rounded-3xl" required />
                        </div>
                        {/* {
                            errorMessage && <p className="text-center text-red-500">{errorMessage}</p>
                        } */}
                        <div className="mt-6 mx-auto">
                            <button className="btn normal-case text-lg bg-blue-700 text-white hover:bg-blue-600 rounded-3xl border-none">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;