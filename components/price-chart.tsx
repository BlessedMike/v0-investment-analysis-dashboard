"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

const data = [
  { date: "Jan", price: 820 },
  { date: "Feb", price: 835 },
  { date: "Mar", price: 815 },
  { date: "Apr", price: 850 },
  { date: "May", price: 840 },
  { date: "Jun", price: 865 },
  { date: "Jul", price: 875 },
]

export function PriceChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Price History</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              1D
            </Button>
            <Button variant="outline" size="sm">
              1W
            </Button>
            <Button variant="outline" size="sm">
              1M
            </Button>
            <Button variant="default" size="sm">
              6M
            </Button>
            <Button variant="outline" size="sm">
              1Y
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="date" className="text-xs text-muted-foreground" stroke="currentColor" />
              <YAxis
                className="text-xs text-muted-foreground"
                stroke="currentColor"
                domain={["dataMin - 20", "dataMax + 20"]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  color: "hsl(var(--card-foreground))",
                }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--accent))", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  )
}
