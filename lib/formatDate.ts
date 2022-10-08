export const formatDate = (time: string) =>
  new Date(time).toLocaleDateString("nl-NL", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
