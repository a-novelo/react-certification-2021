import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import SideMenu from '../SideMenu.component';
import AuthProvider from '../../../providers/Auth';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('#SideMenu', () => {
  it('displays correctly', () => {
    const tree = renderer
      .create(
        <AuthProvider>
          <SideMenu />
        </AuthProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('goes to the home page', () => {
    render(
      <AuthProvider>
        <SideMenu handleClose={() => {}} />
      </AuthProvider>
    );
    const homeButton = screen.getByText('Home');
    fireEvent(
      homeButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
  });
});
