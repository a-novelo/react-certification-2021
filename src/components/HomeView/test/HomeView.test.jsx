import React from 'react';
import renderer from 'react-test-renderer';
import HomeView from '../HomeView.component';

describe('#HomeView', () => {
  it('displays correctly', () => {
    const tree = renderer.create(<HomeView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
