import React from 'react';
import { shallow } from 'enzyme';
import ScrollIndicator from './ScrollIndicator';

describe('Test Related Product list component', () => {
  it('should render every card when in related list', () => {
    const indicators = shallow(<ScrollIndicator scrollLength={4} listName="relatedList" scrollToInd={() => {}} />);
    expect(indicators.find('.relatedListindicator').length).toEqual(4);
  });
  it('should render every card when in outfit list, but the fist and last one is hidden', () => {
    const indicators = shallow(<ScrollIndicator scrollLength={4} listName="outfitList" scrollToInd={() => {}} />);
    expect(indicators.find('.outfitListindicator').length).toEqual(4);
    expect(indicators.find('.hide').length).toEqual(2);
  });
});
