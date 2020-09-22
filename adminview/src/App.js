import React, { useState } from "react";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Client from "./components/Client";
import ShowConnections from "./components/ShowConnections";
import { ourExperts } from "./data/ourExperts";
import { ourClients } from "./data/ourClients";

function App() {
  const [clients, setClients] = useState(ourClients);
  const [connections, setConnections] = useState([]);
  const [selectedExpert, setSelectedExpert] = useState();
  console.log(clients);
  const skip = () => {
    const currClient = clients[0];
    setClients([...clients.slice(1), currClient]);
  };
  const addConnection = () => {
    const newConnectionClient = clients[0];
    setClients(clients.slice(1));
    setConnections([
      ...connections,
      {
        client: newConnectionClient,
        expert: selectedExpert,
        id: newConnectionClient.id,
      },
    ]);
    setSelectedExpert();
    toast.success("Connection Added!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1>Welcome Administrator</h1>
      <div className="mainContainer">
        {clients.length ? (
          <Client
            client={clients[0]}
            experts={ourExperts}
            selectedExpert={selectedExpert}
            setSelectedExpert={setSelectedExpert}
            addConnection={addConnection}
            skip={skip}
          />
        ) : (
          <p>There Are no Clients Left!</p>
        )}
      </div>
      <ShowConnections connections={connections} />
    </div>
  );
}

export default App;
