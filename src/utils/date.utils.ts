export const dateToWordedMonthDate = (date: Date) => {
  return date.toLocaleString("en-IN", {
    dateStyle: "medium",
  });
};

export const dateToNumberedMonthDate = (date: Date) => {
  return date.toLocaleString("en-IN", {
    dateStyle: "short",
  });
};
