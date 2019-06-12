export const getPluralStringForValue = (string, value) => {
  if (value > 1) {
    return string + "s";
  } else {
    return string;
  }
};

export const getFileNameFromFileUrl = fileUrl => {
  return fileUrl.slice(fileUrl.lastIndexOf("/") + 1, fileUrl.length);
};

export const getDayMonthYear = dateString => {
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: date.toLocaleString("en-us", { month: "long" }),
    monthNumeric: date.getMonth(),
    year: date.getFullYear()
  };
};
