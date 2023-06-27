import _ from "lodash";

export const debounce = (fn, delay) => {
  let timeoutID;
  return function (...args) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export const sortMethods = {
  newest: { method: (a, b) => (a > b ? 1 : -1) },
  oldest: { method: (a, b) => (a > b ? -1 : 1) },
  alphabetical: { method: (a, b) => (a.title > b.title ? 1 : -1) },
  bestrating: {
    method: (a, b) =>
      a.ratingPublic.average > b.ratingPublic.average ? -1 : 1,
  },
  lowestrating: {
    method: (a, b) =>
      a.ratingPublic.average > b.ratingPublic.average ? 1 : -1,
  },
  highestkcal: {
    method: (a, b) => (a.nutrients.kcal > b.nutrients.kcal ? -1 : 1),
  },
  lowestkcal: {
    method: (a, b) => (a.nutrients.kcal > b.nutrients.kcal ? 1 : -1),
  },
  highestprotein: {
    method: (a, b) => (a.nutrients.protein > b.nutrients.protein ? -1 : 1),
  },
  lowestprotein: {
    method: (a, b) => (a.nutrients.protein > b.nutrients.protein ? 1 : -1),
  },
  highestcarbs: {
    method: (a, b) => (a.nutrients.carbs > b.nutrients.carbs ? -1 : 1),
  },
  lowestcarbs: {
    method: (a, b) => (a.nutrients.carbs > b.nutrients.carbs ? 1 : -1),
  },
  highestfat: {
    method: (a, b) => (a.nutrients.fat > b.nutrients.fat ? -1 : 1),
  },
  lowestfat: {
    method: (a, b) => (a.nutrients.fat > b.nutrients.fat ? 1 : -1),
  },
};

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
