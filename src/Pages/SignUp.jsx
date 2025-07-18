import { useContext, useState } from 'react';
import { FaGoogle, FaRegUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineEmail } from 'react-icons/md';
import { TbLockPassword } from 'react-icons/tb';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import signUpLottie from '../assets/signUp.json';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router';
import { IoMdPhotos } from 'react-icons/io';
import { AuthContext } from '../Context/AuthConrext';
import Swal from 'sweetalert2';

const SignUp = () => {
  const {createUser,updateUser,googleLogin}=useContext(AuthContext)
  console.log(createUser)
  const [showPassword, setShowPassword] = useState(false);
  const location=useLocation()
  const navigate=useNavigate()
  const handleSignUp=(e)=>{
    e.preventDefault()
    const name=e.target.name.value;
    const photoURL=e.target.photoURL.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log({name,photoURL,email,password})
    const updatedData={
      displayName: name,
      photoURL: photoURL
    }

     
     // validation
    const upperCaseExp = /[A-Z]/.test(password);
    const lowerCaseExp = /[a-z]/.test(password);
    const lengthExp = password.length >= 6;


    if (!lengthExp) {
      Swal.fire({
        title: "Password must be at least 6 characters long.",
        icon: "error",
        draggable: true
      });
      return;
    }

    if (!upperCaseExp) {

      Swal.fire({
        title: "Password must contain at least one uppercase letter.",
        icon: "error",
        draggable: true
      });
      return;
    }
    if (!lowerCaseExp) {
      Swal.fire({
        title: "Password must contain at least one lowercase letter.",
        icon: "error",
        draggable: true
      });
      return;
    }





    createUser(email,password).then((result) => {
      console.log(result.user)
      updateUser(updatedData).then(() => {
        Swal.fire({
  position: "center",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
 setTimeout(() => {
        navigate(`${location.state ? location.state : "/"}`)
      }, 1300);
      }).catch((error) => {
        console.log(error.message)
      })
      

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
        {/* Left Image Section */}
        <div className="p-6 flex items-center justify-center">
          <Lottie animationData={signUpLottie} loop />
        </div>

        {/* Right Sign Up Form Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2 text-base-300">Create an Account</h1>
          <p className="text-sm text-base-300 mb-6">Enter your details below to sign up</p>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="text-sm text-base-300 flex items-center gap-1">
                <FaRegUser size={18} />Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border-0 border-b-2 border-base-300 focus:border-blue-500 focus:outline-none py-2 text-base-300 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="text-sm text-base-300 flex items-center gap-1">
                <IoMdPhotos size={18} />Photo URL
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder="Enter your photo URL"
                className="w-full border-0 border-b-2 border-base-300 focus:border-blue-500 focus:outline-none py-2 text-base-300 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="text-sm text-base-300 flex items-center gap-1">
                <MdOutlineEmail size={18} />Email
              </label>
              <input
                type="email"
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

            <button type="submit" className="btn btn-primary w-full">
              Sign Up
            </button>
          </form>

          <div className="divider text-base-300">Or continue with</div>

          <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] w-full">
            <FcGoogle size={18} />Sign up with Google
          </button>

          <p className="text-sm text-center text-gray-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
