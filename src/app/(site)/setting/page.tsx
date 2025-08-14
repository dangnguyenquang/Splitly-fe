"use client"
import Button from "@/components/custom_ui/button/Button"
import { TagInput } from "@/components/custom_ui/Taginput/tagInput"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Label } from "@/components/ui/label"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Crown, UserMinus } from "lucide-react"
import { useState } from "react"
function Setting() {
  const members = [
    {
      user_id: 1,
      username: "john_doe",
      phone: "0987654321",
      email: "john.doe@example.com",
      gender: "Male",
    },
    {
      user_id: 2,
      username: "jane_smith",
      phone: "0912345678",
      email: "jane.smith@example.com",
      gender: "Female",
    },
    {
      user_id: 3,
      username: "david_nguyen",
      phone: "0901122334",
      email: "david.nguyen@gmail.com",
      gender: "Male",
    },
    {
      user_id: 4,
      username: "linda_pham",
      phone: "0933445566",
      email: "linda.pham@yahoo.com",
      gender: "Female",
    },
    {
      user_id: 5,
      username: "michael_lee",
      phone: "0966778899",
      email: "michael.lee@example.com",
      gender: "Male",
    },
    {
      user_id: 6,
      username: "sophia_tran",
      phone: "0977332211",
      email: "sophia.tran@gmail.com",
      gender: "Female",
    },
    {
      user_id: 7,
      username: "kevin_bui",
      phone: "0922113344",
      email: "kevin.bui@example.com",
      gender: "Male",
    },
    {
      user_id: 8,
      username: "emma_vo",
      phone: "0944556677",
      email: "emma.vo@gmail.com",
      gender: "Female",
    },
    {
      user_id: 9,
      username: "tony_ng",
      phone: "0955667788",
      email: "tony.ng@outlook.com",
      gender: "Male",
    },
    {
      user_id: 10,
      username: "amy_le",
      phone: "0909090909",
      email: "amy.le@yahoo.com",
      gender: "Female",
    },
  ]

  const [tags, setTags] = useState([])
  const [emails, setEmails] = useState([])

  const changeHandler = (name: string, value: any) => {
    setEmails(value)
    setTags(value)
  }

  return (
    <div className='font-sans px-4 py-6 mx-auto max-w-8xl'>
      <div>
        <div className='mb-4 sm:mb-6'>
          <h1 className='text-xl sm:text-2xl font-semibold'>Settings</h1>
          <p className='text-muted-foreground text-sm'>
            Manage your account preferences and settings.
          </p>
        </div>
        <div className='rounded-lg border bg-card text-card-foreground shadow-sm'>
          <div className='flex flex-col space-y-1.5 p-6'>
            <h3 className='text-2xl font-semibold leading-none tracking-tight'>
              Group Settings
            </h3>
            <p className='text-sm text-muted-foreground'>
              Manage your group preferences and settings.
            </p>
          </div>
          <div className='p-6 pt-0'>
            <Tabs defaultValue='account' className='w-full'>
              <TabsList>
                <TabsTrigger value='account' className='cursor-pointer'>
                  Profile
                </TabsTrigger>
                <TabsTrigger value='password' className='cursor-pointer'>
                  Members
                </TabsTrigger>
              </TabsList>
              <TabsContent value='account'>
                <div className='mb-4'>
                  <h3 className='text-lg font-medium'>Group Information</h3>
                  <p className='text-sm text-muted-foreground'>
                    Update your group details information.
                  </p>
                </div>
                <Separator className='mb-4' />
                <div className='grid grid-cols-1  gap-4'>
                  <div className='space-y-2'>
                    <label
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      htmlFor='group-name'
                    >
                      Group Name
                    </label>
                    <input
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary'
                      id='group-name'
                      defaultValue='abc'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      htmlFor='group-name'
                    >
                      Leader
                    </label>
                    <input
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary'
                      id='group-name'
                      defaultValue='abc'
                    />
                  </div>
                  <div className='space-y-2'>
                    <label
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                      htmlFor='group-name'
                    >
                      Number of member
                    </label>
                    <input
                      className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary'
                      id='group-name'
                      defaultValue='abc'
                    />
                  </div>
                  <div className='items-center p-6 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-end'>
                    <Button action='cancel'>Cancel</Button>
                    <Button action='save'>Save Changes</Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value='password'>
                <div className='mb-4'>
                  <h3 className='text-lg font-medium'>Group Information</h3>
                  <p className='text-sm text-muted-foreground'>
                    Update your group details information.
                  </p>
                </div>
                <Separator className='mb-4' />
                <div className='mb-4'>
                  <div>
                    <Label htmlFor='addMember' className='mb-2'>
                      Add members
                    </Label>
                    <TagInput
                      id='email'
                      name='addMember'
                      placeholder='Add email'
                      onChange={changeHandler}
                      defaultTags={emails}
                    />
                  </div>
                  <div className='items-center p-6 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-end'>
                    <Button action='cancel'>Cancel</Button>
                    <Button action='save'>Save Changes</Button>
                  </div>
                </div>
                <div className='p-6 border-1 border-gray-200 rounded-2xl'>
                  <Table>
                    <TableHeader>
                      <TableRow className='select-none'>
                        <TableHead className='w-[100px]'>ID</TableHead>
                        <TableHead>Username</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className=''>Phone</TableHead>
                        <TableHead className=''>Gender</TableHead>
                        <TableHead className=''></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {members.map((member, id) => {
                        return (
                          <TableRow key={id}>
                            <TableCell className='font-medium'>
                              {member.user_id}
                            </TableCell>
                            <TableCell>{member.username}</TableCell>
                            <TableCell>{member.email}</TableCell>
                            <TableCell>{member.phone}</TableCell>
                            <TableCell>{member.gender}</TableCell>
                            <TableCell className='w-fit'>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span>
                                    <AlertDialog>
                                      <AlertDialogTrigger asChild>
                                        <UserMinus className='cursor-pointer text-gray-400 hover:text-gray-800 hover:scale-105 transition-all' />
                                      </AlertDialogTrigger>
                                      <AlertDialogContent>
                                        <AlertDialogHeader>
                                          <AlertDialogTitle>
                                            Are you absolutely sure?
                                          </AlertDialogTitle>
                                          <AlertDialogDescription>
                                            This action cannot be undone. This user will
                                            be kicked from your group.
                                          </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                          <AlertDialogCancel className='cursor-pointer'>
                                            Cancel
                                          </AlertDialogCancel>
                                          <AlertDialogAction className='cursor-pointer'>
                                            Continue
                                          </AlertDialogAction>
                                        </AlertDialogFooter>
                                      </AlertDialogContent>
                                    </AlertDialog>
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Kick member</p>
                                </TooltipContent>
                              </Tooltip>
                            </TableCell>
                            <TableCell className='w-fit'>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span>
                                    <AlertDialog>
                                      <AlertDialogTrigger asChild>
                                        <Crown className='cursor-pointer text-orange-400 hover:scale-105 transition-all' />
                                      </AlertDialogTrigger>
                                      <AlertDialogContent>
                                        <AlertDialogHeader>
                                          <AlertDialogTitle>
                                            Are you absolutely sure?
                                          </AlertDialogTitle>
                                          <AlertDialogDescription>
                                            This action cannot be undone. This will
                                            empower other users to become the group
                                            leader. And you will become a normal member of
                                            the group.
                                          </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                          <AlertDialogCancel className='cursor-pointer'>
                                            Cancel
                                          </AlertDialogCancel>
                                          <AlertDialogAction className='cursor-pointer'>
                                            Continue
                                          </AlertDialogAction>
                                        </AlertDialogFooter>
                                      </AlertDialogContent>
                                    </AlertDialog>
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Empower leading</p>
                                </TooltipContent>
                              </Tooltip>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href='#' />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href='#'>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href='#'>10</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href='#' />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
