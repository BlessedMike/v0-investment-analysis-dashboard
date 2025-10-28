"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

export function AIInsights() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI Insights
          </CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Badge variant="outline" className="mb-3 bg-accent/10 text-accent-foreground border-accent">
                NVIDIA MCP Analysis
              </Badge>
              <p className="text-sm leading-relaxed text-muted-foreground">
                NVIDIA shows strong fundamentals with robust revenue growth driven by AI chip demand. The company
                maintains a dominant position in the GPU market with expanding margins.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Growth Potential</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={cn("h-2 w-8 rounded-full", i <= 4 ? "bg-accent" : "bg-muted")} />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Risk Level</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={cn("h-2 w-8 rounded-full", i <= 2 ? "bg-primary" : "bg-muted")} />
                  ))}
                </div>
              </div>
            </div>

            <Button className="w-full mt-4" variant="default">
              Run Full Analysis
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
