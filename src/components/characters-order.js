export default function CharacterOrder({ order = 'asc', onAscClick, onDescClick }) {
    return (
        <div>
            Order by name: <button id="ascButton" onClick={onAscClick} style={order === 'asc' ? { color: 'Highlight' } : {}} >Asc</button> <button id="descButton" onClick={onDescClick} style={order === 'desc' ? { color: 'Highlight' } : {}} >Desc</button>
        </div>
    )
}