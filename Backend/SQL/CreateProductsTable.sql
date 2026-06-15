use AppleUADB


CREATE TABLE Products
(
    Id INT IDENTITY(1,1) PRIMARY KEY,

    ProductName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(MAX) NULL,

    ColorsAmount INT NOT NULL,
    ColorNames NVARCHAR(200) NOT NULL,

    Battery INT NOT NULL,

    DisplayName NVARCHAR(50) NULL,
    DisplayInches DECIMAL(3,1) NOT NULL,
    DisplayBrightness INT NOT NULL,

    PixelsAmount INT NOT NULL,
    ColorsSupported BIGINT NULL,

    Material NVARCHAR(50) NOT NULL,
    Chip NVARCHAR(50) NOT NULL,

    CameraResolution NVARCHAR(50) NOT NULL,

    SpeakersAmount INT NOT NULL,

    Ports NVARCHAR(100) NOT NULL,
    PortsAmount INT NOT NULL,

    AppleIntelligence BIT NULL,
    AppleIntelligenceDescription NVARCHAR(MAX) NULL,

    DolbyAtmos BIT NULL,
    Handoff BIT NULL,
    InstantHotspot BIT NULL,
    TouchID BIT NULL
);