"use client"

import type React from "react"

import { useState } from "react"
import { TrendingUp, Search, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={cn("min-h-screen", darkMode && "dark")}>
      {/* Top navbar */}
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-card px-6 shadow-sm sm:gap-x-6 lg:px-12">
        <div className="flex items-center gap-x-3">
          <TrendingUp className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground">InvestAI</span>
        </div>

        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form className="relative flex flex-1 max-w-2xl items-center" action="#" method="GET">
            <Search className="pointer-events-none absolute left-3 h-5 w-5 text-muted-foreground" />
            <Input type="search" placeholder="Search stocks..." className="w-full pl-10" />
          </form>
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <main className="py-8 px-6 lg:px-12 max-w-[1800px] mx-auto">{children}</main>
    </div>
  )
}
