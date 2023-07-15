import { Typography } from "@mui/material";

/**
 * Displays the number of characters in the list
 * @param {*} characters List of characters 
 * @returns 
 */
export default function MuiNumberOfCharacters({ displayed, total }) {
    return (
        <Typography variant="overline" display="block" gutterBottom color="text.secondary" align="center">
            Number of characters: {displayed}/{total}
        </Typography>
    )
}