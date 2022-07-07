import { render, screen } from '@testing-library/react';
import Modal from './index';

describe('Modal component', () => {
  it('should display a "start testing" into component', () => {
    render(<Modal />);

    const element = screen.getByText(/start testing/i)
    expect(element).toBeInTheDocument();
  });
});
