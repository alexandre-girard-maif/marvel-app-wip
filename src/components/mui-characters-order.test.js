const { render, screen } = require("@testing-library/react")
const { default: MuiCharacterOrder } = require("./mui-characters-order")

describe('Characters order', () => {
    it('renders the order buttons without order', () => {
        render(<MuiCharacterOrder />)

        // expect to have a button with the text "Order by name"
        expectToHaveOrberByNameButton()

        // expect to have an icon KeyboardDoubleArrowDownRounded
        expect(screen.getByTestId('KeyboardDoubleArrowUpRoundedIcon')).toBeInTheDocument()
    })

    it('renders the order buttons with desc order', () => {
        render(<MuiCharacterOrder order='desc' />)

        // expect to have a button with the text "Order by name"
        expectToHaveOrberByNameButton()

        // expect to have an icon KeyboardDoubleArrowDownRounded
        expect(screen.getByTestId('KeyboardDoubleArrowDownRoundedIcon')).toBeInTheDocument()
    })
})

/**
 * Expect to have a button with the text "Order by name"
 */
function expectToHaveOrberByNameButton() {
    const button = document.querySelector('button')
    expect(button).toBeInTheDocument()
    expect(button.textContent).toBe('Order by name')
}
