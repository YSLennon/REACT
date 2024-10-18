import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { purple, red } from '@mui/material/colors';

const MUI = () => {


const primary = red[500]; // #f44336
// const accent = purple['A200']; // #e040fb
const accent = purple.A200; // #e040fb (alternative method)

    return (
        <div>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained" color="primary">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        </div>
    );
};

export default MUI;