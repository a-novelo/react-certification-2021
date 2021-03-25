import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import ProfileButton from '../ProfileButton.component';
import AuthProvider from '../../../providers/Auth';

describe('#ProfileButton', () => {
  it('displays correctly', () => {
    const tree = renderer
      .create(
        <AuthProvider>
          <ProfileButton />
        </AuthProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('closes modal', () => {
    render(
      <AuthProvider>
        <ProfileButton />
      </AuthProvider>
    );
    const profileButton = screen.getByTestId('profile-icon');
    fireEvent(
      profileButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
  });
});
