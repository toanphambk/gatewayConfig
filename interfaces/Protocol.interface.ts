import { ProtocolType } from "../enums/Protocols.enum";
import { ProtocolConfig } from "../types/ProtocolConfigs.type";
import { EthernetSlaveDevice, SerialSlaveDevice } from "./DevicesAndIO.interface";

interface Protocol {
    type: ProtocolType;
    config: ProtocolConfig;
}

export interface EthernetProtocol extends Protocol {
    slaveDevices: EthernetSlaveDevice[];
}

export interface SerialProtocol extends Protocol {
    slaveDevices: SerialSlaveDevice[];
}