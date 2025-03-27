import type React from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import UserProfileSidebar from "@/components/user-profile-sidebar"

interface PageContainerProps {
  children: React.ReactNode
  title: string
  showUserProfile?: boolean
}

export default function PageContainer({ children, title, showUserProfile = true }: PageContainerProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title={title} />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-auto">{children}</div>
          {showUserProfile && <UserProfileSidebar />}
        </div>
      </div>
    </div>
  )
}

