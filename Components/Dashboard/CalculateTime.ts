import { Range } from "./Dashboard";

export const calcTime = (diff: number) => {
  let diffInMilliSeconds = Math.abs(diff) / 1000;

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400);
  diffInMilliSeconds -= days * 86400;
  // console.log("calculated days", days);

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
  diffInMilliSeconds -= hours * 3600;
  // console.log("calculated hours", hours);

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
  diffInMilliSeconds -= minutes * 60;
  // console.log("minutes", minutes);

  let difference = "";
  if (days > 0) {
    difference += days === 1 ? `${days} day, ` : `${days} days, `;
  }

  difference += hours === 0 || hours === 1 ? `${hours} hour, ` : `${hours} hours, `;

  difference += minutes === 0 || hours === 1 ? `${minutes} minutes` : `${minutes} minutes`;

  return difference;
};

export const calculateTime = (arr: Range[]) => {
  let newArr = arr.map((a) =>
    Object.assign({
      from: new Date(a.from).valueOf(),
      to: new Date(a.to).valueOf(),
    })
  );
  let difference: number = 0;
  newArr.forEach((obj) => {
    difference = difference + (obj.to - obj.from);
  });

  return calcTime(difference);
};
