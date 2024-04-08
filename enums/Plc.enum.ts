
export enum MitsuPlcRegister {
    X = 1,
    Y = 2,
    M = 3,
    D = 4,
    W = 5,
    L = 6,
    R = 7,
    F = 8,
    V = 9,
    B = 10,
    Z = 11,
    ZR = 12,
};
export enum SiemenPlcRegister {
    I = 21,
    Q = 22,
    M = 23,
    DB = 24,
    T = 25,
    C = 26,
    V = 27
}

export type PlcRegister = MitsuPlcRegister | SiemenPlcRegister;

export enum MitsuPlcModel {
    Fx3 = 1,
    Fx5 = 2,
    Q_CPU = 3,
};

export enum SiemenPLCModel {
    S7_200Smart = 11,
    S7_200 = 12,
    S7_300 = 13,
    S7_400 = 14,
    S7_1200 = 15,
    S7_1500 = 16
}

export type PlcModel = MitsuPlcModel | SiemenPLCModel;
