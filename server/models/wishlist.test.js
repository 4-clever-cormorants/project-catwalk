import dummy from '../../client/src/components/RelatedProducts/dummy_related';

const wishlist = require('./wishlist');

describe('Test the wishlist module', () => {
  test('wishlist should be empty before add any items', () => {
    const list = wishlist.getAll();
    expect(list.length).toBe(0);
  });

  test('wishlist should able to add one item with add', () => {
    wishlist.add(dummy.currentProduct.id, () => {});
    const list = wishlist.getAll();
    expect(list.length).toBe(1);
    expect(list[0]).toEqual(dummy.currentProduct.id);
  });

  test('should only add the same item once', () => {
    wishlist.add(dummy.currentProduct.id, () => {});
    const list = wishlist.getAll();
    expect(list.length).toBe(1);
  });

  test('should read all items with getAll with the same order when add', () => {
    wishlist.add(dummy.relatedProducts[0].id, () => {});
    wishlist.add(dummy.relatedProducts[1].id, () => {});
    const list = wishlist.getAll();
    expect(list.length).toBe(3);
    expect(list[0]).toEqual(dummy.currentProduct.id);
    expect(list[1]).toEqual(dummy.relatedProducts[0].id);
    expect(list[2]).toEqual(dummy.relatedProducts[1].id);
  });

  test('should able to drop product by id', () => {
    wishlist.drop(dummy.currentProduct.id, () => {});
    const list = wishlist.getAll();
    expect(list.length).toBe(2);
    wishlist.drop(dummy.relatedProducts[0].id, () => {});
    expect(list.length).toBe(1);
    wishlist.drop(dummy.relatedProducts[1].id, () => {});
    expect(list.length).toBe(0);
  });
});
