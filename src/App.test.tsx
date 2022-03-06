import { render } from '@testing-library/react'
import App from './App'

test('renders header and sections', () => {
  render(<App />)

  expect(document.getElementsByTagName('header')[0]).toBeInTheDocument()
  expect(document.getElementById('search-bar')).toBeInTheDocument()
  expect(document.getElementById('results')).toBeInTheDocument()
})
