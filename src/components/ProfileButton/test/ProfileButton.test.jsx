import React from 'react';
import renderer from 'react-test-renderer';
import ProfileButton from '../ProfileButton.component';

describe('#ProfileButton', () => {
  it('displays correctly', () => {
    const tree = renderer.create(<ProfileButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
