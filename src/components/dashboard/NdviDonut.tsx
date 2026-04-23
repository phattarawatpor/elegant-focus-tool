import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "พืชอุดมหนา", value: 38, color: "var(--color-chart-3)" },
  { name: "อุดมปานกลาง", value: 32, color: "var(--color-primary)" },
  { name: "เริ่มต้น", value: 18, color: "var(--color-warning)" },
  { name: "พื้นว่าง/ไม่มีพืช", value: 8, color: "var(--color-chart-5)" },
  { name: "น้ำท่วม", value: 4, color: "var(--color-info)" },
];

export function NdviDonut() {
  const total = data.reduce((s, d) => s + d.value, 0);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <div className="relative size-44 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={3}
              stroke="none"
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{total}%</span>
          <span className="text-[11px] text-muted-foreground">ความสมบูรณ์</span>
        </div>
      </div>

      <div className="flex-1 space-y-2.5 w-full">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-3 text-sm">
            <span
              className="size-2.5 rounded-sm shrink-0"
              style={{ backgroundColor: d.color }}
            />
            <span className="flex-1 text-foreground/80">{d.name}</span>
            <span className="font-semibold tabular-nums">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
