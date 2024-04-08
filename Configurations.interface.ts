import { BaudRate, DataBits, FlowControl, Parity, StopBits } from "./enums/CommunicationSettings.enum";
import { EthernetPortType, SerialPortType } from './enums/PortType.enum';
import { EthernetPortSetting, SerialPortSetting } from "./interfaces/PortSetting.interface";
import { EthernetProtocolSetting, SerialProtocolSetting } from './interfaces/Protocol.interface';
import { EthernetProtocol, SerialProtocol } from './enums/Protocols.enum';
import { MitsuPlcModel, MitsuPlcRegister } from "./enums/Plc.enum";

export interface IIoTDeviceConfig {
    serialPorts: SerialPortConfig[];
    ethernetPorts: EthernetPortConfig[];
}

export interface EthernetPortConfig {
    portSettings: EthernetPortSetting
    protocol: EthernetProtocolSetting[];
}

export interface SerialPortConfig {
    portSettings: SerialPortSetting;
    protocol: SerialProtocolSetting;
}



const iotConfig: IIoTDeviceConfig = {
    serialPorts: [
        {
            portSettings: {
                portType: SerialPortType.RS232,
                baudRate: BaudRate.B9600,
                dataBits: DataBits.Eight,
                stopBits: StopBits.One,
                parity: Parity.None,
                flowControl: FlowControl.None
            },
            protocol: {
                type: SerialProtocol.MCProtocol,
                config: { acii: false },
                slaveDevices: [
                    {
                        name: 'PLC1',
                        deviceAddress: 2,
                        description?: 'PLC1 Description',
                        plcModel: MitsuPlcModel.Q_CPU,
                        scanRate: 1000,
                        IO: [
                            {
                                name: 'IO1',
                                description: 'IO1 Description',
                                register: MitsuPlcRegister.D,
                                startAddress: 0,
                                length: 10
                            },
                            {
                                name: 'IO2',
                                description: 'IO2 Description',
                                register: MitsuPlcRegister.D,
                                startAddress: 100,
                                length: 10
                            }
                        ],
                    }
                ]
            }
        }
    ],
    ethernetPorts: [
        {
            portSettings: {
                portType: EthernetPortType.Monitor,
                ipAddress: '192.168.0.1',
                subnetMask: '255.255.255.255',
                port: 3000
            },
            protocol: []
        }, {
            portSettings: {
                portType: EthernetPortType.Communication,
                ipAddress: '192.168.1.1',
                subnetMask: '255.255.255.255',
                port: 3001
            },
            protocol: [
                {
                    type: EthernetProtocol.ModbusTCP,
                    config: {},
                    slaveDevices: [
                        {
                            name: 'PLC2',
                            ipAddress: '192.168.1.10',
                            description: 'PLC2 Description',
                            plcModel: MitsuPlcModel.Q_CPU,
                            scanRate: 1000,
                            IO: [
                                {
                                    name: 'IO1',
                                    description: 'IO1 Description',
                                    register: MitsuPlcRegister.D,
                                    startAddress: 0,
                                    length: 10
                                },
                                {
                                    name: 'IO2',
                                    description: 'IO2 Description',
                                    register: MitsuPlcRegister.D,
                                    startAddress: 100,
                                    length: 10
                                }
                            ],
                        }
                    ]
                }]
        }]
}

