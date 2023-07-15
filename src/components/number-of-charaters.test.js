import { render, screen } from '@testing-library/react'
import NumberOfCharacters from '@/components/number-of-characters'

describe('Number of characters', () => {
    it('renders the number of characters', () => {
         render(<NumberOfCharacters displayed={2}  />)
        const numberOfCharacters = screen.getByText(/Number of characters: 2/i)
        expect(numberOfCharacters).toBeInTheDocument()
    })

    it('renders the number of characters if no parameters', () => {
        
        render(<NumberOfCharacters/>)
        const numberOfCharacters = screen.getByText(/Number of characters: 0/i)
        expect(numberOfCharacters).toBeInTheDocument()
    })
})   