import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "พ.ย.", ปีนี้: 28000, ปีก่อน: 24000 },
  { month: "ธ.ค.", ปีนี้: 52000, ปีก่อน: 46000 },
  { month: "ม.ค.", ปีนี้: 78000, ปีก่อน: 71000 },
  { month: "ก.พ.", ปีนี้: 92000, ปีก่อน: 84000 },
  { month: "มี.ค.", ปีนี้: 115000, ปีก่อน: 98000 },
  { month: "เม.ย.", ปีนี้: 132000, ปีก่อน: 112000 },
];

export function ProductionChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="curr" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="prev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-chart-2)" stopOpacity={0.2} />
              <stop offset="100%" stopColor="var(--color-chart-2)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--color-border)"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            stroke="var(--color-muted-foreground)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="var(--color-muted-foreground)"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "0.75rem",
              fontSize: "12px",
              boxShadow: "var(--shadow-card)",
            }}
            formatter={(v: number) => `${v.toLocaleString()} ตัน`}
          />
          <Area
            type="monotone"
            dataKey="ปีก่อน"
            stroke="var(--color-chart-2)"
            strokeWidth={2}
            fill="url(#prev)"
            strokeDasharray="4 4"
          />
          <Area
            type="monotone"
            dataKey="ปีนี้"
            stroke="var(--color-primary)"
            strokeWidth={2.5}
            fill="url(#curr)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
