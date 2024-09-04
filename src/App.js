import { Outlet } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import UserContext from "./context/UserContext";
import { checkToken } from "./api/storage";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const token = checkToken();
    if (token) {
      setUser(true);
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-mono ">
        <h1 className="color">the user state is {`${user}`}</h1>
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
