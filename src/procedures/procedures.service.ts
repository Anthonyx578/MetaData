import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ProceduresService {
    constructor(private readonly repositorio: EntityManager){}
    async TarifaCRUD(){
        const insert = `
        CREATE OR REPLACE PROCEDURE tarifa_insertar(
            in_id_tarifa INT,
            in_tipo TEXT,
            in_tarifa NUMERIC
        )
        LANGUAGE plpgsql
        AS $$
        BEGIN
            INSERT INTO tarifas (id_tarifa, tipo, tarifa) VALUES (in_id_tarifa, in_tipo, in_tarifa);
        END;
        $$;
    `;
    await this.repositorio.query(insert);
    //Get
    const get = `
    CREATE OR REPLACE PROCEDURE public.tarifa_obtener(
        in_id_tarifa integer,
        OUT out_id_tarifa integer,
        OUT out_tipo text,
        OUT out_tarifa numeric
    )
    LANGUAGE plpgsql
    AS $procedure$
    BEGIN
        SELECT id_tarifa, tipo, tarifa INTO out_id_tarifa, out_tipo, out_tarifa FROM tarifas WHERE id_tarifa = in_id_tarifa;
    END;
    $procedure$;
    `;

    await this.repositorio.query(get);
    const update = `
        CREATE OR REPLACE PROCEDURE tarifa_actualizar(
            in_id_tarifa INT,
            in_tipo TEXT,
            in_tarifa NUMERIC
        )
        LANGUAGE plpgsql
        AS $$
        BEGIN
            UPDATE tarifas SET tipo = in_tipo, tarifa = in_tarifa WHERE id_tarifa = in_id_tarifa;
        END;
        $$;
    `;
    await this.repositorio.query(update);
    const eliminar = `
        CREATE OR REPLACE PROCEDURE tarifa_eliminar(
            in_id_tarifa INT
        )
        LANGUAGE plpgsql
        AS $$
        BEGIN
            DELETE FROM tarifas WHERE id_tarifa = in_id_tarifa;
        END;
        $$;
    `;
    await this.repositorio.query(eliminar);
    }
    async PasajeroCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE pasajero_insertar(
                in_id_pasajero INT,
                in_fk_id_tarifa INT,
                in_nombre TEXT,
                in_cedula TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO pasajero (id_pasajero, fk_id_tarifa, nombre, cedula) VALUES (in_id_pasajero, in_fk_id_tarifa, in_nombre, in_cedula);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE pasajero_obtener(
                in_id_pasajero INTEGER,
                OUT out_fk_id_tarifa INTEGER,
                OUT out_nombre TEXT,
                OUT out_cedula TEXT
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT fk_id_tarifa, nombre, cedula INTO out_fk_id_tarifa, out_nombre, out_cedula FROM pasajero WHERE id_pasajero = in_id_pasajero;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar
        const update = `
            CREATE OR REPLACE PROCEDURE pasajero_actualizar(
                in_id_pasajero INT,
                in_fk_id_tarifa INT,
                in_nombre TEXT,
                in_cedula TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                UPDATE pasajero SET fk_id_tarifa = in_fk_id_tarifa, nombre = in_nombre, cedula = in_cedula WHERE id_pasajero = in_id_pasajero;
            END;
            $$;
        `;
        await this.repositorio.query(update);
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE pasajero_eliminar(
                in_id_pasajero INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM pasajero WHERE id_pasajero = in_id_pasajero;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async IncidenteCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE incidente_insertar(
                in_id_incidente INT,
                in_tipo TEXT,
                in_descripcion TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO incidente (ID_Incidente, Tipo, Descripcion) VALUES (in_id_incidente, in_tipo, in_descripcion);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE incidente_obtener(
                in_id_incidente INTEGER,
                OUT out_tipo TEXT,
                OUT out_descripcion TEXT
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT Tipo, Descripcion INTO out_tipo, out_descripcion FROM incidente WHERE ID_Incidente = in_id_incidente;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar
        const update = `
            CREATE OR REPLACE PROCEDURE incidente_actualizar(
                in_id_incidente INT,
                in_tipo TEXT,
                in_descripcion TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                UPDATE incidente SET Tipo = in_tipo, Descripcion = in_descripcion WHERE ID_Incidente = in_id_incidente;
            END;
            $$;
        `;
        await this.repositorio.query(update);
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE incidente_eliminar(
                in_id_incidente INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM incidente WHERE ID_Incidente = in_id_incidente;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async CobradorCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE cobrador_insertar(
                in_id_cobrador INT,
                in_nombres TEXT,
                in_apellidos TEXT,
                in_cedula TEXT,
                in_telefono TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO cobrador (ID_Cobrador, Nombres, Apellidos, Cedula, Telefono) VALUES (in_id_cobrador, in_nombres, in_apellidos, in_cedula, in_telefono);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE cobrador_obtener(
                in_id_cobrador INTEGER,
                OUT out_nombres TEXT,
                OUT out_apellidos TEXT,
                OUT out_cedula TEXT,
                OUT out_telefono TEXT
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT Nombres, Apellidos, Cedula, Telefono INTO out_nombres, out_apellidos, out_cedula, out_telefono FROM cobrador WHERE ID_Cobrador = in_id_cobrador;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar
        const update = `
            CREATE OR REPLACE PROCEDURE cobrador_actualizar(
                in_id_cobrador INT,
                in_nombres TEXT,
                in_apellidos TEXT,
                in_cedula TEXT,
                in_telefono TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                UPDATE cobrador SET Nombres = in_nombres, Apellidos = in_apellidos, Cedula = in_cedula, Telefono = in_telefono WHERE ID_Cobrador = in_id_cobrador;
            END;
            $$;
        `;
        await this.repositorio.query(update);
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE cobrador_eliminar(
                in_id_cobrador INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM cobrador WHERE ID_Cobrador = in_id_cobrador;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async ConductorCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE conductor_insertar(
                in_id_conductor INT,
                in_nombres TEXT,
                in_apellidos TEXT,
                in_cedula TEXT,
                in_telefono TEXT,
                in_fecha_nacimiento DATE
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO conductor (ID_Conductor, Nombres, Apellidos, Cedula, Telefono, Fecha_Nacimiento) 
                VALUES (in_id_conductor, in_nombres, in_apellidos, in_cedula, in_telefono, in_fecha_nacimiento);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE conductor_obtener(
                in_id_conductor INTEGER,
                OUT out_nombres TEXT,
                OUT out_apellidos TEXT,
                OUT out_cedula TEXT,
                OUT out_telefono TEXT,
                OUT out_fecha_nacimiento DATE
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT Nombres, Apellidos, Cedula, Telefono, Fecha_Nacimiento 
                INTO out_nombres, out_apellidos, out_cedula, out_telefono, out_fecha_nacimiento 
                FROM conductor 
                WHERE ID_Conductor = in_id_conductor;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar
        const update = `
            CREATE OR REPLACE PROCEDURE conductor_actualizar(
                in_id_conductor INT,
                in_nombres TEXT,
                in_apellidos TEXT,
                in_cedula TEXT,
                in_telefono TEXT,
                in_fecha_nacimiento DATE
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                UPDATE conductor 
                SET Nombres = in_nombres, Apellidos = in_apellidos, Cedula = in_cedula, Telefono = in_telefono, Fecha_Nacimiento = in_fecha_nacimiento 
                WHERE ID_Conductor = in_id_conductor;
            END;
            $$;
        `;
        await this.repositorio.query(update);
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE conductor_eliminar(
                in_id_conductor INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM conductor WHERE ID_Conductor = in_id_conductor;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async MultaCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE multa_insertar(
                in_id_multa INT,
                in_tipo TEXT,
                in_monto DOUBLE PRECISION
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO multa (ID_Multa, Tipo, Monto) VALUES (in_id_multa, in_tipo, in_monto);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE multa_obtener(
                in_id_multa INTEGER,
                OUT out_tipo TEXT,
                OUT out_monto DOUBLE PRECISION
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT Tipo, Monto INTO out_tipo, out_monto FROM multa WHERE ID_Multa = in_id_multa;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar
        const update = `
            CREATE OR REPLACE PROCEDURE multa_actualizar(
                in_id_multa INT,
                in_tipo TEXT,
                in_monto DOUBLE PRECISION
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                UPDATE multa SET Tipo = in_tipo, Monto = in_monto WHERE ID_Multa = in_id_multa;
            END;
            $$;
        `;
        await this.repositorio.query(update);
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE multa_eliminar(
                in_id_multa INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM multa WHERE ID_Multa = in_id_multa;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async InformeMultaCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE informe_multa_insertar(
                in_id_conductor INT,
                in_id_multa INT,
                in_fecha DATE
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO informe_multa (ID_Conductor, ID_Multa, Fecha) VALUES (in_id_conductor, in_id_multa, in_fecha);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE informe_multa_obtener(
                in_id_conductor INT,
                in_id_multa INT,
                OUT out_fecha DATE
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT Fecha INTO out_fecha FROM informe_multa WHERE ID_Conductor = in_id_conductor AND ID_Multa = in_id_multa;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar (en este caso, solo se permite insertar y eliminar registros en esta tabla)
        
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE informe_multa_eliminar(
                in_id_conductor INT,
                in_id_multa INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM informe_multa WHERE ID_Conductor = in_id_conductor AND ID_Multa = in_id_multa;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async LineaCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE linea_insertar(
                in_id_linea INT,
                in_num_unidades INT,
                in_campo TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO linea (ID_Linea, Num_Unidades, Campo) VALUES (in_id_linea, in_num_unidades, in_campo);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE linea_obtener(
                in_id_linea INT,
                OUT out_num_unidades INT,
                OUT out_campo TEXT
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT Num_Unidades, Campo INTO out_num_unidades, out_campo FROM linea WHERE ID_Linea = in_id_linea;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar
        const update = `
            CREATE OR REPLACE PROCEDURE linea_actualizar(
                in_id_linea INT,
                in_num_unidades INT,
                in_campo TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                UPDATE linea SET Num_Unidades = in_num_unidades, Campo = in_campo WHERE ID_Linea = in_id_linea;
            END;
            $$;
        `;
        await this.repositorio.query(update);
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE linea_eliminar(
                in_id_linea INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM linea WHERE ID_Linea = in_id_linea;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async BusCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE bus_insertar(
                in_id_bus INT,
                in_id_linea INT,
                in_placa TEXT,
                in_capacidad INT,
                in_fecha_adquisicion DATE
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO bus (ID_Bus, ID_Linea, Placa, Capacidad, Fecha_Adquisicion) 
                VALUES (in_id_bus, in_id_linea, in_placa, in_capacidad, in_fecha_adquisicion);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE bus_obtener(
                in_id_bus INT,
                OUT out_id_linea INT,
                OUT out_placa TEXT,
                OUT out_capacidad INT,
                OUT out_fecha_adquisicion DATE
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT ID_Linea, Placa, Capacidad, Fecha_Adquisicion 
                INTO out_id_linea, out_placa, out_capacidad, out_fecha_adquisicion 
                FROM bus 
                WHERE ID_Bus = in_id_bus;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar
        const update = `
            CREATE OR REPLACE PROCEDURE bus_actualizar(
                in_id_bus INT,
                in_id_linea INT,
                in_placa TEXT,
                in_capacidad INT,
                in_fecha_adquisicion DATE
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                UPDATE bus 
                SET ID_Linea = in_id_linea, Placa = in_placa, Capacidad = in_capacidad, Fecha_Adquisicion = in_fecha_adquisicion 
                WHERE ID_Bus = in_id_bus;
            END;
            $$;
        `;
        await this.repositorio.query(update);
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE bus_eliminar(
                in_id_bus INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM bus WHERE ID_Bus = in_id_bus;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async ParadasCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE parada_insertar(
                in_id_parada INT,
                in_ubicacion TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO paradas (ID_Parada, Ubicacion) VALUES (in_id_parada, in_ubicacion);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE parada_obtener(
                in_id_parada INT,
                OUT out_ubicacion TEXT
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT Ubicacion INTO out_ubicacion FROM paradas WHERE ID_Parada = in_id_parada;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar
        const update = `
            CREATE OR REPLACE PROCEDURE parada_actualizar(
                in_id_parada INT,
                in_ubicacion TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                UPDATE paradas SET Ubicacion = in_ubicacion WHERE ID_Parada = in_id_parada;
            END;
            $$;
        `;
        await this.repositorio.query(update);
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE parada_eliminar(
                in_id_parada INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM paradas WHERE ID_Parada = in_id_parada;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async RutaCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE ruta_insertar(
                in_id_linea INT,
                in_id_parada INT,
                in_num_parada INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO ruta (ID_Linea, ID_Parada, Num_Parada) VALUES (in_id_linea, in_id_parada, in_num_parada);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE ruta_obtener(
                in_id_linea INT,
                in_id_parada INT,
                OUT out_num_parada INT
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT Num_Parada INTO out_num_parada FROM ruta WHERE ID_Linea = in_id_linea AND ID_Parada = in_id_parada;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar (en este caso, no es necesario actualizar la tabla de ruta, ya que las rutas podrían cambiar raramente y sería más común agregar o eliminar paradas)
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE ruta_eliminar(
                in_id_linea INT,
                in_id_parada INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM ruta WHERE ID_Linea = in_id_linea AND ID_Parada = in_id_parada;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async MantenimientoCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE mantenimiento_insertar(
                in_id_mantenimiento INT,
                in_tipo_mantenimiento TEXT,
                in_descripcion TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO mantenimiento (ID_Mantenimiento, Tipo_Mantenimiento, Descripcion) 
                VALUES (in_id_mantenimiento, in_tipo_mantenimiento, in_descripcion);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE mantenimiento_obtener(
                in_id_mantenimiento INT,
                OUT out_tipo_mantenimiento TEXT,
                OUT out_descripcion TEXT
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT Tipo_Mantenimiento, Descripcion INTO out_tipo_mantenimiento, out_descripcion 
                FROM mantenimiento WHERE ID_Mantenimiento = in_id_mantenimiento;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar
        const update = `
            CREATE OR REPLACE PROCEDURE mantenimiento_actualizar(
                in_id_mantenimiento INT,
                in_tipo_mantenimiento TEXT,
                in_descripcion TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                UPDATE mantenimiento SET Tipo_Mantenimiento = in_tipo_mantenimiento, Descripcion = in_descripcion 
                WHERE ID_Mantenimiento = in_id_mantenimiento;
            END;
            $$;
        `;
        await this.repositorio.query(update);
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE mantenimiento_eliminar(
                in_id_mantenimiento INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM mantenimiento WHERE ID_Mantenimiento = in_id_mantenimiento;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async InformeMantenimientoCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE informe_mantenimiento_insertar(
                in_id_mantenimiento INT,
                in_id_bus INT,
                in_fecha DATE,
                in_costo DOUBLE PRECISION
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO informe_mantenimiento (ID_Mantenimiento, ID_Bus, Fecha, Costo) 
                VALUES (in_id_mantenimiento, in_id_bus, in_fecha, in_costo);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE informe_mantenimiento_obtener(
                in_id_mantenimiento INT,
                in_id_bus INT,
                OUT out_fecha DATE,
                OUT out_costo DOUBLE PRECISION
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT Fecha, Costo INTO out_fecha, out_costo 
                FROM informe_mantenimiento 
                WHERE ID_Mantenimiento = in_id_mantenimiento AND ID_Bus = in_id_bus;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar (en este caso, no es necesario actualizar la tabla de informe de mantenimiento, ya que los registros históricos generalmente no se modifican)
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE informe_mantenimiento_eliminar(
                in_id_mantenimiento INT,
                in_id_bus INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM informe_mantenimiento WHERE ID_Mantenimiento = in_id_mantenimiento AND ID_Bus = in_id_bus;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async InformeConductorCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE informe_conductor_insertar(
                in_id_bus INT,
                in_id_conductor INT,
                in_id_cobrador INT,
                in_hora_entrada TIME,
                in_hora_salida TIME,
                in_fecha_conduccion DATE
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO informe_conductor (ID_Bus, ID_Conductor, ID_Cobrador, Hora_Entrada, Hora_Salida, Fecha_Conduccion) 
                VALUES (in_id_bus, in_id_conductor, in_id_cobrador, in_hora_entrada, in_hora_salida, in_fecha_conduccion);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE informe_conductor_obtener(
                in_id_bus INT,
                in_id_conductor INT,
                in_id_cobrador INT,
                OUT out_hora_entrada TIME,
                OUT out_hora_salida TIME,
                OUT out_fecha_conduccion DATE
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT Hora_Entrada, Hora_Salida, Fecha_Conduccion 
                INTO out_hora_entrada, out_hora_salida, out_fecha_conduccion 
                FROM informe_conductor 
                WHERE ID_Bus = in_id_bus AND ID_Conductor = in_id_conductor AND ID_Cobrador = in_id_cobrador;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar (en este caso, no es necesario actualizar la tabla de informe de conductor, ya que los registros históricos generalmente no se modifican)
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE informe_conductor_eliminar(
                in_id_bus INT,
                in_id_conductor INT,
                in_id_cobrador INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM informe_conductor WHERE ID_Bus = in_id_bus AND ID_Conductor = in_id_conductor AND ID_Cobrador = in_id_cobrador;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async HorarioCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE horario_insertar(
                in_id_horario INT,
                in_id_linea INT,
                in_hora_inicio TEXT,
                in_hora_fin TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO horario (ID_Horario, ID_Linea, Hora_Inicio, Hora_Fin) 
                VALUES (in_id_horario, in_id_linea, in_hora_inicio, in_hora_fin);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE horario_obtener(
                in_id_horario INT,
                OUT out_id_linea INT,
                OUT out_hora_inicio TEXT,
                OUT out_hora_fin TEXT
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT ID_Linea, Hora_Inicio, Hora_Fin 
                INTO out_id_linea, out_hora_inicio, out_hora_fin 
                FROM horario 
                WHERE ID_Horario = in_id_horario;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar
        const update = `
            CREATE OR REPLACE PROCEDURE horario_actualizar(
                in_id_horario INT,
                in_id_linea INT,
                in_hora_inicio TEXT,
                in_hora_fin TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                UPDATE horario 
                SET ID_Linea = in_id_linea, Hora_Inicio = in_hora_inicio, Hora_Fin = in_hora_fin 
                WHERE ID_Horario = in_id_horario;
            END;
            $$;
        `;
        await this.repositorio.query(update);
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE horario_eliminar(
                in_id_horario INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM horario WHERE ID_Horario = in_id_horario;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async ViajeCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE viaje_insertar(
                in_id_viaje INT,
                in_id_horario INT,
                in_id_linea INT,
                in_num_recorrido_dia INT,
                in_fecha DATE,
                in_estacion_salida TEXT,
                in_tiempo_retraso TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO viaje (ID_Viaje, ID_Horario, ID_Linea, Num_Recorrido_dia, Fecha, Estacion_Salida, Tiempo_Retraso) 
                VALUES (in_id_viaje, in_id_horario, in_id_linea, in_num_recorrido_dia, in_fecha, in_estacion_salida, in_tiempo_retraso);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE viaje_obtener(
                in_id_viaje INT,
                OUT out_id_horario INT,
                OUT out_id_linea INT,
                OUT out_num_recorrido_dia INT,
                OUT out_fecha DATE,
                OUT out_estacion_salida TEXT,
                OUT out_tiempo_retraso TEXT
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT ID_Horario, ID_Linea, Num_Recorrido_dia, Fecha, Estacion_Salida, Tiempo_Retraso 
                INTO out_id_horario, out_id_linea, out_num_recorrido_dia, out_fecha, out_estacion_salida, out_tiempo_retraso 
                FROM viaje 
                WHERE ID_Viaje = in_id_viaje;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar
        const update = `
            CREATE OR REPLACE PROCEDURE viaje_actualizar(
                in_id_viaje INT,
                in_id_horario INT,
                in_id_linea INT,
                in_num_recorrido_dia INT,
                in_fecha DATE,
                in_estacion_salida TEXT,
                in_tiempo_retraso TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                UPDATE viaje 
                SET ID_Horario = in_id_horario, ID_Linea = in_id_linea, Num_Recorrido_dia = in_num_recorrido_dia, 
                Fecha = in_fecha, Estacion_Salida = in_estacion_salida, Tiempo_Retraso = in_tiempo_retraso 
                WHERE ID_Viaje = in_id_viaje;
            END;
            $$;
        `;
        await this.repositorio.query(update);
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE viaje_eliminar(
                in_id_viaje INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM viaje WHERE ID_Viaje = in_id_viaje;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async AcontecimientoCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE acontecimiento_insertar(
                in_id_acontecimiento INT,
                in_id_viaje INT,
                in_id_incidente INT,
                in_hora TIME,
                in_fecha DATE,
                in_lugar TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO acontecimiento (ID_Acontecimiento, ID_Viaje, ID_Incidente, Hora, Fecha, Lugar) 
                VALUES (in_id_acontecimiento, in_id_viaje, in_id_incidente, in_hora, in_fecha, in_lugar);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE acontecimiento_obtener(
                in_id_acontecimiento INT,
                OUT out_id_viaje INT,
                OUT out_id_incidente INT,
                OUT out_hora TIME,
                OUT out_fecha DATE,
                OUT out_lugar TEXT
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT ID_Viaje, ID_Incidente, Hora, Fecha, Lugar 
                INTO out_id_viaje, out_id_incidente, out_hora, out_fecha, out_lugar 
                FROM acontecimiento 
                WHERE ID_Acontecimiento = in_id_acontecimiento;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar
        const update = `
            CREATE OR REPLACE PROCEDURE acontecimiento_actualizar(
                in_id_acontecimiento INT,
                in_id_viaje INT,
                in_id_incidente INT,
                in_hora TIME,
                in_fecha DATE,
                in_lugar TEXT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                UPDATE acontecimiento 
                SET ID_Viaje = in_id_viaje, ID_Incidente = in_id_incidente, Hora = in_hora, 
                Fecha = in_fecha, Lugar = in_lugar 
                WHERE ID_Acontecimiento = in_id_acontecimiento;
            END;
            $$;
        `;
        await this.repositorio.query(update);
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE acontecimiento_eliminar(
                in_id_acontecimiento INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM acontecimiento WHERE ID_Acontecimiento = in_id_acontecimiento;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }
    async RegistroViajesCRUD() {
        // Insertar
        const insert = `
            CREATE OR REPLACE PROCEDURE registro_viajes_insertar(
                in_fk_id_pasajero INT,
                in_fk_id_viaje INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                INSERT INTO Registro_viajes (Fk_id_pasajero, Fk_id_viaje) 
                VALUES (in_fk_id_pasajero, in_fk_id_viaje);
            END;
            $$;
        `;
        await this.repositorio.query(insert);
    
        // Obtener
        const get = `
            CREATE OR REPLACE PROCEDURE registro_viajes_obtener(
                in_fk_id_pasajero INT,
                OUT out_fk_id_viaje INT
            )
            LANGUAGE plpgsql
            AS $procedure$
            BEGIN
                SELECT Fk_id_viaje 
                INTO out_fk_id_viaje
                FROM Registro_viajes 
                WHERE Fk_id_pasajero = in_fk_id_pasajero;
            END;
            $procedure$;
        `;
        await this.repositorio.query(get);
    
        // Actualizar
        const update = `
            CREATE OR REPLACE PROCEDURE registro_viajes_actualizar(
                in_fk_id_pasajero INT,
                in_new_fk_id_viaje INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                UPDATE Registro_viajes 
                SET Fk_id_viaje = in_new_fk_id_viaje
                WHERE Fk_id_pasajero = in_fk_id_pasajero;
            END;
            $$;
        `;
        await this.repositorio.query(update);
    
        // Eliminar
        const eliminar = `
            CREATE OR REPLACE PROCEDURE registro_viajes_eliminar(
                in_fk_id_pasajero INT
            )
            LANGUAGE plpgsql
            AS $$
            BEGIN
                DELETE FROM Registro_viajes WHERE Fk_id_pasajero = in_fk_id_pasajero;
            END;
            $$;
        `;
        await this.repositorio.query(eliminar);
    }    
}
