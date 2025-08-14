import Footer from "@/components/custom_ui/footer/page"
import Header from "@/components/custom_ui/header/page"
import { AppSidebar } from "@/components/custom_ui/sidebar/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { cookies } from "next/headers"

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <div className='flex flex-1 flex-col gap-4 p-4'>
            <div className='py-4 sm:px-4 sm:py-6 md:px-6'>{children}</div>
          </div>
          <Footer />
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
