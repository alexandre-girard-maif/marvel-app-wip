
/**
 * Displays the number of characters in the list
 * @param {*} characters List of characters 
 * @returns 
 */
export default function NumberOfCharacters({ characters = [] }) { 
    return <div>Number of characters: {characters.length}</div>
}