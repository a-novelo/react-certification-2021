import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import RelatedVideoCard from '../RelatedVideoCard.component';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('#RelatedVideoCard', () => {
  it('displays correctly', () => {
    const tree = renderer.create(<RelatedVideoCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has button to navigate to video', () => {
    render(<RelatedVideoCard />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockHistoryPush).toHaveBeenCalledWith('/video/undefined');
  });
});
