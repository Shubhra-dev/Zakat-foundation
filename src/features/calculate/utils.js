export const calculateTotalOwn = (own) => {
  const omitKey = "goldAndSilverVori"; // Hard-coded key to be omitted
  return Object.entries(own).reduce((acc, [key, category]) => {
    if (key === omitKey) {
      return acc; // Skip this key
    }
    if (typeof category === "object") {
      return (
        acc +
        Object.entries(category).reduce((sum, [subKey, value]) => {
          if (subKey === "active") {
            return sum; // Skip the active property
          }
          return sum + value;
        }, 0)
      );
    }
    return acc + category;
  }, 0);
};

export const calculateTotalOwe = (owe) => {
  return Object.values(owe).reduce((acc, category) => {
    return acc + category.value;
  }, 0);
};
