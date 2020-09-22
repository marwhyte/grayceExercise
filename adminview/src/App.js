import React, { useState } from "react";
import "./App.scss";

import Client from "./components/Client";
import { ourExperts } from "./data/ourExperts";
import { ourClients } from "./data/ourClients";

function App() {
  const [clients, setClients] = useState(ourClients);
  const [connections, setConnections] = useState([]);
  const [selectedExpert, setSelectedExpert] = useState();
  console.log(selectedExpert);

  return (
    <div className="App">
      <h1>Welcome Administrator</h1>
      <div className="mainContainer">
        <Client
          client={clients[0]}
          experts={ourExperts}
          selectedExpert={selectedExpert}
          setSelectedExpert={setSelectedExpert}
        />
      </div>
    </div>
  );
}

export default App;
