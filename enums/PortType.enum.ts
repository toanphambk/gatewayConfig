export enum SerialPortType {
    RS232 = 1,
    RS422 = 2,
    RS485 = 3
}

export enum EthernetPortType {
    MonitorConfiguration = 11,
    Communication = 12
}

export type PortType = SerialPortType | EthernetPortType;