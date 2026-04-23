import { Download, Filter, FileText, Camera, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const rows = [
  { code: "08042-09", season: "69/70", round: 202603, side: "1", zone: "121", farmerCode: "08042", farmer: "นาย รบกฤต เกิดทรัพย์", ndvi: 0.265, area: 3.2043, tonPerRai: 5.5498, total: 19.0652, perRai: 6.9 },
  { code: "02983-13", season: "69/70", round: 202603, side: "B", zone: "B1103", farmerCode: "08843", farmer: "นาย แลบ กูระพงษ์", ndvi: 0.2456, area: 17.2563, tonPerRai: 5.4042, total: 93.2567, perRai: 6.73 },
  { code: "08840-34", season: "69/70", round: 202603, side: "7", zone: "706", farmerCode: "08840", farmer: "นาย อภิชาติ บ้านนั้น", ndvi: 0.3148, area: 32.0615, tonPerRai: 7.4445, total: 238.6819, perRai: 10.72 },
  { code: "07221-02", season: "69/70", round: 202603, side: "3", zone: "504", farmerCode: "07221", farmer: "นาง สมศรี ใจดี", ndvi: 0.7842, area: 24.118, tonPerRai: 9.8821, total: 238.4108, perRai: 12.45 },
  { code: "06554-21", season: "69/70", round: 202603, side: "A", zone: "302", farmerCode: "06554", farmer: "นาย วิชัย พัฒนดี", ndvi: 0.5621, area: 12.504, tonPerRai: 7.2014, total: 90.0463, perRai: 8.91 },
];

function ndviTone(v: number) {
  if (v >= 0.6) return "bg-chart-3/15 text-chart-3 border-chart-3/30";
  if (v >= 0.3) return "bg-primary/10 text-primary border-primary/30";
  return "bg-warning/15 text-warning-foreground border-warning/40";
}

export function PlotsTable() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-border">
        <div>
          <h2 className="text-base font-semibold">รายการแปลงอ้อยทั้งหมด</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            แสดง 5 จาก 7,557 แปลง
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5">
            <Filter className="size-3.5" />
            ตัวกรอง
          </Button>
          <Button size="sm" className="gap-1.5">
            <Download className="size-3.5" />
            Export
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/40 text-[11px] uppercase tracking-wider text-muted-foreground">
              <th className="text-left font-medium px-5 py-3">Action</th>
              <th className="text-left font-medium px-3 py-3">ปีฤดูกาล</th>
              <th className="text-left font-medium px-3 py-3">ครั้งที่</th>
              <th className="text-left font-medium px-3 py-3">รหัสแปลง</th>
              <th className="text-left font-medium px-3 py-3">ด้าน</th>
              <th className="text-left font-medium px-3 py-3">เขต</th>
              <th className="text-left font-medium px-3 py-3">ชื่อชาวไร่</th>
              <th className="text-left font-medium px-3 py-3">NDVI</th>
              <th className="text-right font-medium px-3 py-3">พื้นที่/ไร่</th>
              <th className="text-right font-medium px-3 py-3">ตัน/ไร่</th>
              <th className="text-right font-medium px-3 py-3">ตันรวม</th>
              <th className="text-right font-medium px-5 py-3">TON/RAI</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.code}
                className="border-t border-border hover:bg-muted/30 transition-colors"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Heart className="size-3.5 cursor-pointer hover:text-destructive" />
                    <Camera className="size-3.5 cursor-pointer hover:text-primary" />
                    <FileText className="size-3.5 cursor-pointer hover:text-primary" />
                  </div>
                </td>
                <td className="px-3 py-3 text-muted-foreground">{r.season}</td>
                <td className="px-3 py-3 text-muted-foreground">{r.round}</td>
                <td className="px-3 py-3 font-semibold tabular-nums">{r.code}</td>
                <td className="px-3 py-3 text-muted-foreground">{r.side}</td>
                <td className="px-3 py-3 text-muted-foreground">{r.zone}</td>
                <td className="px-3 py-3">{r.farmer}</td>
                <td className="px-3 py-3">
                  <span
                    className={cn(
                      "inline-flex items-center px-2 py-0.5 rounded-md border text-xs font-semibold tabular-nums",
                      ndviTone(r.ndvi),
                    )}
                  >
                    {r.ndvi.toFixed(4)}
                  </span>
                </td>
                <td className="px-3 py-3 text-right tabular-nums">{r.area.toFixed(4)}</td>
                <td className="px-3 py-3 text-right tabular-nums">{r.tonPerRai.toFixed(4)}</td>
                <td className="px-3 py-3 text-right tabular-nums font-medium">
                  {r.total.toFixed(4)}
                </td>
                <td className="px-5 py-3 text-right">
                  <span className="font-semibold text-success tabular-nums">
                    {r.perRai.toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
