export enum SerialPortType {
    RS232 = 1,
    RS422 = 2,
    RS485 = 3
}

export enum EthernetPortType {
    Monitor = 11, //use for monitoring only
    Communication = 12 // use for communication
}

export type PortType = SerialPortType | EthernetPortType;