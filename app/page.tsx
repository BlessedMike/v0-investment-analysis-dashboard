import { DashboardLayout } from "@/components/dashboard-layout"
import { StockOverview } from "@/components/stock-overview"
import { PriceChart } from "@/components/price-chart"
import { AIInsights } from "@/components/ai-insights"
import { NewsSentiment } from "@/components/news-sentiment"
import { CompanyInfo } from "@/components/company-info"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <StockOverview />
          <CompanyInfo />
          <AIInsights />
        </div>

        <div className="grid gap-6 xl:grid-cols-5">
          <div className="xl:col-span-3">
            <PriceChart />
          </div>
          <div className="xl:col-span-2">
            <NewsSentiment />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
