import Link from "@/Link";

/**
 * CharactersList component
 * @param {*} characters  
 * @returns 
 */
export default function CharactersList({ characters = [] }) {
    return (
        <div>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        <Link href={"/characters/" + character.id}>{character.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}