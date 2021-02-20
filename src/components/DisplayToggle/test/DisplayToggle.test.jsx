import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import DisplayToggle from '../DisplayToggle.component';

describe('#DisplayToggle', () => {
  it('displays correctly', () => {
    const tree = renderer.create(<DisplayToggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggles on click', () => {
    render(<DisplayToggle />);
    expect(screen.getByRole('switch').getAttribute('aria-checked')).toEqual('false');
    fireEvent.click(screen.getByRole('switch'));
    expect(screen.getByRole('switch').getAttribute('aria-checked')).toEqual('true');
    // console.log('ANOVELO ', screen.getByRole('switch').getAttribute('aria-checked'));
    // expect(container.state().error).toEqual(false);
  });
});
