import { Bell, Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="flex items-center gap-4 px-6 lg:px-8 h-16">
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-semibold truncate">{title}</h1>
          {subtitle && (
            <p className="text-xs text-muted-foreground truncate">{subtitle}</p>
          )}
        </div>

        <div className="hidden md:flex relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="ค้นหาแปลง, ชาวไร่, รหัส..."
            className="pl-9 bg-muted/50 border-transparent focus-visible:bg-card"
          />
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="size-5" />
          <span className="absolute top-2 right-2 size-2 rounded-full bg-destructive" />
        </Button>

        <div className="flex items-center gap-2 pl-3 border-l border-border">
          <div className="size-9 rounded-full bg-gradient-to-br from-primary to-chart-3 grid place-items-center text-primary-foreground text-sm font-semibold">
            ผบ
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-medium">คุณผู้บริหาร</span>
            <span className="text-[11px] text-muted-foreground">ผู้อำนวยการ</span>
          </div>
          <ChevronDown className="size-4 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
