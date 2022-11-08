export type PortType = {
    id: string,
    name: string,
    portType: string,
    portNumber: number
};

export type CombindePortType = {
    id: string;
    name: string;
    portType: string;
    portNumber: number;
    audios: PortType[];
  };