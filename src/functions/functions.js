export const findById = (array, id) => {
  return array[array.findIndex((x) => x._id === id)];
};

export const addOrFindAndRemove = (array, id) => {
  const index = array.findIndex((x) => x === id);
  if (index !== -1) {
    array.splice(index, 1);
  } else {
    array.push(id);
  }
  return array;
};

export const isInArray = (array, item) => {
  return array.some((x) => x === item);
};
