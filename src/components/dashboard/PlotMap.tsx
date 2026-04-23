import { MapPin } from "lucide-react";

const plots = [
  { x: 8, y: 18, w: 18, h: 9, color: "var(--color-warning)" },
  { x: 30, y: 15, w: 22, h: 11, color: "var(--color-chart-3)" },
  { x: 56, y: 12, w: 24, h: 10, color: "var(--color-chart-3)" },
  { x: 12, y: 32, w: 16, h: 8, color: "var(--color-primary)" },
  { x: 32, y: 34, w: 20, h: 10, color: "var(--color-chart-3)" },
  { x: 56, y: 36, w: 14, h: 8, color: "var(--color-chart-5)" },
  { x: 74, y: 32, w: 20, h: 10, color: "var(--color-warning)" },
  { x: 4, y: 50, w: 14, h: 9, color: "var(--color-info)" },
  { x: 22, y: 52, w: 22, h: 9, color: "var(--color-primary)" },
  { x: 48, y: 50, w: 22, h: 10, color: "var(--color-chart-3)" },
  { x: 74, y: 52, w: 20, h: 9, color: "var(--color-warning)" },
];

const legend = [
  { label: "พืชอุดมหนา (0.60+)", color: "var(--color-chart-3)" },
  { label: "อุดมปานกลาง (0.30-0.60)", color: "var(--color-primary)" },
  { label: "เริ่มต้น (0.10-0.30)", color: "var(--color-warning)" },
  { label: "พื้นว่าง/ไม่มีพืช", color: "var(--color-chart-5)" },
  { label: "น้ำท่วม", color: "var(--color-info)" },
];

export function PlotMap() {
  return (
    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary-soft via-secondary to-accent/40 border border-border">
      {plots.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-md shadow-sm transition-transform hover:scale-105 hover:z-10 cursor-pointer"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.w}%`,
            height: `${p.h}%`,
            backgroundColor: p.color,
            opacity: 0.85,
          }}
        />
      ))}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
          <div className="relative size-8 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-elevated">
            <MapPin className="size-4" />
          </div>
        </div>
      </div>

      <div className="absolute top-3 left-3 backdrop-blur-md bg-card/90 border border-border rounded-lg p-3 space-y-1.5 shadow-soft">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
          NDVI Legend
        </p>
        {legend.map((l) => (
          <div key={l.label} className="flex items-center gap-2 text-[11px]">
            <span
              className="size-2.5 rounded-sm"
              style={{ backgroundColor: l.color }}
            />
            <span>{l.label}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 right-3 backdrop-blur-md bg-card/90 border border-border rounded-lg px-3 py-1.5 text-[10px] text-muted-foreground">
        © Lovable Earth · NDVI 2026
      </div>
    </div>
  );
}
