import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Activity, FileText } from "lucide-react"
import Link from "next/link"

export default function UserProfilePage({ params }: { params: { id: string } }) {
  // Get user data based on ID
  const userId = Number.parseInt(params.id)
  const user = users.find((u) => u.id === userId) || users[0]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">User Profile</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
        <Card>
          <CardHeader className="flex flex-col items-center text-center space-y-2">
            <div className="relative">
              <div className="rounded-full bg-primary/10 p-2 h-24 w-24 flex items-center justify-center">
                <span className="font-bold text-3xl text-primary">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <Badge className="absolute bottom-0 right-0" variant={user.status === "Active" ? "default" : "secondary"}>
                {user.status}
              </Badge>
            </div>
            <div>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.role}</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{user.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{user.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{user.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Joined {user.joinDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Information</CardTitle>
                  <CardDescription>Detailed information about {user.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="font-medium mb-2">Personal Details</h3>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Full Name</dt>
                          <dd>{user.name}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Email</dt>
                          <dd>{user.email}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Phone</dt>
                          <dd>{user.phone}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Location</dt>
                          <dd>{user.location}</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Work Information</h3>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Role</dt>
                          <dd>{user.role}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Department</dt>
                          <dd>{user.department}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Status</dt>
                          <dd>
                            <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                          </dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-muted-foreground">Join Date</dt>
                          <dd>{user.joinDate}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>User's activity in the last 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                        <div className={`rounded-full p-2 ${activity.bgColor}`}>
                          <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                  <CardDescription>Complete history of user activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.activityLog.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                        <div className="rounded-full p-2 bg-muted">
                          <Activity className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.details}</p>
                          <p className="text-xs text-muted-foreground">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
                  <CardDescription>Files and documents associated with this user</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0"
                      >
                        <div className="flex items-center gap-4">
                          <div className="rounded-full p-2 bg-muted">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {doc.size} • {doc.type} • Uploaded {doc.uploadDate}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Settings</CardTitle>
                  <CardDescription>Manage user account settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Account Status</h3>
                        <p className="text-sm text-muted-foreground">Change the user's account status</p>
                      </div>
                      <Button variant={user.status === "Active" ? "destructive" : "default"}>
                        {user.status === "Active" ? "Deactivate" : "Activate"}
                      </Button>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Role Management</h3>
                        <p className="text-sm text-muted-foreground">Change the user's role and permissions</p>
                      </div>
                      <Button variant="outline">Edit Role</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Reset Password</h3>
                        <p className="text-sm text-muted-foreground">Send a password reset link to the user</p>
                      </div>
                      <Button variant="outline">Send Reset Link</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

// Sample data
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    role: "Product Manager",
    department: "Product",
    status: "Active",
    joinDate: "Jan 15, 2022",
    recentActivity: [
      {
        title: "Project Updated",
        description: "Updated the Marketing Campaign project",
        time: "2 hours ago",
        icon: Activity,
        bgColor: "bg-primary/10",
        iconColor: "text-primary",
      },
      {
        title: "Document Uploaded",
        description: "Uploaded Q1 Marketing Strategy.pdf",
        time: "Yesterday",
        icon: FileText,
        bgColor: "bg-blue-500/10",
        iconColor: "text-blue-500",
      },
      {
        title: "Meeting Scheduled",
        description: "Scheduled a team meeting for tomorrow",
        time: "3 days ago",
        icon: Calendar,
        bgColor: "bg-green-500/10",
        iconColor: "text-green-500",
      },
    ],
    activityLog: [
      {
        action: "Logged in",
        details: "User logged in from San Francisco, CA",
        date: "Today, 10:30 AM",
      },
      {
        action: "Updated project",
        details: "Made changes to Marketing Campaign project",
        date: "Today, 9:45 AM",
      },
      {
        action: "Uploaded document",
        details: "Uploaded Q1 Marketing Strategy.pdf",
        date: "Yesterday, 3:20 PM",
      },
      {
        action: "Created task",
        details: "Created task 'Finalize Q1 budget'",
        date: "Yesterday, 1:15 PM",
      },
      {
        action: "Scheduled meeting",
        details: "Scheduled team meeting for March 25, 2023",
        date: "3 days ago",
      },
    ],
    documents: [
      {
        name: "Q1 Marketing Strategy.pdf",
        size: "2.4 MB",
        type: "PDF",
        uploadDate: "Yesterday",
      },
      {
        name: "Team Budget 2023.xlsx",
        size: "1.8 MB",
        type: "Excel",
        uploadDate: "Last week",
      },
      {
        name: "Product Roadmap.pptx",
        size: "5.2 MB",
        type: "PowerPoint",
        uploadDate: "2 weeks ago",
      },
      {
        name: "User Research Results.docx",
        size: "3.1 MB",
        type: "Word",
        uploadDate: "Last month",
      },
    ],
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 987-6543",
    location: "New York, NY",
    role: "Senior Developer",
    department: "Engineering",
    status: "Active",
    joinDate: "Mar 10, 2021",
    recentActivity: [
      {
        title: "Code Committed",
        description: "Pushed 15 commits to the main branch",
        time: "1 hour ago",
        icon: Activity,
        bgColor: "bg-primary/10",
        iconColor: "text-primary",
      },
      {
        title: "Pull Request Created",
        description: "Created PR #123: Fix authentication bug",
        time: "Yesterday",
        icon: Activity,
        bgColor: "bg-blue-500/10",
        iconColor: "text-blue-500",
      },
      {
        title: "Issue Resolved",
        description: "Closed issue #456: API performance issue",
        time: "2 days ago",
        icon: Activity,
        bgColor: "bg-green-500/10",
        iconColor: "text-green-500",
      },
    ],
    activityLog: [
      {
        action: "Logged in",
        details: "User logged in from New York, NY",
        date: "Today, 9:15 AM",
      },
      {
        action: "Committed code",
        details: "Pushed 15 commits to the main branch",
        date: "Today, 8:30 AM",
      },
      {
        action: "Created pull request",
        details: "Created PR #123: Fix authentication bug",
        date: "Yesterday, 4:45 PM",
      },
      {
        action: "Resolved issue",
        details: "Closed issue #456: API performance issue",
        date: "2 days ago",
      },
      {
        action: "Code review",
        details: "Reviewed PR #120: Add new dashboard features",
        date: "3 days ago",
      },
    ],
    documents: [
      {
        name: "API Documentation.md",
        size: "156 KB",
        type: "Markdown",
        uploadDate: "Today",
      },
      {
        name: "System Architecture.pdf",
        size: "3.2 MB",
        type: "PDF",
        uploadDate: "Last week",
      },
      {
        name: "Code Review Guidelines.docx",
        size: "1.1 MB",
        type: "Word",
        uploadDate: "Last month",
      },
      {
        name: "Performance Benchmarks.xlsx",
        size: "2.3 MB",
        type: "Excel",
        uploadDate: "2 months ago",
      },
    ],
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.c@example.com",
    phone: "+1 (555) 234-5678",
    location: "Austin, TX",
    role: "Marketing Director",
    department: "Marketing",
    status: "Inactive",
    joinDate: "Jun 5, 2020",
    recentActivity: [
      {
        title: "Campaign Launched",
        description: "Launched Q2 Social Media Campaign",
        time: "3 days ago",
        icon: Activity,
        bgColor: "bg-primary/10",
        iconColor: "text-primary",
      },
      {
        title: "Report Generated",
        description: "Generated Q1 Marketing Performance Report",
        time: "1 week ago",
        icon: FileText,
        bgColor: "bg-blue-500/10",
        iconColor: "text-blue-500",
      },
      {
        title: "Budget Approved",
        description: "Q2 Marketing Budget approved",
        time: "2 weeks ago",
        icon: Activity,
        bgColor: "bg-green-500/10",
        iconColor: "text-green-500",
      },
    ],
    activityLog: [
      {
        action: "Account deactivated",
        details: "User account set to inactive",
        date: "2 days ago",
      },
      {
        action: "Launched campaign",
        details: "Launched Q2 Social Media Campaign",
        date: "3 days ago",
      },
      {
        action: "Generated report",
        details: "Generated Q1 Marketing Performance Report",
        date: "1 week ago",
      },
      {
        action: "Budget approved",
        details: "Q2 Marketing Budget approved",
        date: "2 weeks ago",
      },
      {
        action: "Meeting attended",
        details: "Attended Executive Strategy Meeting",
        date: "3 weeks ago",
      },
    ],
    documents: [
      {
        name: "Q1 Marketing Performance.pdf",
        size: "4.5 MB",
        type: "PDF",
        uploadDate: "1 week ago",
      },
      {
        name: "Social Media Strategy 2023.pptx",
        size: "6.2 MB",
        type: "PowerPoint",
        uploadDate: "2 weeks ago",
      },
      {
        name: "Competitor Analysis.xlsx",
        size: "2.8 MB",
        type: "Excel",
        uploadDate: "1 month ago",
      },
      {
        name: "Brand Guidelines.pdf",
        size: "8.3 MB",
        type: "PDF",
        uploadDate: "3 months ago",
      },
    ],
  },
]

