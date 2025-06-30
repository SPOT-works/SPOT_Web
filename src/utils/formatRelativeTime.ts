export default function formatRelativeTime(date: string | number | Date): string {
  const d = typeof date === "string" || typeof date === "number" ? new Date(date) : date;
  const diff = Date.now() - d.getTime();
  const hour = 1000 * 60 * 60;
  const day = hour * 24;
  const month = day * 30;
  if (diff < day) {
    const hours = Math.floor(diff / hour);
    return `${hours}시간 전`;
  } else if (diff < month) {
    const days = Math.floor(diff / day);
    return `${days}일 전`;
  } else {
    const months = Math.floor(diff / month);
    return `${months}달 전`;
  }
}
