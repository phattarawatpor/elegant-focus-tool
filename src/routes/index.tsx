import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  Sprout,
  MapPin,
  Package,
  TrendingUp,
  Layers,
} from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { ProductionChart } from "@/components/dashboard/ProductionChart";
import { NdviDonut } from "@/components/dashboard/NdviDonut";
import { PlotMap } from "@/components/dashboard/PlotMap";
import { FactoryComparison } from "@/components/dashboard/FactoryComparison";
import { PlotsTable } from "@/components/dashboard/PlotsTable";

export const Route = createFileRoute("/")({
  component: ExecutiveDashboard,
  head: () => ({
    meta: [
      { title: "Executive Dashboard · โรงงานน้ำตาลทิพย์สุโขทัย" },
      {
        name: "description",
        content:
          "ภาพรวมการบริหารแปลงอ้อย ผลผลิต และดัชนี NDVI สำหรับผู้บริหารโรงงานน้ำตาลทิพย์สุโขทัย",
      },
    ],
  }),
});

function ExecutiveDashboard() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <Header
          title="ภาพรวมผู้บริหาร"
          subtitle="โรงงานน้ำตาลทิพย์สุโขทัย · ปีการผลิต 2569/70"
        />

        <main className="flex-1 p-6 lg:p-8 space-y-6">
          {/* Factory tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-2">
              FACTORY
            </span>
            {[
              { code: "SKT", name: "สุโขทัย", active: true },
              { code: "KPP", name: "กำแพงเพชร", active: false },
              { code: "SPB", name: "สุพรรณบุรี", active: false },
            ].map((f) => (
              <button
                key={f.code}
                className={
                  f.active
                    ? "px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-soft"
                    : "px-4 py-2 rounded-xl bg-card border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition"
                }
              >
                <span className="font-bold">{f.code}</span>
                <span className="ml-2 text-xs opacity-80">{f.name}</span>
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2">
              {["NDVI", "NDWI", "SAR"].map((m, i) => (
                <button
                  key={m}
                  className={
                    i === 0
                      ? "px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-xs font-semibold"
                      : "px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground"
                  }
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* KPI grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <KpiCard
              label="ชาวไร่"
              value="2,887"
              unit="คน"
              delta={3.2}
              deltaLabel="เทียบปีก่อน"
              icon={Users}
              tone="info"
            />
            <KpiCard
              label="แปลงอ้อย"
              value="7,557"
              unit="แปลง"
              delta={5.8}
              deltaLabel="เทียบปีก่อน"
              icon={Sprout}
              tone="success"
            />
            <KpiCard
              label="พื้นที่รวม"
              value="89,094"
              unit="ไร่"
              delta={2.4}
              deltaLabel="เทียบปีก่อน"
              icon={MapPin}
              tone="primary"
            />
            <KpiCard
              label="ผลผลิตอ้อย"
              value="350,015"
              unit="ตัน"
              delta={-1.8}
              deltaLabel="เทียบเป้าหมาย"
              icon={Package}
              tone="warning"
            />
          </div>

          {/* Map + Production chart */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 rounded-2xl border border-border bg-card shadow-soft p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-base font-semibold">
                    แผนที่แปลงอ้อย — ดัชนี NDVI
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    สีของแปลงสะท้อนความสมบูรณ์ของพืช
                  </p>
                </div>
                <button className="text-xs text-primary font-medium hover:underline">
                  ดูแผนที่เต็มจอ →
                </button>
              </div>
              <PlotMap />
            </div>

            <div className="rounded-2xl border border-border bg-card shadow-soft p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-base font-semibold">สัดส่วนความสมบูรณ์</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    การกระจายตัว NDVI ทั้งหมด
                  </p>
                </div>
                <Layers className="size-5 text-muted-foreground" />
              </div>
              <NdviDonut />
            </div>
          </div>

          

          {/* Plots Table */}
          <PlotsTable />
{/* Production + Factory comparison */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 rounded-2xl border border-border bg-card shadow-soft p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-base font-semibold">แนวโน้มผลผลิตรายเดือน</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    เปรียบเทียบปีนี้กับปีก่อน (หน่วย: ตัน)
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-success/10 text-success text-xs font-semibold">
                  <TrendingUp className="size-3.5" />
                  +14.2%
                </div>
              </div>
              <ProductionChart />
            </div>

            <div className="rounded-2xl border border-border bg-card shadow-soft p-5">
              <div className="mb-2">
                <h2 className="text-base font-semibold">เปรียบเทียบโรงงาน</h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  ผลผลิตจริง vs เป้าหมาย
                </p>
              </div>
              <FactoryComparison />
            </div>
          </div>
          <div className="text-center text-xs text-muted-foreground py-4">
            © 2026 โรงงานน้ำตาลทิพย์สุโขทัย · Powered by Lovable Earth
          </div>
        </main>
      </div>
    </div>
  );
}
