import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header.component';
import AuthProvider from '../../../providers/Auth';
import SearchProvider from '../../../providers/Search';
import ThemeProvider from '../../../providers/Theme';

describe('#Header', () => {
  it('displays correctly', () => {
    const tree = renderer
      .create(
        <AuthProvider>
          <SearchProvider>
            <ThemeProvider>
              <Header />
            </ThemeProvider>
          </SearchProvider>
        </AuthProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('clicks on the hamburger menu', () => {
    render(
      <AuthProvider>
        <SearchProvider>
          <ThemeProvider>
            <Header />
          </ThemeProvider>
        </SearchProvider>
      </AuthProvider>
    );
    const hamburgerMenu = screen.getByTestId('hamburger-button');
    fireEvent(
      hamburgerMenu,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
  });
});
