import { useState } from "react";

import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./components/Layout/themes";
import { TopNavbar } from "./components/Layout/TopNavbar";
import { Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { UserChat } from "./components/Layout/UserChat";
import { useDispatch } from "react-redux";
import { setNewChat } from "./reducers/chatReducer";

function App() {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div> Loading...</div>
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    dispatch(setNewChat(true));
    return (
      <ThemeProvider
        theme={theme.toLowerCase() === "light" ? lightTheme : darkTheme}
      >
        <>
          <Box mb={4}>
            <TopNavbar switchTheme={setTheme} />
            <UserChat />
          </Box>
        </>
      </ThemeProvider>
    );
  } 
  else {
      return <button onClick={() => loginWithRedirect()}>Log in</button>;
  }
};

export default App;
