import HFNested from "./components/HFNested";
import { UserContext } from "./components/contexts/UserContext";
import { useState } from "react";

function App() {
  var [user, setUser] = useState("Paulo Roberto");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <HFNested></HFNested>
      </div>
    </UserContext.Provider>
  );
}

export default App;
