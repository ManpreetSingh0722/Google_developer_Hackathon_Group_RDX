import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function UserProfileSidebar() {
  return (
    <div className="w-64 border-l bg-white p-4 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">User profile</h3>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/avatar.png" alt="John D. Morgan" />
          <AvatarFallback>JM</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-sm">John D. Morgan</p>
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="text-xs px-1 py-0 h-4 rounded-sm font-normal">
              5
            </Badge>
            <span className="text-xs text-gray-500">courses</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="bg-amber-50 rounded-md p-2 flex flex-col items-center">
          <div className="bg-amber-100 rounded-md p-1 mb-1">
            <span className="text-amber-600 text-xs font-medium">67%</span>
          </div>
          <span className="text-xs text-gray-500">content</span>
          <span className="text-xs text-gray-500">done</span>
        </div>

        <div className="bg-red-50 rounded-md p-2 flex flex-col items-center">
          <div className="bg-red-100 rounded-md p-1 mb-1">
            <span className="text-red-600 text-xs font-medium">33%</span>
          </div>
          <span className="text-xs text-gray-500">videos</span>
          <span className="text-xs text-gray-500">watched</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="bg-blue-50 rounded-md p-2 flex flex-col items-center">
          <div className="bg-blue-100 rounded-md p-1 mb-1">
            <span className="text-blue-600 text-xs font-medium">2</span>
          </div>
          <span className="text-xs text-gray-500">sessions</span>
          <span className="text-xs text-gray-500">upcoming</span>
        </div>

        <div className="bg-green-50 rounded-md p-2 flex flex-col items-center">
          <div className="bg-green-100 rounded-md p-1 mb-1">
            <span className="text-green-600 text-xs font-medium">68%</span>
          </div>
          <span className="text-xs text-gray-500">notes</span>
          <span className="text-xs text-gray-500">completed</span>
        </div>
      </div>

      <div className="mt-auto text-center text-xs text-gray-400">
        <p>© 2023 All Rights Reserved</p>
      </div>
    </div>
  )
}

