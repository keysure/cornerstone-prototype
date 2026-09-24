import { Badge } from "./badge";

const map: Record<string, "success" | "warning" | "danger" | "info" | "muted" | "default"> = {
  open: "warning",
  Open: "warning",
  draft: "muted",
  Draft: "muted",
  submitted: "info",
  Submitted: "info",
  approved: "success",
  Approved: "success",
  Responded: "info",
  Closed: "success",
  closed: "success",
  sent: "info",
  Sent: "info",
  viewed: "info",
  Viewed: "info",
  paid: "success",
  Paid: "success",
  pending_approval: "warning",
  overdue: "danger",
  Active: "success",
  green: "success",
  amber: "warning",
  red: "danger",
};

export function StatusChip({ status, label }: { status: string; label?: string }) {
  return <Badge variant={map[status] || "muted"}>{label || status.replace(/_/g, " ")}</Badge>;
}
