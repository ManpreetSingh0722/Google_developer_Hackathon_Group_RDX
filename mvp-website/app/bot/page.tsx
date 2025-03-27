"use client"

import type React from "react"

import { useState } from "react"
import PageContainer from "@/components/page-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export default function BotPage() {
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState<{ type: "user" | "bot"; content: string }[]>([
    { type: "bot", content: "Hello! How can I help you today?" },
  ])

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message to chat
    setChatHistory((prev) => [...prev, { type: "user", content: message }])

    // Simulate bot response
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          type: "bot",
          content:
            "I'm your learning assistant bot. I can help you with course information, scheduling, and learning resources. What would you like to know?",
        },
      ])
    }, 1000)

    setMessage("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <PageContainer title="Bot">
      <div className="p-6">
        <Card className="h-[calc(100vh-140px)]">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-xl">HELP BOT!</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-[calc(100%-60px)]">
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {chatHistory.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.type === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your question here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}

