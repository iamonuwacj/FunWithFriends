import React from 'react'
import CheckGender from './CheckGender'

const SignUp = () => {
  return (
    <div className='flex mx-auto min-w-96 justify-center items-center'>
      <div className='flex flex-col bg-gray-400 bg-opacity-0 w-full backdrop-filter backdrop-blur-lg bg-clip-padding p-6'>
        <h1 className='text-3xl font-semibold text-center text-gray-300 mb-5'>
          Sign Up <span className='text-blue-300'>Fun With Friends</span>
        </h1>
        <form>
          <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Full Name</span>
              </label>
              <input type="text" placeholder='John Doe' className='input h-10 input-bordered w-full'/>
          </div>
          <div>
              <label className='label p-2'>
                <span className='text-base label-text'>UserName</span>
              </label>
              <input type="text" placeholder='Johndoe' className='input h-10 input-bordered w-full'/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' className='input h-10 input-bordered w-full'/>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='input h-10 input-bordered w-full'/>
          </div>

          <CheckGender />

          <a href="#" className='text-[12px] w-full inline-block mt-2 px-2 hover:text-blue-400 hover:underline'>Already have account?</a>
          <div className='mt-3'>
            <button className='btn btn-sm w-full text-gray-300'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp