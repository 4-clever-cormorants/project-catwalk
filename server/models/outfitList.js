const outfitList = [];

const getAll = () => outfitList;

const add = (item) => {
  const checker = outfitList.filter((data) => data.id === item.id);
  if (checker.length === 0) {
    outfitList.push(item);
  }
};

module.exports = {
  getAll,
  add,
};
