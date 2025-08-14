"use client"
import Button from "@/components/custom_ui/button/Button"
import Link from "next/link"
import { useState } from "react"

function Register() {
  const [checked, setChecked] = useState(false)
  return (
    <div className='max-w-lg w-full mx-auto space-y-8 p-6'>
      <div className='text-center'>
        <div className='flex justify-center'>
          <Link className='flex items-center gap-2 ' href='/'>
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
                className='lucide lucide-dollar-sign relative textWhite w-3/4 h-3/4'
              >
                <line x1='12' x2='12' y1='2' y2='22'></line>
                <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'></path>
              </svg>
            </div>
          </Link>
        </div>
        <h2 className='mt-4 text-3xl font-semibold'>Create an account</h2>
        <p className='mt-2 text-muted-foreground'>
          Sign up for Splitly to manage your finances
        </p>
      </div>
      <div className='rounded-lg border bg-card text-card-foreground shadow-sm'>
        <div className='flex flex-col space-y-1.5 p-6'>
          <h3 className='text-2xl font-semibold leading-none tracking-tight'>Sign Up</h3>
          <p className='text-sm text-muted-foreground'>
            Enter your information to create an account
          </p>
        </div>
        <div className='p-6 pt-0'>
          <form className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <label
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  htmlFor='firstName'
                >
                  First Name
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
                    className='lucide lucide-user absolute left-3 top-3 h-4 w-4 text-muted-foreground'
                  >
                    <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
                    <circle cx='12' cy='7' r='4'></circle>
                  </svg>
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary pl-10'
                    id='firstName'
                    placeholder='John'
                    required={true}
                    defaultValue=''
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <label
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  htmlFor='lastName'
                >
                  Last Name
                </label>
                <input
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary'
                  id='lastName'
                  placeholder='Doe'
                  required={true}
                  defaultValue=''
                />
              </div>
            </div>
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
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='password'
              >
                Password
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
                  className='lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground'
                >
                  <rect width='18' height='11' x='3' y='11' rx='2' ry='2'></rect>
                  <path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
                </svg>
                <input
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary pl-10'
                  id='password'
                  placeholder='••••••••'
                  required={true}
                  type='password'
                  defaultValue=''
                />
              </div>
              <p className='text-xs text-muted-foreground'>
                Password must be at least 8 characters long and include a number and a
                special character.
              </p>
            </div>
            <div className='space-y-2'>
              <label
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                htmlFor='confirmPassword'
              >
                Confirm Password
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
                  className='lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground'
                >
                  <rect width='18' height='11' x='3' y='11' rx='2' ry='2'></rect>
                  <path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
                </svg>
                <input
                  className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary pl-10'
                  id='confirmPassword'
                  placeholder='••••••••'
                  required={true}
                  type='password'
                  defaultValue=''
                />
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <button
                type='button'
                role='checkbox'
                aria-checked={checked}
                data-state={checked ? "checked" : "unchecked"}
                onClick={() => setChecked((prev) => !prev)}
                className={`peer h-4 w-4 shrink-0 rounded-sm border border-primary
          ring-offset-background focus-visible:outline-none focus-visible:ring-2 
          focus-visible:ring-ring focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer
          ${checked ? "bg-primary text-white" : ""}
        `}
                id='terms'
              ></button>

              <input
                type='checkbox'
                checked={checked}
                readOnly
                style={{
                  transform: "translateX(-100%)",
                  position: "absolute",
                  pointerEvents: "none",
                  opacity: 0,
                  margin: 0,
                  width: "16px",
                  height: "16px",
                }}
              />

              <label
                className='font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base select-none'
                htmlFor='terms'
              >
                I agree to the{" "}
                <Link className='text-primary-text hover:underline' href='#'>
                  Terms of Service
                </Link>{" "}
                and{" "}
                <a className='text-primary-text hover:underline' href='#'>
                  Privacy Policy
                </a>
              </label>
            </div>
            <Button type='submit'>Create account</Button>
          </form>
        </div>
        <div className='items-center p-6 pt-0 flex justify-center'>
          <p className='text-sm text-muted-foreground'>
            Already have an account?
            <Link className='text-primary hover:underline' href='/login'>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
