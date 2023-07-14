const { render } = require("@testing-library/react")
const { default: CharactersList } = require("./characters-list")

jest.mock('next/router', () => require('next-router-mock'));

describe('Characters list', () => {
    // when we call the getCharacters function, we want to return a list of 2 characters
    it('renders the list of characters when there is characters', () => {
        // initialize the characters array
        const characters = [
            {
                id: 1,
                name: 'Spider-Man',
            },
            {
                id: 2,
                name: 'Iron Man',
            }
        ]

        // render the component
        render(<CharactersList characters={characters} />)

        // expect to find a ul element
        expect(document.querySelector('ul')).toBeInTheDocument()

        // expect to find 2 li elements because we have 2 characters
        expect(document.querySelectorAll('li').length).toBe(2)

        // expect to have a first li element with a link to "/characters/1" and the text "Spider-Man"
        expect(document.querySelectorAll('li')[0].querySelector('a').getAttribute('href')).toBe('/characters/1')
        expect(document.querySelectorAll('li')[0].querySelector('a').textContent).toBe('Spider-Man')

        // expect to have a second li element with a link to "/characters/2" and the text "Iron Man"
        expect(document.querySelectorAll('li')[1].querySelector('a').getAttribute('href')).toBe('/characters/2')
        expect(document.querySelectorAll('li')[1].querySelector('a').textContent).toBe('Iron Man')
    })

    it('renders the list of characters when there is no characters params', () => {
        render(<CharactersList />)

        // expect to find a ul element
        expect(document.querySelector('ul')).toBeInTheDocument()

        // expect to find 0 li elements because we have no characters
        expect(document.querySelectorAll('li').length).toBe(0)
    })
})
