"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2 } from "lucide-react"
import { motion } from "framer-motion"

export function CompanyInfo() {
  const company = {
    name: "NVIDIA Corporation",
    ticker: "NVDA",
    sector: "Technology",
    industry: "Semiconductors",
    employees: "26,196",
    founded: "1993",
    ceo: "Jensen Huang",
    headquarters: "Santa Clara, CA",
    description:
      "NVIDIA Corporation is a leading designer of graphics processing units (GPUs) for gaming, professional visualization, data centers, and automotive markets. The company has become a dominant force in AI computing infrastructure.",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-4">
          <Building2 className="h-5 w-5 text-primary" />
          <CardTitle>Company Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-foreground">{company.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{company.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground">Sector</p>
                <p className="text-sm font-medium">{company.sector}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Industry</p>
                <p className="text-sm font-medium">{company.industry}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">CEO</p>
                <p className="text-sm font-medium">{company.ceo}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Founded</p>
                <p className="text-sm font-medium">{company.founded}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Employees</p>
                <p className="text-sm font-medium">{company.employees}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">HQ</p>
                <p className="text-sm font-medium">{company.headquarters}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
