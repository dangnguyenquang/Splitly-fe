import Button from "@/components/custom_ui/button/Button"
import Link from "next/link"

function Login() {
  return (
    <div className='max-w-md w-full mx-auto space-y-8 p-6'>
      <div className='text-center'>
        <div className='flex justify-center'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='relative h-10 w-10 flex items-center justify-center'>
              <div className='absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-md shadow-sm'></div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-dollar-sign relative text-white w-3/4 h-3/4'
              >
                <line x1='12' x2='12' y1='2' y2='22'></line>
                <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'></path>
              </svg>
            </div>
          </Link>
        </div>
        <h2 className='mt-4 text-3xl font-semibold'>Welcome back</h2>
        <p className='mt-2 text-gray-500'>Sign in to your Splitly account</p>
      </div>
      <div className='p-4 rounded-lg border border-gray-200 bg-white text-gray-900 shadow-md'>
        <div className='flex flex-col space-y-1.5 p-6'>
          <h3 className='text-2xl font-semibold'>Sign In</h3>
          <p className='text-sm text-gray-500'>
            Enter your credentials to access your account
          </p>
        </div>

        <div className='p-6 pt-0'>
          <form className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor='email' className='text-sm font-medium block'>
                Email
              </label>
              <input
                id='email'
                type='email'
                placeholder='name@example.com'
                // required
                className='w-full h-10 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500'
              />
            </div>

            <div className='space-y-2'>
              <div className='flex justify-between items-center'>
                <label htmlFor='password' className='text-sm font-medium'>
                  Password
                </label>
                <Link
                  href='/reset-password'
                  className='text-xs text-emerald-600 hover:underline'
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id='password'
                type='password'
                placeholder='••••••••'
                // required
                className='w-full h-10 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500'
              />
            </div>
            <div className='flex items-center space-x-2'>
              <input
                id='remember'
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer'
              />
              <label
                htmlFor='remember'
                className='text-sm font-medium text-gray-700 cursor-pointer select-none'
              >
                Remember me for 30 days
              </label>
            </div>

            {/* <Button type='submit'>Sign in</Button> */}
            <Link href={"dashboard"}>
              <Button type='button'>Sign in</Button>
            </Link>
          </form>
        </div>

        {/* Bottom link */}
        <div className='p-6 pt-0 text-center'>
          <p className='text-sm text-gray-500'>
            Don&apos;t have an account?
            <Link href='/register' className='text-emerald-600 hover:underline'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
