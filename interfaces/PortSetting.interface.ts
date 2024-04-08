import { BaudRate, DataBits, StopBits, Parity, FlowControl } from "../enums/CommunicationSettings.enum";
import { PortType } from "../enums/PortType.enum";

interface PortSetting {
    portType: PortType;
}

export interface EthernetPortSetting extends PortSetting {
    ipAddress: string;
    subnetMask: string;
    defaultGateway?: string;
}

export interface SerialPortSetting extends PortSetting {
    baudRate: BaudRate;
    dataBits: DataBits;
    stopBits: StopBits;
    parity: Parity;
    flowControl: FlowControl;
}
