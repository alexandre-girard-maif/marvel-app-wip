import { fireEvent, render, screen } from '@testing-library/react'
import Home from './index'

jest.mock('next/router', () => require('next-router-mock'));

describe('index', () => {

  it('renders a index with character link', () => {
    // render the component
    render(<Home />)

    // except to find a h1 element with the text "Welcome to Marvel App !"
    const heading = screen.getByRole('heading', {
      name: /Marvel App - Characters/i,
    })
    expect(heading).toBeInTheDocument()

    // except to find a li element with the text "Thor" and a link to "/characters/1009664"
    const listItem = screen.getByText(/Thor/i)
    expect(listItem).toBeInTheDocument()
    expect(listItem).toHaveAttribute('href', '/characters/1009664')

    // except to find a button element with the text "Asc" with style color: Highlight
    const buttonAsc = screen.getByRole('button', {
      name: /Asc/i })
    expect(buttonAsc).toBeInTheDocument()
    expect(buttonAsc).toHaveAttribute('style', "color: Highlight;")

    // except to find a button element with the text "Desc" without style color: Highlight
    const buttonDesc = screen.getByRole('button', {
      name: /Desc/i })
    expect(buttonDesc).toBeInTheDocument()
    expect(buttonDesc).not.toHaveAttribute('style', "color: Highlight;")

    // click on the button "Desc"
    fireEvent.click(buttonDesc)

    // except to find a button element with the text "Asc" without style color: Highlight
    expect(buttonAsc).not.toHaveAttribute('style', "color: Highlight;")
    // except to find a button element with the text "Desc" with style color: Highlight
    expect(buttonDesc).toHaveAttribute('style', "color: Highlight;")
  })
})
