import { Link } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";

const Signup = () => {

    const handleRegister = () => {

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
                            <input type="text" name="name" placeholder="name" className="input input-bordered border-fuchsia-700 rounded-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered border-fuchsia-700 rounded-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered border-fuchsia-700 rounded-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo" className="input input-bordered border-fuchsia-700 rounded-sm" required />
                        </div>
                        {/* {
                        errorMessage && <p className="text-center text-red-500">{errorMessage}</p>
                    } */}
                        <div className="mt-4 mx-auto">
                            <button className="btn normal-case border-none text-lg font-semibold bg-fuchsia-600 text-white rounded-3xl hover:bg-fuchsia-500">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;