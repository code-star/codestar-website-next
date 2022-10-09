export const formatDate = (time: string) =>
  new Date(time).toLocaleDateString("en-GB", {
    weekday: 'short',
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
