import { v4 as uuidv4 } from "uuid";

export const utilFunctions = {
  capitalizeation: (data, propertyName) => {
    return data.map((item) => {
      const capitalizedItem = {
        ...item,
        [propertyName]: capitalizeString(item[propertyName]),
      };

      if (item.children) {
        capitalizedItem.children = utilFunctions.capitalizeation(item.children, propertyName);
      }

      return capitalizedItem;
    });
  },

  fetchBeforeSecondComma: (name) => {
    const commaIndex = name.indexOf(",");
    const secondCommaIndex = name.indexOf(",", commaIndex + 1);
    const endIndex = secondCommaIndex !== -1 ? secondCommaIndex : undefined;
    return capitalizeString(name.substring(0, endIndex));
  },

  removeNumbersAndSpecialChars: (str) => {
    return str.replace(/[^\w\s]/gi, " ");
  },
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
