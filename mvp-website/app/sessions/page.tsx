import PageContainer from "@/components/page-container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Video } from "lucide-react"

export default function SessionsPage() {
  return (
    <PageContainer title="Sessions">
      <div className="p-6">
        <h1 className="text-xl font-bold mb-6">Featured Courses</h1>
        <p className="text-sm text-gray-500 mb-6">Explore our Popular Courses</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Course E231</div>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>

              <h3 className="text-lg font-medium mb-2">Create an LMS Website With LearnPress</h3>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div>7 Weeks</div>
                <div>150 Students</div>
              </div>

              <Button className="w-full">Enroll Now</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">Course E231</div>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>

              <h3 className="text-lg font-medium mb-2">Create A Website Using ThemeForest</h3>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div>7 Weeks</div>
                <div>150 Students</div>
              </div>

              <Button className="w-full">Enroll Now</Button>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl font-bold mb-4">Upcoming Sessions:</h2>

        <Card className="mb-8">
          <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px] text-gray-500">
            <Video className="h-10 w-10 mb-4 text-gray-300" />
            <p>No Live Sessions Available</p>
          </CardContent>
        </Card>

        <h2 className="text-xl font-bold mb-4">Your Courses:</h2>

        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px] text-gray-500">
            <p>No Data To Display</p>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}

