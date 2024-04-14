import { PlcModel, PlcRegister } from "../enums/Plc.enum";
import { ConversionType } from "../enums/Conversion.enum";

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
    conversion: ConversionType
}

export interface SerialSlaveDevice extends SlaveDevice {
    deviceAddress: number; // 1-255
}

export interface EthernetSlaveDevice extends SlaveDevice {
    ipAddress: string; //ip address of slave device
}

// read from regiter -> byte [] -> convert to readble data
