import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar.component';
import SearchProvider from '../../../providers/Search';
import ThemeProvider from '../../../providers/Theme';

describe('#SearchBar', () => {
  it('displays correctly', () => {
    const tree = renderer
      .create(
        <SearchProvider>
          <ThemeProvider>
            <SearchBar />
          </ThemeProvider>
        </SearchProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('searches on enter key', () => {
    render(
      <SearchProvider>
        <ThemeProvider>
          <SearchBar search={() => {}} />
        </ThemeProvider>
      </SearchProvider>
    );
    const inputBar = screen.getByPlaceholderText('Search...');
    fireEvent.keyDown(inputBar, { key: 'Enter', code: 'Enter' });
  });

  it('does not searche on a different key', () => {
    render(
      <SearchProvider>
        <ThemeProvider>
          <SearchBar search={() => {}} />
        </ThemeProvider>
      </SearchProvider>
    );
    const inputBar = screen.getByPlaceholderText('Search...');
    fireEvent.keyDown(inputBar, { key: 'A', code: 'A' });
  });
});
