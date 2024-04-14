import { log } from "console";
import { IIoTDeviceConfig } from "./interfaces/Configurations.interface";
import { BaudRate, DataBits, StopBits, Parity, FlowControl } from "./enums/CommunicationSettings.enum";
import { ModbusConversion } from "./enums/Conversion.enum";
import { MitsuPlcModel, MitsuPlcRegister } from "./enums/Plc.enum";
import { SerialPortType, EthernetPortType } from "./enums/PortType.enum";
import { SerialProtocol, EthernetProtocol } from "./enums/Protocols.enum";

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
                config: {
                    acii: false
                },
                slaveDevices: [
                    {
                        name: 'PLC1',
                        deviceAddress: 2,
                        description: 'PLC1 Description',
                        plcModel: MitsuPlcModel.Q_CPU,
                        scanRate: 1000,
                        IO: [
                            {
                                name: 'IO1',
                                description: 'IO1 Description',
                                register: MitsuPlcRegister.D,
                                startAddress: 0,
                                length: 10,
                                conversion: ModbusConversion.UInt16BigEndian
                            },
                            {
                                name: 'IO2',
                                description: 'IO2 Description',
                                register: MitsuPlcRegister.D,
                                startAddress: 100,
                                length: 10,
                                conversion: ModbusConversion.UInt16BigEndian

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
                            IO: [{
                                name: 'IO1',
                                description: 'IO1 Description',
                                register: MitsuPlcRegister.D,
                                startAddress: 0,
                                length: 10,
                                conversion: ModbusConversion.UInt16BigEndian
                            },
                            {
                                name: 'IO2',
                                description: 'IO2 Description',
                                register: MitsuPlcRegister.D,
                                startAddress: 100,
                                length: 10,
                                conversion: ModbusConversion.UInt16BigEndian
                            }
                            ],
                        }
                    ]
                }]
        }],
    mqtt: {
        mqttConfig: {
            brokerAddress: '192.168.0.1',
            port: 1883,
            clientId: 'device123',
            username: "user1",
            password: "password1",
            keepAlive: 60,
            cleanSession: true,
            useSSL: true,
        },
        topics: [
            {
                topic: "device123/data/temperature",
                publishInterval: 5000,
                payload: [{
                    key: 'temperature',
                    type: 'number',
                    device: 'PLC1',
                    ioName: 'IO1'
                }, {
                    key: 'temperature',
                    type: 'number',
                    device: 'PLC1',
                    ioName: 'IO2'
                }]
            },
            {
                topic: "device123/data/humidity",
                publishInterval: 5000,
                payload: [{
                    key: 'temperature',
                    type: 'number',
                    device: 'PLC2',
                    ioName: 'IO1'
                }, {
                    key: 'temperature',
                    type: 'number',
                    device: 'PLC2',
                    ioName: 'IO2'
                }]
            },
        ]
    }
}


log(JSON.stringify(iotConfig, null, 2));