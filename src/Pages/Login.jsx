import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

    const {userlogin, setUser} = useContext(AuthContext);
    const  handleSubnit = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      userlogin(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      
      .catch((error) => {
        alert(error.code);
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
     

    };

    return (
        <div className="min-h-screen flex justify-center items-center">
    
          <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <h1 className="text-2xl font-bold text-center">Login your account</h1>
            <form onSubmit={handleSubnit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">Login</button>
              </div>
            </form>
            <p className="text-center font-semibold">
                Dont't Have An Account ? <Link to='/auth/register' className="text-sky-600">Register</Link>
            </p>
          </div>
        </div>
    
    );
};

export default Login;