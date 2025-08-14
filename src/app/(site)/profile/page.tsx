import Button from "@/components/custom_ui/button/Button"
import { Calendar, ChevronDown, Clock, LogOut, Mail, Pencil, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function Profile() {
  return (
    <div className='font-sans container px-4 py-6 mx-auto max-w-5xl'>
      <div className='mb-6 md:mb-8'>
        <h1 className='text-2xl md:text-3xl font-bold tracking-tight'>Profile</h1>
        <p className='text-muted-foreground mt-1'>
          Manage your personal information and preferences.
        </p>
      </div>
      <div className='hidden md:grid md:grid-cols-[280px_1fr] md:gap-8'>
        <div className='space-y-6'>
          <div className='rounded-lg border bg-card text-card-foreground border-none shadow-md'>
            <div className='p-6'>
              <div className='flex flex-col items-center space-y-4'>
                <div className='relative group'>
                  <div className='w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-background shadow-md'>
                    <Image
                      width={128}
                      height={128}
                      className='object-cover w-full h-full transition-transform '
                      alt='Profile'
                      src={"https://placehold.net/avatar.svg"}
                    />
                  </div>
                  <button className='cursor-pointer flex items-center justify-center  font-medium disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 absolute bottom-0 right-0 rounded-full shadow-md h-8 w-8 md:h-10 md:w-10'>
                    <Pencil size={16} />
                    {/* <span className='sr-only'>Edit Profile Picture</span> */}
                  </button>
                </div>
                <div className='text-center'>
                  <h2 className='text-xl font-bold'>John Doe</h2>
                  <p className='text-sm text-muted-foreground flex items-center justify-center mt-1'>
                    <Mail size={16} className='mr-1.5' />
                    john.doe@example.com
                  </p>
                </div>
                <div
                  data-orientation='horizontal'
                  role='none'
                  className='shrink-0 bg-border h-[1px] w-full'
                ></div>
                <div className='w-full space-y-3'>
                  <div className='flex justify-between items-center text-sm'>
                    <span className='text-muted-foreground flex items-center'>
                      <Calendar size={16} className='mr-1.5' />
                      Member since
                    </span>
                    <span className='font-medium'>Jan 15, 2023</span>
                  </div>
                  <div className='flex justify-between items-center text-sm'>
                    <span className='text-muted-foreground flex items-center'>
                      <Clock size={16} className='mr-1.5' />
                      Last login
                    </span>
                    <span className='font-medium'>Today, 10:30 AM</span>
                  </div>
                </div>
                <Link href={"login"} className='w-full'>
                  <Button action='cancel' className='w-full'>
                    <LogOut size={16} className='mr-1.5' />
                    Sign Out
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='space-y-6'>
          <div className='rounded-lg border bg-card text-card-foreground border-none shadow-md'>
            <div className='flex flex-col space-y-1.5 p-6'>
              <h3 className='text-2xl font-semibold leading-none tracking-tight'>
                Personal Information
              </h3>
              <p className='text-sm text-muted-foreground'>
                Update your personal details.
              </p>
            </div>
            <div className='p-6 pt-0 space-y-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='first-name'
                  >
                    First Name
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary'
                    id='first-name'
                    defaultValue='John'
                  />
                </div>
                <div className='space-y-2'>
                  <label
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    htmlFor='last-name'
                  >
                    Last Name
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary'
                    id='last-name'
                    defaultValue='Doe'
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
                  <Mail
                    size={16}
                    className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground'
                  />
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary pl-10'
                    id='email'
                    type='email'
                    defaultValue='john.doe@example.com'
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <label
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  htmlFor='phone'
                >
                  Phone Number
                </label>
                <div className='relative'>
                  <Phone
                    size={16}
                    className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground'
                  />
                  <input
                    className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary pl-10'
                    id='phone'
                    type='tel'
                    defaultValue='+84 123456789'
                  />
                </div>
              </div>
            </div>
            <div className='items-center p-6 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between'>
              <Button action='cancel'>Cancel</Button>
              <Button action='save'>Save Changes</Button>
            </div>
          </div>
          <div className='rounded-lg border bg-card text-card-foreground border-none shadow-md'>
            <div className='flex flex-col space-y-1.5 p-6'>
              <h3 className='text-2xl font-semibold leading-none tracking-tight'>
                Financial Preferences
              </h3>
              <p className='text-sm text-muted-foreground'>
                Set your default financial preferences.
              </p>
            </div>
            <div className='p-6 pt-0 space-y-4'>
              <div className='space-y-2'>
                <label
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  htmlFor='default-currency'
                >
                  Default Currency
                </label>
                <button
                  type='button'
                  role='combobox'
                  aria-controls='radix-«r4n»'
                  aria-expanded='false'
                  aria-autocomplete='none'
                  dir='ltr'
                  data-state='closed'
                  className='flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1'
                  id='default-currency'
                >
                  <span>USD - US Dollar</span>
                  <ChevronDown size={16} className='h-4 w-4 opacity-50' />
                </button>
              </div>
              <div className='space-y-2'>
                <label
                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                  htmlFor='default-wallet'
                >
                  Default Wallet
                </label>
                <button
                  type='button'
                  role='combobox'
                  aria-controls='radix-«r4o»'
                  aria-expanded='false'
                  aria-autocomplete='none'
                  dir='ltr'
                  data-state='closed'
                  className='flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1'
                  id='default-wallet'
                >
                  <span>Main Savings</span>
                  <ChevronDown size={16} className='h-4 w-4 opacity-50' />
                </button>
              </div>
            </div>
            <div className='items-center p-6 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between'>
              <Button action='cancel'>Reset</Button>
              <Button action='save'>Save Preferences</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
