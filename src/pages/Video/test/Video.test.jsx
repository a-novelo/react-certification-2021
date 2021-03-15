import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import Video from '../Video.page';
import SearchProvider from '../../../providers/Search';
import ThemeProvider from '../../../providers/Theme';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useParams: () => ({
    videoId: 'A123oe',
  }),
}));

describe('#Video', () => {
  it('displays correctly', () => {
    const tree = renderer
      .create(
        <SearchProvider>
          <ThemeProvider>
            <Video />
          </ThemeProvider>
        </SearchProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('searches term', () => {
    render(
      <SearchProvider>
        <ThemeProvider>
          <Video />
        </ThemeProvider>
      </SearchProvider>
    );
    const inputBar = screen.getByPlaceholderText('Search...');
    fireEvent.change(inputBar, { target: { value: 'wizeline' } });
    fireEvent.keyDown(inputBar, { key: 'Enter', code: 'Enter' });
    // eslint-disable-next-line prettier/prettier
    expect(mockHistoryPush).toHaveBeenCalledWith({
      pathname: '/',
      state: { search: 'wizeline' },
    });
  });
});
