export const dateToWordedMonthDate = (date: Date) => {
  return date.toLocaleString("en-IN", {
    dateStyle: "medium",
  });
};

export const dateToNumberedMonthDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const paddedMonth = month.toString().padStart(2, "0");
  const paddedDay = day.toString().padStart(2, "0");

  return `${paddedDay}-${paddedMonth}-${year}`;
};
