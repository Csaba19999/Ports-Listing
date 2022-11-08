import { v4 as uuidv4 } from "uuid";
import PortsList from "./components/PortsList";
import { PortType } from "./types/portTypes";

import "./App.css";

function App() {
  const ports: PortType[] = [
    {
      id: uuidv4(),
      name: "Video 1",
      portType: "video",
      portNumber: 1,
    },
    {
      id: uuidv4(),
      name: "Video 2",
      portType: "video",
      portNumber: 2,
    },
    {
      id: uuidv4(),
      name: "Audio 1",
      portType: "audio",
      portNumber: 1,
    },
    {
      id: uuidv4(),
      name: "Audio 2",
      portType: "audio",
      portNumber: 2,
    },
    {
      id: uuidv4(),
      name: "Audio 3",
      portType: "audio",
      portNumber: 2,
    },
    {
      id: uuidv4(),
      name: "Audio 4",
      portType: "audio",
      portNumber: 1,
    },
    {
      id: uuidv4(),
      name: "Video 3",
      portType: "video",
      portNumber: 3,
    },
    {
      id: uuidv4(),
      name: "Video 4",
      portType: "video",
      portNumber: 4,
    },
    {
      id: uuidv4(),
      name: "Audio 5",
      portType: "audio",
      portNumber: 3,
    },
    {
      id: uuidv4(),
      name: "Audio 6",
      portType: "audio",
      portNumber: 4,
    },
    {
      id: uuidv4(),
      name: "Audio 7",
      portType: "audio",
      portNumber: 4,
    },
    {
      id: uuidv4(),
      name: "Audio 8",
      portType: "audio",
      portNumber: 3,
    },
  ];

  return (
    <div className="App">
      <h1>Ports Listing</h1>
      <PortsList ports={ports} />
    </div>
  );
}

export default App;
