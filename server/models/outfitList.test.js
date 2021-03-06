import dummy from '../../client/src/components/RelatedProducts/dummy_related';

const outfitList = require('./outfitList');

describe('Test the outfitList module', () => {
  test('outfitList should be empty before add any items', () => {
    const list = outfitList.getAll();
    expect(list.length).toBe(0);
  });

  test('outfitList should able to add one item with add', () => {
    outfitList.add(dummy.currentProduct, () => {});
    const list = outfitList.getAll();
    expect(list.length).toBe(1);
    expect(list[0].id).toEqual(dummy.currentProduct.id);
  });

  test('should only add the same item once', () => {
    outfitList.add(dummy.currentProduct, () => {});
    const list = outfitList.getAll();
    expect(list.length).toBe(1);
  });

  test('should read all items with getAll and latest item at head', () => {
    outfitList.add(dummy.relatedProducts[0], () => {});
    outfitList.add(dummy.relatedProducts[1], () => {});
    const list = outfitList.getAll();
    expect(list.length).toBe(3);
    expect(list[1].id).toEqual(dummy.relatedProducts[0].id);
    expect(list[0].id).toEqual(dummy.relatedProducts[1].id);
  });

  test('should able to drop product by id', () => {
    outfitList.drop(dummy.currentProduct.id, () => {});
    const list = outfitList.getAll();
    expect(list.length).toBe(2);
  });
});
