import { EthernetPortSetting } from "./PortSetting.interface";
import { EthernetProtocol, SerialProtocol } from "./Protocol.interface";

export interface IIoTDeviceConfig {
    serialPorts: SerialPortConfig[];
    ethernetPorts: EthernetPortConfig[];
}


export interface EthernetPortConfig {
    portSettings: EthernetPortSetting
    protocol: EthernetProtocol[];
}

export interface SerialPortConfig {
    portSettings: SerialPortConfig;
    protocol: SerialProtocol;
}


