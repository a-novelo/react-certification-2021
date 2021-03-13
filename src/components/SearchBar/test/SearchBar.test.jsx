import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar.component';

describe('#SearchBar', () => {
  it('displays correctly', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('searches on enter key', () => {
    render(<SearchBar search={() => {}} />);
    const inputBar = screen.getByPlaceholderText('Search...');
    fireEvent.keyDown(inputBar, { key: 'Enter', code: 'Enter' });
  });

  it('does not searche on a different key', () => {
    render(<SearchBar search={() => {}} />);
    const inputBar = screen.getByPlaceholderText('Search...');
    fireEvent.keyDown(inputBar, { key: 'A', code: 'A' });
  });
});
