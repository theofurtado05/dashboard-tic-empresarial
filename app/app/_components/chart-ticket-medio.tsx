"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

const chartData = [
  { browser: "Netflix", visitors: 32.90, fill: "var(--color-chrome)" },
  { browser: "Prime Video", visitors: 19.90, fill: "var(--color-safari)" },
  { browser: "HBO Max", visitors: 27.90, fill: "var(--color-firefox)" },
  { browser: "Disney", visitors: 33.90, fill: "var(--color-edge)" },
  { browser: "Globoplay", visitors: 22.90, fill: "var(--color-other)" },
  { browser: "Start+", visitors: 40.90, fill: "var(--color-other2)" },
  { browser: "Apple Tv+", visitors: 21.90, fill: "var(--color-other3)" },
  // { browser: "Others", visitors: 5, fill: "var(--color-other4)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
  other2: {
    label: "Other",
    color: "hsl(var(--chart-6))",
  },
  other3: {
    label: "Other",
    color: "hsl(var(--chart-7))",
  },
  other4: {
    label: "Other",
    color: "hsl(var(--chart-8))",
  },
} satisfies ChartConfig

export function ChartTicketMedio() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Preço dos planos</CardTitle>
        <CardDescription>Brasil</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          %
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Mostrando o preço dos planos de assinatura das plataformas
        </div>
      </CardFooter>
    </Card>
  )
}
