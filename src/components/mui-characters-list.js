import Link from "@/Link";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Date from "./date";

/**
 * CharactersList component
 * @param {*} characters  
 * @returns 
 */
export default function MuiCharactersList({ characters = [] }) {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
            {characters.map((character) => (
                <ListItem key={character.id} alignItems="flex-start" component={Link} href={"/mui/characters/" + character.id}>
                    <ListItemAvatar>
                        <Avatar alt={character.name} src={ character.thumbnail.path + '/standard_large' + '.' + character.thumbnail.extension } />
                    </ListItemAvatar>
                    <ListItemText primary={character.name} secondary={<Date dateString={character.modified} />} />
                </ListItem>
            ))}
        </List>
    )
}