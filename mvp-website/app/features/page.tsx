import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features for Your Business
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Discover all the tools and capabilities that make our platform the perfect solution for your business
                needs.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/signup">
                <Button>Get Started</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="dashboard" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="dashboard" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Intuitive Dashboard</h2>
                  <p className="text-muted-foreground">
                    Our customizable dashboard gives you a complete overview of your business at a glance. Monitor key
                    metrics, track progress, and make informed decisions with real-time data.
                  </p>
                  <ul className="space-y-2">
                    {dashboardFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Dashboard Screenshot</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="collaboration" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Seamless Collaboration</h2>
                  <p className="text-muted-foreground">
                    Work together with your team in real-time, no matter where they are. Share files, assign tasks, and
                    communicate efficiently to boost productivity.
                  </p>
                  <ul className="space-y-2">
                    {collaborationFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Collaboration Screenshot</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Advanced Analytics</h2>
                  <p className="text-muted-foreground">
                    Gain valuable insights with our powerful analytics tools. Visualize data, identify trends, and make
                    data-driven decisions to grow your business.
                  </p>
                  <ul className="space-y-2">
                    {analyticsFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Analytics Screenshot</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter">Enterprise-Grade Security</h2>
                  <p className="text-muted-foreground">
                    Keep your data safe with our robust security features. We use industry-leading encryption and follow
                    best practices to protect your sensitive information.
                  </p>
                  <ul className="space-y-2">
                    {securityFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden border">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground">Security Screenshot</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">All Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Everything you need to manage and grow your business
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFeatures.map((feature, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join thousands of businesses that trust our platform to streamline their operations
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button className="w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const dashboardFeatures = [
  "Customizable widgets and layouts",
  "Real-time data updates",
  "Key performance indicators at a glance",
  "Task management integration",
  "Calendar and schedule overview",
]

const collaborationFeatures = [
  "Real-time document editing",
  "Team chat and messaging",
  "File sharing and storage",
  "Task assignment and tracking",
  "Meeting scheduling and video conferencing",
]

const analyticsFeatures = [
  "Interactive data visualizations",
  "Custom report generation",
  "Trend analysis and forecasting",
  "User behavior insights",
  "Export capabilities in multiple formats",
]

const securityFeatures = [
  "End-to-end encryption",
  "Two-factor authentication",
  "Role-based access control",
  "Regular security audits",
  "GDPR and CCPA compliance",
]

const allFeatures = [
  {
    title: "Project Management",
    description: "Organize and track your projects efficiently",
    items: [
      "Task creation and assignment",
      "Progress tracking",
      "Deadline management",
      "Resource allocation",
      "Project templates",
    ],
  },
  {
    title: "Communication",
    description: "Stay connected with your team",
    items: ["Team messaging", "Video conferencing", "Email integration", "Comment threads", "Notification system"],
  },
  {
    title: "Document Management",
    description: "Create, store, and share documents",
    items: [
      "Real-time collaboration",
      "Version history",
      "Document templates",
      "Secure storage",
      "Easy sharing options",
    ],
  },
  {
    title: "Reporting",
    description: "Generate insights from your data",
    items: [
      "Custom report builder",
      "Scheduled reports",
      "Export options",
      "Data visualization",
      "Performance metrics",
    ],
  },
  {
    title: "Integrations",
    description: "Connect with your favorite tools",
    items: [
      "API access",
      "Third-party app connections",
      "Data import/export",
      "Workflow automation",
      "Custom webhooks",
    ],
  },
  {
    title: "Mobile Access",
    description: "Work from anywhere",
    items: [
      "iOS and Android apps",
      "Responsive web design",
      "Offline capabilities",
      "Push notifications",
      "Touch-friendly interface",
    ],
  },
]

