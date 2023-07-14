export default function CharactersStatsArray({ character = {} }) {
    return (
        <table >
            <thead>
                <tr>
                    <th>Comics</th>
                    <th>Series</th>
                    <th>Stories</th>
                    <th>Events</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{character.comics?.available}</td>
                    <td>{character.series?.available}</td>
                    <td>{character.stories?.available}</td>
                    <td>{character.events?.available}</td>
                </tr>
            </tbody>
        </table>
    )
}