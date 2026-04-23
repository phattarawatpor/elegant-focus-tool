import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { factory: "SKT", ผลผลิต: 350015, เป้าหมาย: 380000 },
  { factory: "KPP", ผลผลิต: 285420, เป้าหมาย: 310000 },
  { factory: "SPB", ผลผลิต: 198350, เป้าหมาย: 220000 },
];

export function FactoryComparison() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--color-border)"
            vertical={false}
          />
          <XAxis
            dataKey="factory"
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
            cursor={{ fill: "var(--color-muted)" }}
          />
          <Legend
            wrapperStyle={{ fontSize: "12px" }}
            iconType="circle"
            iconSize={8}
          />
          <Bar
            dataKey="เป้าหมาย"
            fill="var(--color-muted)"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="ผลผลิต"
            fill="var(--color-primary)"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
