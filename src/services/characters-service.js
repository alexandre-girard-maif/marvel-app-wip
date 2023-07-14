import data from '../../data/characters.json'

/**
 * get all characters
 * @returns 
 */
export function getData() {
    return data
}

/**
 * Get all characters sorted by name asc or desc
 * @param {*} order 
 * @returns 
 */
export function getCharacters(order) {
    let characters = getData()
    if (order === 'desc') {
        characters.sort((a, b) => {
          if (a.name < b.name) {
            return 1
          }
          if (a.name > b.name) {
            return -1
          }
        })
      } else {
        characters.sort((a, b) => {
          if (a.name < b.name) {
            return -1
          }
          if (a.name > b.name) {
            return 1
          }
        })
      }
    return characters
}

/**
 * Get a character by id
 * @param {*} id 
 * @returns 
 */
export function getCharacterBy(id) {
    let characters = getData()
    return characters.find(character => character.id === id)
}