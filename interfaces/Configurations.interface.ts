import { MqttConfiguration } from "./MqttConfig.interface";
import { EthernetPortSetting, SerialPortSetting } from "./PortSetting.interface";
import { EthernetProtocolSetting, SerialProtocolSetting } from './Protocol.interface';

export interface IIoTDeviceConfig {
    serialPorts: SerialPortConfig[];
    ethernetPorts: EthernetPortConfig[];
    mqtt: MqttConfiguration;
}

export interface EthernetPortConfig {
    portSettings: EthernetPortSetting
    protocol: EthernetProtocolSetting[];
}

export interface SerialPortConfig {
    portSettings: SerialPortSetting;
    protocol: SerialProtocolSetting;
}


