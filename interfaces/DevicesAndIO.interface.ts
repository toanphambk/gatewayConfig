import { PlcModel, PlcRegister } from "../enums/Plc.enum";

export interface SlaveDevice {
    name: string;
    description?: string;
    plcModel: PlcModel;
    scanRate: number;
    IO: HardwareIO[];
}

export interface HardwareIO {
    name: string;
    description?: string;
    adress: PlcRegister;
    startAddress: number;
    length: number;
}

export interface SerialSlaveDevice extends SlaveDevice {
    deviceAddress: number;
}

export interface EthernetSlaveDevice extends SlaveDevice {
    ipAddress: string;
    port: number;
}
