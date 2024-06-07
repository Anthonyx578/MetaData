create table tarifas(
id_tarifa int primary key,
tipo text,
tarifa numeric (10,2)
)

create table pasajero(
id_pasajero int primary key,
fk_id_tarifa int, 
nombre text,
cedula text,
constraint fk_tarifa foreign key (fk_id_tarifa) references tarifas(id_tarifa)
)

CREATE TABLE INCIDENTE (
    ID_Incidente INT PRIMARY KEY,
    Tipo TEXT,
    Descripcion TEXT
);

CREATE TABLE COBRADOR (
    ID_Cobrador INT PRIMARY KEY,
    Nombres TEXT,
    Apellidos TEXT,
    Cedula TEXT,
    Telefono TEXT
);
CREATE TABLE CONDUCTOR (
    ID_Conductor INT PRIMARY KEY,
    Nombres TEXT,
    Apellidos TEXT,
    Cedula TEXT,
    Telefono TEXT,
    Fecha_Nacimiento DATE
);
CREATE TABLE MULTA (
    ID_Multa INT PRIMARY KEY,
    Tipo TEXT,
    Monto DOUBLE PRECISION
);
CREATE TABLE INFORME_MULTA (
    ID_Conductor INT,
    ID_Multa INT,
    Fecha DATE,
    PRIMARY KEY (ID_Conductor, ID_Multa),
    CONSTRAINT fk_informe_multa_conductor
        FOREIGN KEY (ID_Conductor) REFERENCES CONDUCTOR (ID_Conductor),
    CONSTRAINT fk_informe_multa_multa
        FOREIGN KEY (ID_Multa) REFERENCES MULTA (ID_Multa)
);
CREATE TABLE LINEA (
    ID_Linea INT PRIMARY KEY,
    Num_Unidades INT,
    Campo TEXT
);
-- Tabla BUS
CREATE TABLE BUS (
    ID_Bus INT PRIMARY KEY,
    ID_Linea INT,
    Placa TEXT,
    Capacidad INT,
    Fecha_Adquisicion DATE,
    CONSTRAINT fk_bus_linea
        FOREIGN KEY (ID_Linea) REFERENCES LINEA (ID_Linea)
);
CREATE TABLE PARADAS (
    ID_Parada INT PRIMARY KEY,
    Ubicacion TEXT
);
CREATE TABLE RUTA (
    ID_Linea INT,
    ID_Parada INT,
    Num_Parada INT,
    PRIMARY KEY (ID_Linea, ID_Parada),
    CONSTRAINT fk_ruta_linea
        FOREIGN KEY (ID_Linea) REFERENCES LINEA (ID_Linea),
    CONSTRAINT fk_ruta_parada
        FOREIGN KEY (ID_Parada) REFERENCES PARADAS (ID_Parada)
);
CREATE TABLE MANTENIMIENTO (
    ID_Mantenimiento INT PRIMARY KEY,
    Tipo_Mantenimiento TEXT,
    Descripcion TEXT
);
CREATE TABLE INFORME_MANTENIMIENTO (
    ID_Mantenimiento INT,
    ID_Bus INT,
    Fecha DATE,
    Costo DOUBLE PRECISION,
    PRIMARY KEY (ID_Mantenimiento, ID_Bus),
    CONSTRAINT fk_informe_mantenimiento_mantenimiento
        FOREIGN KEY (ID_Mantenimiento) REFERENCES MANTENIMIENTO (ID_Mantenimiento),
    CONSTRAINT fk_informe_mantenimiento_bus
        FOREIGN KEY (ID_Bus) REFERENCES BUS (ID_Bus)
);
CREATE TABLE INFORME_CONDUCTOR (
    ID_Bus INT,
    ID_Conductor INT,
    ID_Cobrador INT,
    Hora_Entrada TIME,
    Hora_Salida TIME,
    Fecha_Conduccion DATE,
    PRIMARY KEY (ID_Bus, ID_Conductor, ID_Cobrador),
    CONSTRAINT fk_informe_conductor_bus
        FOREIGN KEY (ID_Bus) REFERENCES BUS (ID_Bus),
    CONSTRAINT fk_informe_conductor_conductor
        FOREIGN KEY (ID_Conductor) REFERENCES CONDUCTOR (ID_Conductor),
    CONSTRAINT fk_informe_conductor_cobrador
        FOREIGN KEY (ID_Cobrador) REFERENCES COBRADOR (ID_Cobrador)
);
CREATE TABLE HORARIO (
    ID_Horario INT PRIMARY KEY,
    ID_Linea INT,
    Hora_Inicio TEXT,
    Hora_Fin TEXT,
    CONSTRAINT fk_horario_linea
        FOREIGN KEY (ID_Linea) REFERENCES LINEA (ID_Linea)
);
CREATE TABLE VIAJE (
    ID_Viaje INT PRIMARY KEY,
    ID_Horario INT,
    ID_Linea INT,
    Num_Recorrido_dia INT,
    Fecha DATE,
    Estacion_Salida TEXT,
    Tiempo_Retraso TEXT,
    CONSTRAINT fk_viaje_horario
        FOREIGN KEY (ID_Horario) REFERENCES HORARIO (ID_Horario),
    CONSTRAINT fk_viaje_linea
        FOREIGN KEY (ID_Linea) REFERENCES LINEA (ID_Linea)
);
CREATE TABLE ACONTECIMIENTO (
    ID_Acontecimiento INT PRIMARY KEY,
    ID_Viaje INT,
    ID_Incidente INT,
    Hora TIME,
    Fecha DATE,
    Lugar TEXT,
    CONSTRAINT fk_acontecimiento_viaje
        FOREIGN KEY (ID_Viaje) REFERENCES VIAJE (ID_Viaje),
    CONSTRAINT fk_acontecimiento_incidente
        FOREIGN KEY (ID_Incidente) REFERENCES INCIDENTE (ID_Incidente)
);
create table Registro_viajes(
Fk_id_pasajero int,
Fk_id_viaje int,
CONSTRAINT fk_pasajero
        FOREIGN KEY (Fk_id_pasajero) REFERENCES pasajero (id_pasajero),
    CONSTRAINT fk_acontecimiento_incidente
        FOREIGN KEY (Fk_id_viaje) REFERENCES viaje (ID_Viaje)
)
drop table tarifas
drop table pasajero
drop table INCIDENTE 
drop table COBRADOR
drop table CONDUCTOR
drop table MULTA
drop table INFORME_MULTA
drop table LINEA
drop table bus
drop table RUTA
drop table MANTENIMIENTO
drop table INFORME_MANTENIMIENTO
drop table INFORME_CONDUCTOR
drop table horario
drop table viaje
drop table acontecimiento
drop table Registro_viajes