import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

  const {createNewUser, setUser} = useContext(AuthContext)

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log({name, photo, email, password});

    createNewUser(email, password)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });


  };
    return (
        <div className=" min-h-screen flex  justify-center items-center">
          <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <h1 className="text-2xl font-bold text-center">Register your account</h1>

            <form onSubmit={handelSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="Enter your name" name="name" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Enter your photo url" name="photo" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">Register</button>
              </div>
            </form>
            <p className="text-center font-semibold">
                Allready Have An Account ? <Link to='/auth/login' className="text-sky-600">Login</Link>
            </p>
          </div>
        </div>
    
    );
};

export default Register;