export const currencyFormatter = (amount) => {
  const formatter = Intl.NumberFormat("en-za", {
    currency: "ZAR",
    style: "currency",
  });

  return formatter.format(amount);
};

export const dateFormatter = (date) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date(date).toLocaleDateString("en-ZA", options);
};
