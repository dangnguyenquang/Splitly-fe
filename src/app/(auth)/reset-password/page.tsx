import Button from "@/components/custom_ui/button/Button"
import Link from "next/link"

function ResetPassword() {
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
        <h2 className='mt-4 text-3xl font-semibold'>Forgot Password</h2>
        <p className='mt-2 text-gray-500'>Reset your Splitly account password</p>
      </div>
      <div className='rounded-lg border bg-card text-card-foreground shadow-sm'>
        <div className='flex flex-col space-y-1.5 p-6'>
          <h3 className='text-2xl font-semibold leading-none tracking-tight'>
            Reset Password
          </h3>
          <p className='text-sm text-muted-foreground'>
            Enter your email address and we&apos;ll send you a link to reset your password
          </p>
        </div>
        <div className='p-6 pt-0'>
          <form className='space-y-4'>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='email'
              >
                Email
              </label>
              <div className='relative'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-muted-foreground'
                >
                  <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                  <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                </svg>
                <input
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary pl-10'
                  id='email'
                  placeholder='name@example.com'
                  required={true}
                  type='email'
                  defaultValue=''
                />
              </div>
            </div>
            <Button type='submit'>Send reset link</Button>
          </form>
        </div>
        <div className='items-center p-6 pt-0 flex justify-center'>
          <p className='text-sm text-muted-foreground'>
            Remember your password?{" "}
            <Link className='text-primary hover:underline' href='/login'>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
