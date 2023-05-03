import Switch from "@mui/material/Switch";
import { useState } from "react";

export const ThemeSwitcher = (props) => {
    const [checked, setChecked] = useState(false);
    const { switchTheme }  = props;
    const handleChange = (event) => {
        const switchValue = event.target.checked
        setChecked(switchValue);
        switchTheme(switchValue ? 'dark' : 'light');
      };
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      color="warning"
      inputProps={{ "aria-label": "controlled" }}
    />
  );
};
