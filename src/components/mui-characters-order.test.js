const { render, screen } = require("@testing-library/react")
const { default: MuiCharacterOrder } = require("./mui-characters-order")

describe('Characters order', () => {
    it('renders the order buttons without order', () => {
        render(<MuiCharacterOrder />)

        // expect to have a button with the text "Order by name"
        expectToHaveOrberByButtons()

        // expect to have an icon KeyboardDoubleArrowDownRounded
        //expect(screen.getByTestId('KeyboardDoubleArrowUpRoundedIcon')).toBeInTheDocument()
    })

    it('renders the order buttons with desc order', () => {
        render(<MuiCharacterOrder order='desc' />)

        // expect to have a button with the text "Order by name"
        expectToHaveOrberByButtons()
        
        // expect to have an icon KeyboardDoubleArrowDownRounded
        //expect(screen.getByTestId('KeyboardDoubleArrowDownRoundedIcon')).toBeInTheDocument()
    })
})

/**
 * Expect to have a button with the text "Order by name"
 */
function expectToHaveOrberByButtons() {
    // expect to have a button with the text "Order by name"
    const orderByNameButton = document.getElementById('orderByNameButton')
    expect(orderByNameButton).toBeInTheDocument()
    expect(orderByNameButton).toHaveTextContent('Order by name')

    // expect to have a button with the text "Order by date"
    const orderByDateButton = document.getElementById('orderByDateButton')
    expect(orderByDateButton).toBeInTheDocument()
    expect(orderByDateButton).toHaveTextContent('Order by date')
}
