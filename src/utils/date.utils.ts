export const dateToWordedMonthDate = (date: Date) => {
  const dateInString = date.toLocaleString("en-IN", {
    dateStyle: "medium",
  });
  const formatedDate = dateInString.replace(/-/g, " ");

  return formatedDate;
};

export const dateToNumberedMonthDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const paddedMonth = month.toString().padStart(2, "0");
  const paddedDay = day.toString().padStart(2, "0");

  return `${paddedDay}-${paddedMonth}-${year}`;
};
