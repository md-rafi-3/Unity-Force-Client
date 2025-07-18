import { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineEmail } from 'react-icons/md';
import { TbLockPassword } from 'react-icons/tb';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import loginLottie from '../assets/login.json';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthConrext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {userLogin,googleLogin}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password)
    userLogin(email,password).then((result) => {
      console.log(result.user)
     setTimeout(() => {
        navigate(`${location.state ? location.state : "/"}`)
      }, 1300)
    }).catch((error) => {
      console.log(error.message)
    })

  }

   const handleGoogleLogin=()=>{
       googleLogin().then(result=>{
        console.log(result.user)
         setTimeout(() => {
        navigate(`${location.state ? location.state : "/"}`)
      }, 1300)
       }).catch((error) => {
        console.log(error.message)
       })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-base-200 border border-gray-300/40 dark:border-gray-600/40 shadow-xl rounded-3xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
       
        <div className="p-6 flex items-center justify-center">
          <Lottie animationData={loginLottie} loop />
        </div>

       
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2 text-base-300">Welcome Back!</h1>
          <p className="text-sm text-base-300 mb-6">Enter your details below</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm text-base-300 flex items-center gap-1">
                <MdOutlineEmail size={18} />Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="w-full border-0 border-b-2 border-base-300 focus:border-blue-500 focus:outline-none py-2 text-base-300 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="text-sm text-base-300 flex items-center gap-1">
                <TbLockPassword size={18} />Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full border-0 border-b-2 border-base-300 focus:border-blue-500 focus:outline-none py-2 text-base-300 placeholder-gray-400 pr-10"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-base-300"
                >
                  {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" /> Remember me
              </label>
              <a href="#" className="hover:underline">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <div className="divider text-base-300">Or continue with</div>

          <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] w-full">
            <FcGoogle size={18} />Log in with Google
          </button>

          <p className="text-sm text-center text-gray-500 mt-6">
            Don’t have an account? <Link to="/signUp" className="link link-primary">Sign up </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
