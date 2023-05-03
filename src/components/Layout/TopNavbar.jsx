import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { AppTitle } from './AppTitle';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ChatHistory } from '../ChatHistory/ChatHistory';
import { Profile } from '../Profile/Profile';


export const TopNavbar = (props) => {
    const { switchTheme } = props;
    return (
        <AppBar position="static">
            <Toolbar>
                <AppTitle/>
                <ThemeSwitcher switchTheme={switchTheme}/>
                <ChatHistory/>
                <Profile/>
            </Toolbar>
        </AppBar>
    );
}