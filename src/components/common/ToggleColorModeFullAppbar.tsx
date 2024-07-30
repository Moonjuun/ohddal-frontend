import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function ToggleColorModeFullAppbar({ mode, toggleColorMode }: ToggleColorModeProps) {
  return (
    <Box sx={{ maxWidth: '32px' }}>
      <Button
        variant="text"
        onClick={toggleColorMode}
        size="small"
        aria-label="button to toggle theme"
        sx={{
          minWidth: '36px',
          height: '36px',
          p: '4px',
          color: `${mode === 'dark' ? 'yellow' : 'blue'}`,
        }}
      >
        {mode === 'dark' ? (
          <WbSunnyRoundedIcon fontSize="large" />
        ) : (
          <ModeNightRoundedIcon fontSize="large" />
        )}
      </Button>
    </Box>
  );
}

export default ToggleColorModeFullAppbar;
