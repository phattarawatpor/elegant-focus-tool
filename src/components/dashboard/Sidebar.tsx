import { Link, useLocation } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Map,
  BarChart3,
  Factory,
  FileText,
  Settings,
  Sprout,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "ภาพรวม", icon: LayoutDashboard },
  { to: "/map", label: "แผนที่แปลง", icon: Map },
  { to: "/analytics", label: "วิเคราะห์ข้อมูล", icon: BarChart3 },
  { to: "/factories", label: "เปรียบเทียบโรงงาน", icon: Factory },
  { to: "/reports", label: "รายงาน", icon: FileText },
  { to: "/settings", label: "ตั้งค่า", icon: Settings },
] as const;

export function Sidebar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <aside className="hidden lg:flex h-screen sticky top-0 w-64 flex-col border-r border-border bg-sidebar">
      <div className="flex items-center gap-3 px-6 h-16 border-b border-sidebar-border">
        <div className="size-9 rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-soft">
          <Sprout className="size-5" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-sidebar-foreground">
            น้ำตาลทิพย์สุโขทัย
          </span>
          <span className="text-xs text-muted-foreground">Executive Suite</span>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const active = path === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to as "/"}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
              )}
            >
              <Icon className="size-4" />
              <span>{item.label}</span>
              {active && (
                <span className="ml-auto size-1.5 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 m-3 rounded-xl bg-gradient-to-br from-primary-soft to-accent border border-border/50">
        <div className="text-xs font-semibold text-accent-foreground">
          ปีการผลิต 2569/70
        </div>
        <div className="text-[11px] text-muted-foreground mt-1">
          อัพเดท: 23 เม.ย. 2026
        </div>
      </div>
    </aside>
  );
}
