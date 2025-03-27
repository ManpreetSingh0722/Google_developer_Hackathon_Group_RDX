import PageContainer from "@/components/page-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HelpDeskPage() {
  return (
    <PageContainer title="Help Desk">
      <div className="p-6">
        <h1 className="text-xl font-bold mb-2">Contact Our Counsellors</h1>
        <p className="text-sm text-gray-500 mb-6">
          Need help with your mental health? Talk with our counsellors about anything you want.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 px-2 py-1 rounded">
                  Session: 10am-12pm
                </Badge>
              </div>

              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback>YG</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Yuri Gagarin</h3>
                  <p className="text-sm text-gray-500">yuri@example.com</p>
                  <p className="text-xs text-gray-400">License: LMFT-12345</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 px-2 py-1 rounded">
                  Session: 4pm-6pm
                </Badge>
              </div>

              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Alex Kapranos</h3>
                  <p className="text-sm text-gray-500">alex@example.com</p>
                  <p className="text-xs text-gray-400">License: LCSW-67890</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Current Chat</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex gap-4 mb-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/avatar.png" alt="John D. Morgan" />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">John D. Morgan</h3>
                <p className="text-xs text-gray-400">User ID: 12345678</p>
              </div>
            </div>

            <div className="border rounded-lg p-4 mb-4">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>BE</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Bridget Emmett</h3>
                  <p className="text-xs text-gray-400">Counselor • LCSW-87654321</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Next Reward:</h4>
                <div className="bg-gray-100 rounded-md p-3 flex items-center gap-3">
                  <div className="bg-black rounded-full p-1">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">SPOTIFY Premium $9 Month</p>
                    <p className="text-xs text-gray-500">3/4 of 12</p>
                  </div>
                </div>
              </div>

              <Button className="w-full">Start Session</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}

