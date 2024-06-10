import * as React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import FormatTextdirectionLToRIcon from "@mui/icons-material/FormatTextdirectionLToR";
import FormatTextdirectionRToLIcon from "@mui/icons-material/FormatTextdirectionRToL";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
}));

const SettingsDrawer: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mode, setMode] = React.useState("light");
  const [anchor, setAnchor] = React.useState<"left" | "right">("right");

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const handleModeChange = (
    event: React.MouseEvent<HTMLElement>,
    newMode: string
  ) => {
    if (newMode !== null) {
      setMode(newMode);
    }
  };

  const handleDirectionChange = (
    event: React.MouseEvent<HTMLElement>,
    newDirection: "left" | "right"
  ) => {
    if (newDirection !== null) {
      setAnchor(newDirection);
    }
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <SettingsIcon />
      </IconButton>
      <Drawer anchor={anchor} open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 350, padding: 2 }}>
          <h2>Settings</h2>
          <Box>
            <StyledToggleButtonGroup
              color="primary"
              value={mode}
              exclusive
              onChange={handleModeChange}
              aria-label="mode"
            >
              <ToggleButton value="light" aria-label="light">
                <LightModeIcon />
                Light
              </ToggleButton>
              <ToggleButton value="system" aria-label="system">
                <SettingsSystemDaydreamIcon />
                System
              </ToggleButton>
              <ToggleButton value="dark" aria-label="dark">
                <DarkModeIcon />
                Dark
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Box>
          <Box>
            <StyledToggleButtonGroup
              color="primary"
              value={anchor}
              exclusive
              onChange={handleDirectionChange}
              aria-label="text direction"
            >
              <ToggleButton value="left" aria-label="left to right">
                <FormatTextdirectionLToRIcon />
                Left to right
              </ToggleButton>
              <ToggleButton value="right" aria-label="right to left">
                <FormatTextdirectionRToLIcon />
                Right to left
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Box>
          <Button variant="outlined" sx={{ width: "100%", mt: 2 }}>
            Edit documentation colors
          </Button>
        </Box>
      </Drawer>
    </div>
  );
};

export default SettingsDrawer;
