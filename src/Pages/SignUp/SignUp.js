import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Proveiders/AuthProvider';
import SocialLogin from '../Shared/Footer/SocialLogin/SocialLogin';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                return user.updateProfile({ displayName: form.name.value }); // Set the display name
            })
            .catch(error => console.log(error));
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Confirm Password" className="input input-bordered" required />

                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" name='submit' type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have An Account
                            <Link className='text-orange-600 font-extrabold'
                                to='/login'> Login Now !</Link></p>

                                <SocialLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;