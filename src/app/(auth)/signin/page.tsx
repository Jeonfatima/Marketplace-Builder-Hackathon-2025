import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div className="max-w-[1440px] p-10 flex justify-between items-center">
        {/* Main container */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-[80px] px-4 py-8">
          {/* Image Section */}
          <div className="flex-1 max-w-full lg:max-w-[50%] flex justify-center">
            <Image
              src="/signup.jpg"
              alt="Login Illustration"
              width={500}
              height={450}
              className="object-contain max-w-full"
              priority
            />
          </div>

          {/* Login Form Section */}
          <div className="w-full max-w-md p-6 bg-white rounded-lg pt-[10%]">
            <h1 className="text-3xl font-bold text-black mb-4">Log in to Exclusive</h1>
            <p className="text-lg text-gray-600 mb-6 p-3">Enter your details below</p>

            {/* Input Fields */}
            <form>
              <div className="mb-4 pt-3">
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div className="mb-6 pt-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Login Button */}
              <div className='flex flex-row justify-between'>
              <button
                type="submit"
                className="w-[143px] h-[56px] py-3 mt-4 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition"
              >
                Log in
              </button>
              <p className='text-red-600 pt-8'>
                Forget Password?
              </p>
              </div>
               {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Dont have an account?{' '}
                <a href="/signup" className="hover:underline text-red-700 text-lg font-bold">
                  Sign Up
                </a>
              </p>
            </div>
            </form>

           

          
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;