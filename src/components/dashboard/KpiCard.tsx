import { ArrowUpRight, ArrowDownRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  label: string;
  value: string;
  unit?: string;
  delta?: number;
  deltaLabel?: string;
  icon: LucideIcon;
  tone?: "primary" | "info" | "warning" | "success";
}

const toneStyles: Record<NonNullable<KpiCardProps["tone"]>, string> = {
  primary: "from-primary/10 to-primary/0 text-primary",
  info: "from-info/10 to-info/0 text-info",
  warning: "from-warning/15 to-warning/0 text-warning-foreground",
  success: "from-success/10 to-success/0 text-success",
};

export function KpiCard({
  label,
  value,
  unit,
  delta,
  deltaLabel,
  icon: Icon,
  tone = "primary",
}: KpiCardProps) {
  const positive = (delta ?? 0) >= 0;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-card transition-shadow">
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-60 pointer-events-none",
          toneStyles[tone],
        )}
      />
      <div className="relative p-5">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {label}
            </p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-bold tracking-tight text-foreground">
                {value}
              </span>
              {unit && (
                <span className="text-sm font-medium text-muted-foreground">
                  {unit}
                </span>
              )}
            </div>
          </div>
          <div
            className={cn(
              "size-10 rounded-xl grid place-items-center bg-card border border-border",
              tone === "primary" && "text-primary",
              tone === "info" && "text-info",
              tone === "warning" && "text-warning-foreground",
              tone === "success" && "text-success",
            )}
          >
            <Icon className="size-5" />
          </div>
        </div>

        {typeof delta === "number" && (
          <div className="mt-4 flex items-center gap-1.5 text-xs">
            <span
              className={cn(
                "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md font-semibold",
                positive
                  ? "bg-success/10 text-success"
                  : "bg-destructive/10 text-destructive",
              )}
            >
              {positive ? (
                <ArrowUpRight className="size-3" />
              ) : (
                <ArrowDownRight className="size-3" />
              )}
              {Math.abs(delta).toFixed(1)}%
            </span>
            {deltaLabel && (
              <span className="text-muted-foreground">{deltaLabel}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
