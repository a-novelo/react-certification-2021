import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header.component';
import SearchProvider from '../../../providers/Search';
import ThemeProvider from '../../../providers/Theme';

describe('#Header', () => {
  it('displays correctly', () => {
    const tree = renderer
      .create(
        <SearchProvider>
          <ThemeProvider>
            <Header />
          </ThemeProvider>
        </SearchProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
