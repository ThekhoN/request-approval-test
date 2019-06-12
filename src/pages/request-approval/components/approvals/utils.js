import { getDayMonthYear } from "../../utils";

export const getHeaderContent = type =>
  type === "approved" ? "Approved" : "Pending";

export const getActivityLastUpdateContent = (type, lastUpdatedDate) => {
  let res = type === "approved" ? "Approved" : "Pending";
  const { month, day, year } = getDayMonthYear(lastUpdatedDate);
  const lastUpdateTime = `${month.slice(0, 4)} ${day}, ${year}`;
  return `${res} ${lastUpdateTime}`;
};
