const wishlist = {};
let wishlistStore = [];

/**
 *
 * @returns {Array} - contain a list of product_id in number type
 */
const getAll = () => wishlistStore;

/**
 *
 * @param {number} id - current product_id
 * @param {func} callback - error first callback
 */
const add = (id, callback) => {
  if (id in wishlist) {
    callback('already exist');
  } else {
    wishlist[id] = wishlistStore.length;
    wishlistStore.push(id);
    callback(null);
  }
};

/**
 *
 * @param {number} id - product_id you want to drop
 * @param {func} callback - error first callback
 */
const drop = (id, callback) => {
  for (let i = 0; i < wishlistStore.length; i += 1) {
    if (wishlistStore[i] === id) {
      wishlistStore = wishlistStore
        .slice(0, wishlist[id])
        .concat(wishlistStore.slice(wishlist[id] + 1));
      delete wishlist[id];
    }
  }
  callback(null);
};

module.exports = {
  getAll,
  add,
  drop,
};
