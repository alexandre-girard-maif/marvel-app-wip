const { render } = require("@testing-library/react")
const { default: CharacterOrder } = require("./characters-order")

/**
 * Expect to have 2 buttons with the text "Asc" and "Desc"
 */
function expectToHaveAscAndDescButtons() {
    expect(document.querySelector('button')).toBeInTheDocument()
    expect(document.querySelectorAll('button').length).toBe(2)

    // expect to have a first button element with the text "Asc" and the second with the text "Desc"
    expect(document.querySelectorAll('button')[0].textContent).toBe('Asc')
    expect(document.querySelectorAll('button')[1].textContent).toBe('Desc')
}

describe('Characters order', () => {
    it('renders the order buttons without order', () => {
        render(<CharacterOrder />)

        expectToHaveAscAndDescButtons()

        // except that button with id "ascButton" has the style with color Highlight
        // expect that button with id "descButton" has no style
        expect(document.getElementById('ascButton').getAttribute('style')).toBe('color: Highlight;')
        expect(document.getElementById('descButton').getAttribute('style')).toBe(null)
    })

    it('renders the order buttons with desc order', () => {
        render(<CharacterOrder order='desc' />)

        expectToHaveAscAndDescButtons()

        // except that button with id "ascButton" has no style
        // expect that button with id "descButton" has the style with color Highlight
        expect(document.getElementById('ascButton').getAttribute('style')).toBe(null)
        expect(document.getElementById('descButton').getAttribute('style')).toBe('color: Highlight;')
    })
})


