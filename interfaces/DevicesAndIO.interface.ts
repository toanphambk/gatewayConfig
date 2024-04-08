import { PlcModel, PlcRegister } from "../enums/Plc.enum";

export interface SlaveDevice {
    name: string;
    description?: string;
    plcModel: PlcModel;
    scanRate: number; //ms
    IO: HardwareIO[];
}

export interface HardwareIO {
    name: string;
    description?: string;
    register: PlcRegister;
    startAddress: number;
    length: number;
}

export interface SerialSlaveDevice extends SlaveDevice {
    deviceAddress: number; // 1-255
}

export interface EthernetSlaveDevice extends SlaveDevice {
    ipAddress: string; //ip address of slave device
}

// read from regiter -> byte [] -> convert to readble data
