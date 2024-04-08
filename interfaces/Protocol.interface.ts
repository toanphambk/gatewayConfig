import { ProtocolType } from "../enums/Protocols.enum";
import { ProtocolConfig } from "../types/ProtocolConfigs.type";
import { EthernetSlaveDevice, SerialSlaveDevice } from "./DevicesAndIO.interface";

interface Protocol {
    type: ProtocolType;
    config: ProtocolConfig;
}

export interface EthernetProtocolSetting extends Protocol {
    slaveDevices: EthernetSlaveDevice[];
}

export interface SerialProtocolSetting extends Protocol {
    slaveDevices: SerialSlaveDevice[];
}