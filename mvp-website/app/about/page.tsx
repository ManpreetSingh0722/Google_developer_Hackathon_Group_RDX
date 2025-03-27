import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Company</h1>
              <p className="text-muted-foreground md:text-xl">
                We're on a mission to simplify business operations and help companies grow through innovative technology
                solutions.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Company Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <p className="text-muted-foreground md:text-xl">How we started and where we're headed</p>
            </div>
            <div className="space-y-4">
              <p>
                Founded in 2018, our company began with a simple idea: to create tools that make business operations
                easier and more efficient. What started as a small team of three passionate entrepreneurs has grown into
                a thriving company serving thousands of customers worldwide.
              </p>
              <p>
                Our journey hasn't always been smooth, but our commitment to innovation and customer satisfaction has
                remained unwavering. We've learned from our challenges and celebrated our successes, all while staying
                true to our core values.
              </p>
              <p>
                Today, we're proud to offer a comprehensive platform that helps businesses of all sizes streamline their
                workflows, collaborate effectively, and achieve their goals. And we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="space-y-2 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
            <p className="text-muted-foreground md:text-xl">The talented people behind our success</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-background p-1 w-32 h-32 flex items-center justify-center">
                  <div className="rounded-full bg-muted w-full h-full flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
                <p className="text-center text-sm text-muted-foreground max-w-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-2 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
            <p className="text-muted-foreground md:text-xl">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="space-y-2 border rounded-lg p-6 bg-background">
                <h3 className="font-bold text-xl">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Journey</h2>
            <p className="text-muted-foreground md:text-xl">
              We're always looking for talented individuals to join our team
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/careers">
                <Button>View Open Positions</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Co-Founder",
    bio: "Alex has over 15 years of experience in the tech industry and is passionate about creating tools that make businesses more efficient.",
  },
  {
    name: "Maria Rodriguez",
    role: "CTO",
    bio: "With a background in computer science and AI, Maria leads our technical team in developing cutting-edge solutions.",
  },
  {
    name: "David Chen",
    role: "Head of Product",
    bio: "David ensures our products meet the highest standards of quality and user experience through thoughtful design and rigorous testing.",
  },
  {
    name: "Sarah Kim",
    role: "Head of Marketing",
    bio: "Sarah brings creative strategies to help us connect with customers and share our story with the world.",
  },
  {
    name: "James Wilson",
    role: "Customer Success Lead",
    bio: "James is dedicated to ensuring our customers get the most value from our platform through excellent support and training.",
  },
  {
    name: "Priya Patel",
    role: "Lead Developer",
    bio: "Priya is a coding wizard who transforms complex problems into elegant solutions with clean, efficient code.",
  },
]

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and explore new ideas to create better solutions for our customers.",
  },
  {
    title: "Integrity",
    description: "We believe in transparency, honesty, and doing what's right, even when it's difficult.",
  },
  {
    title: "Customer Focus",
    description: "Our customers are at the heart of everything we do. Their success is our success.",
  },
  {
    title: "Collaboration",
    description: "We work together across teams, valuing diverse perspectives to achieve common goals.",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in all aspects of our work, never settling for 'good enough'.",
  },
  {
    title: "Empowerment",
    description: "We believe in empowering our team and our customers to reach their full potential.",
  },
]

