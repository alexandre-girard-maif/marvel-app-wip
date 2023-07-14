import { render, screen } from '@testing-library/react'
import NumberOfCharacters from '@/components/number-of-characters'

describe('Number of characters', () => {
    it('renders the number of characters', () => {
        const characters = [
            {
                id: 1,
                name: 'Spider-Man',
            },
            {
                id: 2,
                name: 'Iron Man',
            },
        ]
         render(<NumberOfCharacters characters={characters} />)
        const numberOfCharacters = screen.getByText(/Number of characters: 2/i)
        expect(numberOfCharacters).toBeInTheDocument()
    })

    it('renders the number of characters if no characters', () => {
        
        render(<NumberOfCharacters />)
        const numberOfCharacters = screen.getByText(/Number of characters: 0/i)
        expect(numberOfCharacters).toBeInTheDocument()
    })
})   