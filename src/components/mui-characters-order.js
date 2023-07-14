
import { KeyboardDoubleArrowDownRounded, KeyboardDoubleArrowUpRounded } from '@mui/icons-material';
import { Button } from '@mui/material';

export default function MuiCharacterOrder({ order = 'asc', onAscClick, onDescClick }) {
    return (
        <Button variant="outlined"
            endIcon={order === 'asc' ? <KeyboardDoubleArrowUpRounded /> : <KeyboardDoubleArrowDownRounded />}
            onClick={order === 'asc' ? onDescClick : onAscClick}
        >
            Order by name
        </Button>
    )
}