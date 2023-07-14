
/**
 * Displays the number of characters in the list
 * @param {*} characters List of characters 
 * @returns 
 */
export default function NumberOfCharacters({ displayed, total }) { 
    return <div>Number of characters: {displayed}/{total}</div>
}