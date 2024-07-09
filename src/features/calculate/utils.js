export const calculateTotalOwn = (own) => {
  return Object.values(own).reduce((acc, category) => {
    if (typeof category === "object") {
      return (
        acc + Object.values(category).reduce((sum, value) => sum + value, 0)
      );
    }
    return acc + category;
  }, 0);
};

export const calculateTotalOwe = (owe) => {
  return Object.values(owe).reduce((acc, value) => acc + value, 0);
};
