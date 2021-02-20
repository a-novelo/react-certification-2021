import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../SearchBar.component';

describe('#SearchBar', () => {
  it('displays correctly', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
