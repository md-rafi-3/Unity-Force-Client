import { FaGoogle, FaRegUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineEmail } from 'react-icons/md';
import { TbLockPassword } from 'react-icons/tb';
import signUpLottie from '../assets/signUp.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import { IoMdPhotos } from 'react-icons/io';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-base-200 border-2 border-blue-300 hover:border-blue-500 shadow-xl rounded-3xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Image Section */}
        <div className="p-6 flex items-center justify-center">
          <Lottie animationData={signUpLottie} loop />
        </div>

        {/* Right Sign Up Form Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2 text-base-300">Create an Account</h1>
          <p className="text-sm text-base-300 mb-6">Enter your details below to sign up</p>

          <form className="space-y-4">
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
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border-0 border-b-2 border-base-300 focus:border-blue-500 focus:outline-none py-2 text-base-300 placeholder-gray-400"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Sign Up
            </button>
          </form>

          <div className="divider text-base-300">Or continue with</div>

          <button className="btn bg-white text-black border-[#e5e5e5] w-full">
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
