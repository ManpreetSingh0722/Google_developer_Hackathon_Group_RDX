import PageContainer from "@/components/page-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  return (
    <PageContainer title="Profile">
      <div className="p-6">
        <h1 className="text-xl font-bold mb-6">User profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="bg-gray-900 h-36 relative">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <Avatar className="h-20 w-20 border-4 border-white">
                  <AvatarImage src="/avatar.png" alt="John D. Morgan" />
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <CardContent className="pt-14">
              <div className="text-center mb-4">
                <h2 className="font-bold">John D. Morgan</h2>
                <p className="text-sm text-gray-500">User ID: 12345678</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Your Name</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">John D. Morgan</p>
                    <Badge variant="outline" className="text-xs">
                      edit
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Email Address</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">johnmorgan@gmail.com</p>
                    <Badge variant="outline" className="text-xs">
                      edit
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Phone Number</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">+1 (555) 123-4567</p>
                    <Badge variant="outline" className="text-xs">
                      edit
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Location</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">New York, NY</p>
                    <Badge variant="outline" className="text-xs">
                      edit
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Preference Details</CardTitle>
              <p className="text-xs text-gray-500">Manage your account preferences</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <div>
                    <h3 className="text-sm font-medium">Language</h3>
                    <p className="text-xs text-gray-500">Select your preferred language</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">English</span>
                    <Badge variant="outline" className="text-xs">
                      edit
                    </Badge>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-2 border-b">
                  <div>
                    <h3 className="text-sm font-medium">Time Zone</h3>
                    <p className="text-xs text-gray-500">Set your local time zone</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">UTC-05:00</span>
                    <Badge variant="outline" className="text-xs">
                      edit
                    </Badge>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-2 border-b">
                  <div>
                    <h3 className="text-sm font-medium">Notifications</h3>
                    <p className="text-xs text-gray-500">Manage notification settings</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">On</span>
                    <Badge variant="outline" className="text-xs">
                      edit
                    </Badge>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-medium">Two-Factor Auth</h3>
                    <p className="text-xs text-gray-500">Add extra security to your account</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Off</span>
                    <Badge variant="outline" className="text-xs">
                      edit
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  )
}

