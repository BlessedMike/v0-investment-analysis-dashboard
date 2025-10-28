"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"
import { motion } from "framer-motion"

export function StockOverview() {
  const stock = {
    ticker: "NVDA",
    name: "NVIDIA Corporation",
    price: 875.42,
    change: 12.34,
    changePercent: 1.43,
    marketCap: "2.16T",
    peRatio: 68.5,
    aiRating: "Strong Buy",
    ratingScore: 9.2,
  }

  const isPositive = stock.change > 0

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Stock Overview</CardTitle>
          <Badge variant={isPositive ? "default" : "destructive"} className="gap-1">
            {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {isPositive ? "+" : ""}
            {stock.changePercent}%
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">${stock.price.toFixed(2)}</span>
                <span className={cn("text-sm font-medium", isPositive ? "text-accent" : "text-destructive")}>
                  {isPositive ? "+" : ""}
                  {stock.change.toFixed(2)}
                </span>
              </div>
              <div className="mt-1">
                <span className="text-lg font-semibold text-foreground">{stock.ticker}</span>
                <span className="ml-2 text-sm text-muted-foreground">{stock.name}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground">Market Cap</p>
                <p className="text-sm font-semibold">${stock.marketCap}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">P/E Ratio</p>
                <p className="text-sm font-semibold">{stock.peRatio}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">AI Rating</span>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent">
                    {stock.aiRating}
                  </Badge>
                  <span className="text-lg font-bold text-accent">{stock.ratingScore}/10</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
