export function formatZAR(amount: number, opts?: { compact?: boolean }) {
  if (opts?.compact && Math.abs(amount) >= 1_000_000) {
    return `R${(amount / 1_000_000).toFixed(1)}m`;
  }
  if (opts?.compact && Math.abs(amount) >= 1_000) {
    return `R${(amount / 1_000).toFixed(0)}k`;
  }
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(date: string | Date, opts?: { relative?: boolean }) {
  const d = typeof date === "string" ? new Date(date) : date;
  if (opts?.relative) {
    const now = new Date();
    const diff = d.getTime() - now.getTime();
    const days = Math.round(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return "Today";
    if (days === 1) return "Tomorrow";
    if (days === -1) return "Yesterday";
    if (days < 0 && days > -7) return `${Math.abs(days)} days ago`;
    if (days > 0 && days < 7) return `in ${days} days`;
  }
  return d.toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatHours(h: number) {
  const whole = Math.floor(h);
  const mins = Math.round((h - whole) * 60);
  if (mins === 0) return `${whole}h`;
  return `${whole}h ${mins}m`;
}

export function todayLabel() {
  return new Date().toLocaleDateString("en-ZA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
