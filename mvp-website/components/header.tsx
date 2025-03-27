import Link from "next/link"
import { Bell, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="h-16 border-b bg-white flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
          <span className="text-blue-500 font-semibold">//</span>
        </div>
        <span className="text-sm text-gray-500">you think • you manage</span>
      </div>

      <div className="flex-1 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input type="search" placeholder="Search..." className="w-full bg-gray-50 border-gray-200 pl-8 rounded-md" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-gray-400">
          <Bell className="h-5 w-5" />
        </Button>

        <Link href="/profile">
          <Avatar>
            <AvatarImage src="/avatar.png" alt="John D. Morgan" />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  )
}

