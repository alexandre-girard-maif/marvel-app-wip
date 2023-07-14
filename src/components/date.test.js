import { render, screen } from '@testing-library/react'
import Date from './date'

describe('Date', () => {
    it('renders a date in good format', () => {
        render(<Date dateString={"2013-11-07T10:48:53-0500"} />)

        // except to find a time element with the text "November 7, 2013"
        const timeElement = screen.getByText(/November 7, 2013/i)
        expect(timeElement).toBeInTheDocument()
    })

    // it('renders when not a date', () => {
    //     render(<Date dateString={"not a date"} />)
    // })
  
})
