import React from 'react';
import renderer from 'react-test-renderer';
import HomeView from '../HomeView.component';
import SearchProvider from '../../../providers/Search';
import ThemeProvider from '../../../providers/Theme';

describe('#HomeView', () => {
  it('displays correctly', () => {
    const tree = renderer
      .create(
        <SearchProvider>
          <ThemeProvider>
            <HomeView />
          </ThemeProvider>
        </SearchProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
