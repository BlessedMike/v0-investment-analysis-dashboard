"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const newsItems = [
  {
    id: 1,
    title: "NVIDIA Announces New AI Chip Architecture",
    source: "TechCrunch",
    time: "2h ago",
    sentiment: "positive",
    score: 0.85,
  },
  {
    id: 2,
    title: "Q4 Earnings Beat Expectations by 12%",
    source: "Bloomberg",
    time: "5h ago",
    sentiment: "positive",
    score: 0.92,
  },
  {
    id: 3,
    title: "Supply Chain Concerns in Asian Markets",
    source: "Reuters",
    time: "8h ago",
    sentiment: "negative",
    score: -0.45,
  },
  {
    id: 4,
    title: "Partnership with Major Cloud Providers",
    source: "WSJ",
    time: "1d ago",
    sentiment: "positive",
    score: 0.78,
  },
  {
    id: 5,
    title: "Analyst Upgrades Price Target to $950",
    source: "CNBC",
    time: "1d ago",
    sentiment: "positive",
    score: 0.88,
  },
]

export function NewsSentiment() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Card className="hover:shadow-lg transition-shadow h-full">
        <CardHeader>
          <CardTitle>News Sentiment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div
                    className={cn(
                      "mt-1 h-2 w-2 rounded-full shrink-0",
                      item.sentiment === "positive" ? "bg-accent" : "bg-destructive",
                    )}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-relaxed text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground">{item.source}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{item.time}</span>
                      <Badge
                        variant="outline"
                        className={cn(
                          "ml-auto text-xs",
                          item.sentiment === "positive"
                            ? "bg-accent/10 text-accent-foreground border-accent"
                            : "bg-destructive/10 text-destructive-foreground border-destructive",
                        )}
                      >
                        {item.sentiment === "positive" ? "+" : ""}
                        {(item.score * 100).toFixed(0)}%
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
