import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginModal from '../LoginModal.component';
import AuthProvider from '../../../providers/Auth';

describe('#LoginModal', () => {
  it('displays correctly', () => {
    const tree = renderer
      .create(
        <AuthProvider>
          <LoginModal />
        </AuthProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('enters a username and password', () => {
    render(
      <AuthProvider>
        <LoginModal />
      </AuthProvider>
    );
    const inputUsername = screen.getByLabelText('username');
    fireEvent.change(inputUsername, { target: { value: 'Wizeline' } });
    const inputPassword = screen.getByLabelText('password');
    fireEvent.change(inputPassword, { target: { value: 'mypassword' } });
  });

  it('submit username and password', () => {
    render(
      <AuthProvider>
        <LoginModal />
      </AuthProvider>
    );
    const inputUsername = screen.getByLabelText('username');
    fireEvent.change(inputUsername, { target: { value: 'Wizeline' } });
    const inputPassword = screen.getByLabelText('password');
    fireEvent.change(inputPassword, { target: { value: 'wrongpassword' } });
    const loginButton = screen.getByText('LOGIN');
    fireEvent(
      loginButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
  });

  it('closes modal', () => {
    render(
      <AuthProvider>
        <LoginModal handleClose={() => {}} />
      </AuthProvider>
    );
    const cancelButton = screen.getByText('CANCEL');
    fireEvent(
      cancelButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
  });
});
