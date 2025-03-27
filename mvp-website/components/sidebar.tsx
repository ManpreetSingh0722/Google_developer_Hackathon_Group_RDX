"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, User, Bot, Calendar, HelpCircle, Settings, LogOut } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      name: "Home",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
    {
      name: "Bot",
      path: "/bot",
      icon: Bot,
    },
    {
      name: "Sessions",
      path: "/sessions",
      icon: Calendar,
    },
    {
      name: "Help Desk",
      path: "/help-desk",
      icon: HelpCircle,
    },
  ]

  return (
    <div className="h-screen w-16 border-r bg-white flex flex-col items-center py-4">
      <div className="mb-8">
        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
          <span className="text-blue-500 font-semibold">//</span>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-6 flex-1">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-md transition-colors",
              pathname === route.path
                ? "bg-blue-100 text-blue-600"
                : "text-gray-400 hover:text-gray-600 hover:bg-gray-100",
            )}
          >
            <route.icon className="h-5 w-5" />
          </Link>
        ))}

        <div className="flex-1"></div>

        <Link
          href="/settings"
          className="w-10 h-10 flex items-center justify-center rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
        >
          <Settings className="h-5 w-5" />
        </Link>

        <Link
          href="/logout"
          className="w-10 h-10 flex items-center justify-center rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
        >
          <LogOut className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}

