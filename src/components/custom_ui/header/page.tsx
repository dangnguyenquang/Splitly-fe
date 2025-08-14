"use client"
import Button from "@/components/custom_ui/button/Button"
import { TagInput } from "@/components/custom_ui/Taginput/tagInput"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@radix-ui/react-separator"
import { Bell, Moon, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function Header() {
  const [tags, setTags] = useState([])
  const [emails, setEmails] = useState([])

  const changeHandler = (name: string, value: any) => {
    setEmails(value)
    setTags(value)
  }

  return (
    <header className='sticky top-0 z-40 w-full border-b bg-card backdrop-blur supports-[backdrop-filter]:bg-card'>
      <div className='container flex h-16 items-center justify-between px-3 sm:px-4 md:px-6 max-w-full'>
        <div className='flex items-center gap-2'>
          <SidebarTrigger className='-ml-1 cursor-pointer' />
          <Separator
            orientation='vertical'
            className='mr-2 data-[orientation=vertical]:h-4'
          />
        </div>
        <div className='flex items-center gap-3'>
          <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 text-foreground/60 hover:text-foreground'>
            <span className='sr-only'>Toggle theme</span>
            <Moon />
          </button>
          <button
            className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 text-foreground/60 hover:text-foreground relative'
            type='button'
            aria-haspopup='dialog'
            aria-expanded='false'
            aria-controls='radix-«r3»'
            data-state='closed'
          >
            <Settings />
            <span className='sr-only'>Settings</span>
            <span className='absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-teal-500'></span>
          </button>
          <button
            className='items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 w-10 relative text-foreground/60 hover:text-foreground hidden sm:flex'
            type='button'
            id='radix-«r6»'
            aria-haspopup='menu'
            aria-expanded='false'
            data-state='closed'
          >
            <Bell />
            <span className='sr-only'>Notifications</span>
            <span className='absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500'></span>
          </button>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button action='save'>New group</Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Create new group</DialogTitle>
                  <DialogDescription>
                    Make new group here. Click save when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4'>
                  <div className='grid gap-3'>
                    <Label htmlFor='name-1'>GroupName</Label>
                    <Input id='name-1' name='name' defaultValue='Pedro Duarte' />
                  </div>
                  <div className='grid gap-3'>
                    <Label htmlFor='name-1'>Members</Label>
                    <DialogDescription>
                      Group must be at least 3 members.
                    </DialogDescription>
                    <TagInput
                      id='email'
                      name='email'
                      placeholder='Add email'
                      onChange={changeHandler}
                      defaultTags={emails}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button action='cancel'>Cancel</Button>
                  </DialogClose>
                  <Button type='submit' action='save'>
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                className='aspect-square cursor-pointer'
                alt='User'
                src='https://placehold.net/avatar.svg'
                width={32}
                height={32}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='start'>
              <DropdownMenuLabel>
                <p>John Doe</p>
                <span className='font-normal text-gray-400'>john.doe@example.com</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href={"profile"}>
                  <DropdownMenuItem className='cursor-pointer'>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className='cursor-pointer'>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className='cursor-pointer'>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem className='cursor-pointer'>
                        Email
                      </DropdownMenuItem>
                      <DropdownMenuItem className='cursor-pointer'>
                        Message
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className='cursor-pointer'>
                        More...
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <Link href={"login"}>
                <DropdownMenuItem className='cursor-pointer'>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header
