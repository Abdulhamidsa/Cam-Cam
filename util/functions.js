// CAPITALIZE
export const capitalizeation = (data, propertyName) => {
  return data.map((item) => {
    const capitalizedItem = {
      ...item,
      [propertyName]: capitalizeString(item[propertyName]),
    };

    if (item.children) {
      capitalizedItem.children = capitalizeation(item.children, propertyName);
    }

    return capitalizedItem;
  });
};

const capitalizeString = (str) => {
  if (!str) {
    return "";
  }

  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const fetchBeforeSecondComma = (name) => {
  const commaIndex = name.indexOf(",");
  const secondCommaIndex = name.indexOf(",", commaIndex + 1);
  const endIndex = secondCommaIndex !== -1 ? secondCommaIndex : undefined;
  return capitalizeString(name.substring(0, endIndex));
};

export const removeNumbersAndSpecialChars = (str) => {
  return str.replace(/[^\w\s]/gi, "").replace(/\d/g, " ");
};
