export const findById = (array, id) => {
    return  array[array.findIndex(x => x._id === id)];
}