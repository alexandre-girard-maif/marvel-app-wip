import { getCharacterBy, getCharacters, getData } from "./characters-service"

test('getData returns data', () => {
    const actual = getData()

    expect(actual.length).toBe(11);
});

test('getCharacters asc returns sorted characters asc', () => {
    const characters = getCharacters('asc')

    expect(characters.length).toBe(11);
    expect(characters[0].name).toEqual("Beast");
});

test('getCharacters desc returns sorted characters desc', () => {
    const characters = getCharacters('desc')

    expect(characters.length).toBe(11);
    expect(characters[0].name).toEqual("Wolverine");
});

test('getCharacterBy returns a character', () => {
    const actual = getCharacterBy('1009175')

    expect(actual.name).toEqual("Beast");
});