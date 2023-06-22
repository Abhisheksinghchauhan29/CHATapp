import { useState } from "react";

import "./App.css";

import Authpage from "./Authpage";
import Chatspage from "./Chatspage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <Authpage onAuth={(user) => setUser(user)} />;
  } else {
    return <Chatspage user={user} />;
  }
}

export default App;