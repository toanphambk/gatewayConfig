import { EthernetPortSetting, SerialPortSetting } from "./interfaces/PortSetting.interface";
import { EthernetProtocol, SerialProtocol } from "./interfaces/Protocol.interface";

export interface IIoTDeviceConfig {
    serialPorts: SerialPortConfig[];
    ethernetPorts: EthernetPortConfig[];
}

export interface EthernetPortConfig {
    portSettings: EthernetPortSetting
    protocol: EthernetProtocol[];
}

export interface SerialPortConfig {
    portSettings: SerialPortSetting;
    protocol: SerialProtocol;
}


