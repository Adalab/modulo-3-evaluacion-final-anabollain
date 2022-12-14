import {render, screen} from '@testing-library/react';
import FilterByName from '../components/FilterByName';

test('Checks the name label in filter component', () => {
  // Arrange
  render(<FilterByName />);
  // Act
  const labelElement = screen.getByText(/NAME/i);
  // Assert
  expect(labelElement).toBeInTheDocument();
});