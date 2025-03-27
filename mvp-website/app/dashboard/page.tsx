import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart, LineChart, Activity, Users, CreditCard, DollarSign, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>Download Report</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.change > 0 ? "+" : ""}
                    {stat.change}% from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[200px] w-full bg-muted rounded-md flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Chart Placeholder</span>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>You had 12 activities this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`mr-4 rounded-full p-2 ${activity.bgColor}`}>
                        <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                      </div>
                      <div className="ml-auto text-sm text-muted-foreground">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2 h-10 w-10 flex items-center justify-center">
                    <span className="font-medium text-primary">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-base">{user.name}</CardTitle>
                    <CardDescription>{user.email}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">
                    <p className="text-muted-foreground mb-2">Last active: {user.lastActive}</p>
                    <Link href={`/users/${index + 1}`} className="text-primary flex items-center">
                      View Profile <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>View detailed analytics about your platform usage</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <div className="h-[300px] w-full bg-muted rounded-md flex items-center justify-center">
                <BarChart className="h-8 w-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Analytics Chart Placeholder</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>View and download reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{report.title}</p>
                      <p className="text-sm text-muted-foreground">{report.description}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Manage your notification settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-start space-x-4 border-b pb-4">
                    <div className={`rounded-full p-2 ${notification.bgColor}`}>
                      <notification.icon className={`h-4 w-4 ${notification.iconColor}`} />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{notification.title}</p>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Sample data
const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: 20.1,
    icon: DollarSign,
  },
  {
    title: "Subscriptions",
    value: "+2350",
    change: 10.5,
    icon: Users,
  },
  {
    title: "Sales",
    value: "+12,234",
    change: 5.2,
    icon: CreditCard,
  },
  {
    title: "Active Users",
    value: "+573",
    change: -2.5,
    icon: Activity,
  },
]

const activities = [
  {
    title: "New User Registration",
    description: "John Doe registered a new account",
    time: "2h ago",
    icon: Users,
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Subscription Upgraded",
    description: "Sarah Johnson upgraded to Pro plan",
    time: "5h ago",
    icon: CreditCard,
    bgColor: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    title: "Payment Received",
    description: "$299.00 payment received",
    time: "1d ago",
    icon: DollarSign,
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
]

const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    lastActive: "Today, 2:30 PM",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    lastActive: "Yesterday, 11:20 AM",
  },
  {
    name: "Michael Chen",
    email: "michael.c@example.com",
    lastActive: "Mar 20, 2023",
  },
]

const reports = [
  {
    title: "Monthly Revenue Report",
    description: "Revenue breakdown for March 2023",
  },
  {
    title: "User Activity Summary",
    description: "User engagement metrics for Q1 2023",
  },
  {
    title: "Subscription Analytics",
    description: "Subscription growth and churn analysis",
  },
  {
    title: "Marketing Campaign Results",
    description: "Performance metrics for recent campaigns",
  },
]

const notifications = [
  {
    title: "New Feature Available",
    message: "Check out our new analytics dashboard with improved visualizations",
    time: "Just now",
    icon: Activity,
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "System Maintenance",
    message: "Scheduled maintenance on March 30, 2023 from 2-4 AM UTC",
    time: "2 hours ago",
    icon: Activity,
    bgColor: "bg-yellow-500/10",
    iconColor: "text-yellow-500",
  },
  {
    title: "Payment Successful",
    message: "Your subscription has been renewed successfully",
    time: "Yesterday",
    icon: CreditCard,
    bgColor: "bg-green-500/10",
    iconColor: "text-green-500",
  },
]

