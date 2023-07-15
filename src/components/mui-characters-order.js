
import { KeyboardDoubleArrowDownRounded, KeyboardDoubleArrowUpRounded } from '@mui/icons-material';
import { Button, Container } from '@mui/material';

export default function MuiCharacterOrder({ orderBy = 'name', order = 'asc', onDescClickByName, onAscClickByName, onDescClickByModified, onAscClickByModified }) {
    return (
        <Container maxWidth="md">
            <Button id='orderByNameButton' variant="outlined" size="small" color={orderBy === 'name' ? 'secondary' : 'primary'}
                endIcon={order === 'asc' ? <KeyboardDoubleArrowUpRounded /> : <KeyboardDoubleArrowDownRounded />}
                onClick={order === 'asc' ? onDescClickByName : onAscClickByName}
            >
                Order by name
            </Button>
            <Button id='orderByDateButton' variant="outlined"  size="small" color={orderBy === 'modified' ? 'secondary' : 'primary'}
                endIcon={order === 'asc' ? <KeyboardDoubleArrowUpRounded /> : <KeyboardDoubleArrowDownRounded />}
                onClick={order === 'asc' ? onDescClickByModified : onAscClickByModified}
            >
                Order by date
            </Button>
        </Container>
    )
}