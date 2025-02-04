"use client"
import React from 'react';
import Image from 'next/image';
import handleSubmitForm from '@/actions/signupAction';
import { useActionState } from "react";

const page = () => {

const [formState , formAction] = useActionState(handleSubmitForm, undefined)

  return (
    <div >
      <div className="max-w-[1440px]  flex justify-between p-10 items-center">
        {/* Main container */}
        <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-[80px] px-4 py-8">
          {/* Image Section */}
          <div className="flex-1 max-w-full lg:max-w-[50%] flex justify-center">
            <Image
              src="/signup.jpg"
              alt="Signup Illustration"
              width={500}
              height={450}
              className="object-contain max-w-full"
              priority
            />
          </div>

          {/* Sign-up Form Section */}
          <div className="w-full max-w-md p-6 bg-white  rounded-lg">
            <h1 className="text-2xl font-bold text-black mb-4">Create an account</h1>
            <p className="text-sm text-gray-600 mb-6">Enter your details below</p>

            {/* Input Fields */}
            <form action={formAction}>
              <div className="mb-4">
                <input
                  type="text"
                  name='name'
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name='email'
                  placeholder="Email or Phone Number"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  name='password'
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition"
              >
                Create Account
              </button>
            </form>
            {formState && <p>{formState}</p>}

            {/* Divider */}
            <div className="my-4 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-sm text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>


            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <a href="/signin" className="hover:underline text-red-700 text-lg font-bold">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;