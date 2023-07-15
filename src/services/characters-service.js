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
export function getCharacters(orderBy = 'name', order = 'asc', limit = 10) {
    let characters = getData()
    if (order === 'desc') {
        characters.sort((a, b) => {
          if (a[orderBy] < b[orderBy]) {
            return 1
          }
          if (a[orderBy] > b[orderBy]) {
            return -1
          }
        })
      } else {
        characters.sort((a, b) => {
          if (a[orderBy] < b[orderBy]) {
            return -1
          }
          if (a[orderBy] > b[orderBy]) {
            return 1
          }
        })
      }
    return characters.slice(0, limit)
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

export function getNumberOfCharacters() {
    return getData().length
}