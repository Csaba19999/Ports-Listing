import { useEffect, useState } from "react";
import { List } from "@mui/material";
import { PortType, CombindePortType } from "../types/portTypes";
import PortsListItem from "./PortsListItem";
import Search from "./search";

import classes from "./PortsList.module.css";

type propsType = {
  ports: PortType[];
};

function PortsList(props: propsType) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loadedPorts, setLoadedPorts] = useState<CombindePortType[]>([]);

  useEffect(() => {
    loadPorts(searchTerm);
  }, [searchTerm]);

  const loadPorts = (term: string) => {
    const ports = props.ports;
    let orderedPorts: CombindePortType[] = [];

    ports.forEach((port) => {
      if (port.portType === "video") {
        let newPort: CombindePortType = {
          id: port.id,
          name: port.name,
          portType: port.portType,
          portNumber: port.portNumber,
          audios: [],
        };
        const audios = ports.filter(
          (audioPort) =>
            audioPort.portNumber === port.portNumber &&
            audioPort.portType === "audio"
        );
        newPort.audios = audios;
        orderedPorts.push(newPort);
      }
      if(searchTerm){
        orderedPorts = orderedPorts.filter((port) => port.name.includes(term));
      }
    });
    setLoadedPorts(orderedPorts);
  };

  const handleSearchTermChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <List className={classes.list}>
      <Search handleOnChange={handleSearchTermChange} />
      {loadedPorts.map((port) => (
        <PortsListItem key={port.id} port={port} />
      ))}
    </List>
  );
}

export default PortsList;
