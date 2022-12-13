import {render, screen} from '@testing-library/react';
import FilterByName from '../components/FilterByName';

test('Checks the title component', () => {
  // Arrange
  render(<FilterByName />);
  // Act
  const labelElement = screen.getByText(/NAME/i);
  // Assert
  expect(labelElement).toBeInTheDocument();
});