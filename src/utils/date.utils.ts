export const dateToFullMonthDate = (date: Date) => {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const dateToNumberedMonthDate = (date: Date) => {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  });
};
