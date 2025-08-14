"use client"

import {
  BookOpen,
  Frame,
  ListTodo,
  Map,
  PieChart,
  Settings,
  SquareTerminal,
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/custom_ui/sidebar/nav-main"
import { NavProjects } from "@/components/custom_ui/sidebar/nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://placehold.net/avatar.svg",
  },
  navMain: [
    {
      title: "Setting",
      url: "/setting",
      icon: Settings,
    },
    {
      title: "Lifecycle",
      url: "/dashboard",
      icon: ListTodo,
    },
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className='font-sans' collapsible='icon' {...props}>
      <SidebarHeader>
        <div className='flex h-16 shrink-0 items-center  px-3 py-4'>
          <Link className='flex items-center gap-2 ' href='/'>
            <div className='relative h-8 w-8 flex items-center justify-center'>
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
            <span className='font-semibold text-xl tracking-tight'>
              <span className='text-primary-text'>Split</span>
              <span>ly</span>
            </span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}
