import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from '../Card.component';
import SearchProvider from '../../../providers/Search';
import ThemeProvider from '../../../providers/Theme';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('#Card', () => {
  it('displays correctly', () => {
    const tree = renderer
      .create(
        <SearchProvider>
          <ThemeProvider>
            <Card />
          </ThemeProvider>
        </SearchProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has button to navigate to video', () => {
    render(
      <SearchProvider>
        <ThemeProvider>
          <Card />
        </ThemeProvider>
      </SearchProvider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockHistoryPush).toHaveBeenCalledWith('/video/undefined');
  });
});
