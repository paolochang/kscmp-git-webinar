export const add = (x, y) => x + y;

export const subtract = (x, y) => x - y;

export const getAge = (bornYear) => {
  let thisYear = new Date().getFullYear();
  return thisYear - bornYear;
};
