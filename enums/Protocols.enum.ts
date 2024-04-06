enum SerialProtocol {
    ModbusRTU = 1,
    MCProtocol = 2
}

enum EthernetProtocol {
    ModbusTCP = 11,
    S7Protocol = 12,
    MCProtocol = 13
}


export type ProtocolType = SerialProtocol | EthernetProtocol;