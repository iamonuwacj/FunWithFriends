import React from 'react'

const Login = () => {
  return (
    <div className='mx-auto min-w-96 flex flex-col justify-center items-center'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login <span className='text-blue-300'>Fun With Friends</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>UserName</span>
            </label>
            <input type="text" placeholder='Enter username' className='input h-10 input-bordered w-full'/>
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='input h-10 input-bordered w-full'/>
          </div>
          <a href="#" className='text-[12px] hover:underline hover:text-blue-500 mt-2 inline-block'>
            Dont't have an account?
          </a>
          <div>
            <button className='btn btn-sm w-full mt-5'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login