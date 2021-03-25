import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import DisplayToggle from '../DisplayToggle.component';
import SearchProvider from '../../../providers/Search';
import ThemeProvider from '../../../providers/Theme';

describe('#DisplayToggle', () => {
  it('displays correctly', () => {
    const tree = renderer
      .create(
        <SearchProvider>
          <ThemeProvider>
            <DisplayToggle />
          </ThemeProvider>
        </SearchProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggles on click', () => {
    render(
      <SearchProvider>
        <ThemeProvider>
          <DisplayToggle />
        </ThemeProvider>
      </SearchProvider>
    );
    expect(screen.getByRole('switch').getAttribute('aria-checked')).toEqual('false');
    fireEvent.click(screen.getByRole('switch'));
    expect(screen.getByRole('switch').getAttribute('aria-checked')).toEqual('true');
  });
});
