"use client"

import { useState } from "react"
import PageContainer from "@/components/page-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { MoreVertical } from "lucide-react"

export default function HomePage() {
  const [showSignOutDialog, setShowSignOutDialog] = useState(false)

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  return (
    <PageContainer title="Home">
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-6">welcome back, user!</h1>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4 flex items-center gap-3">
              <div className="bg-blue-100 rounded-md p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">sessions</p>
                <p className="text-xs text-gray-500">3 upcoming</p>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-4 flex items-center gap-3">
              <div className="bg-red-100 rounded-md p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">notes</p>
                <p className="text-xs text-gray-500">5 unread</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Statistics</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-sm font-medium mb-4">Progress score</h3>

              <div className="relative h-40 mb-4">
                {/* SVG Chart - Simplified version of the chart in the mockup */}
                <svg width="100%" height="100%" viewBox="0 0 400 150" preserveAspectRatio="none">
                  <path
                    d="M0,75 C50,90 100,40 150,60 C200,80 250,30 300,50 C350,70 400,20 400,40"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                  <circle cx="225" cy="55" r="6" fill="#10B981" />
                  <text x="225" y="40" fontSize="10" textAnchor="middle">
                    8.5
                  </text>
                </svg>

                {/* Month labels */}
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  {months.map((month, index) => (
                    <span key={index}>{month}</span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Dialog open={showSignOutDialog} onOpenChange={setShowSignOutDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Are you sure you want to sign out?</DialogTitle>
              <DialogDescription>You will need to sign in again to access your account.</DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex flex-row justify-end gap-2 sm:justify-end">
              <Button variant="outline" onClick={() => setShowSignOutDialog(false)}>
                Cancel
              </Button>
              <Button variant="destructive">Sign out</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </PageContainer>
  )
}

