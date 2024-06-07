--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.2 (Debian 16.2-1.pgdg120+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: cobrador_actualizar(integer, text, text, text, text); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.cobrador_actualizar(IN in_id_cobrador integer, IN in_nombres text, IN in_apellidos text, IN in_cedula text, IN in_telefono text)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                UPDATE cobrador SET Nombres = in_nombres, Apellidos = in_apellidos, Cedula = in_cedula, Telefono = in_telefono WHERE ID_Cobrador = in_id_cobrador;
            END;
            $$;


ALTER PROCEDURE public.cobrador_actualizar(IN in_id_cobrador integer, IN in_nombres text, IN in_apellidos text, IN in_cedula text, IN in_telefono text) OWNER TO "Anthony";

--
-- Name: cobrador_eliminar(integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.cobrador_eliminar(IN in_id_cobrador integer)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                DELETE FROM cobrador WHERE ID_Cobrador = in_id_cobrador;
            END;
            $$;


ALTER PROCEDURE public.cobrador_eliminar(IN in_id_cobrador integer) OWNER TO "Anthony";

--
-- Name: cobrador_insertar(integer, text, text, text, text); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.cobrador_insertar(IN in_id_cobrador integer, IN in_nombres text, IN in_apellidos text, IN in_cedula text, IN in_telefono text)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                INSERT INTO cobrador (ID_Cobrador, Nombres, Apellidos, Cedula, Telefono) VALUES (in_id_cobrador, in_nombres, in_apellidos, in_cedula, in_telefono);
            END;
            $$;


ALTER PROCEDURE public.cobrador_insertar(IN in_id_cobrador integer, IN in_nombres text, IN in_apellidos text, IN in_cedula text, IN in_telefono text) OWNER TO "Anthony";

--
-- Name: cobrador_obtener(integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.cobrador_obtener(IN in_id_cobrador integer, OUT out_nombres text, OUT out_apellidos text, OUT out_cedula text, OUT out_telefono text)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                SELECT Nombres, Apellidos, Cedula, Telefono INTO out_nombres, out_apellidos, out_cedula, out_telefono FROM cobrador WHERE ID_Cobrador = in_id_cobrador;
            END;
            $$;


ALTER PROCEDURE public.cobrador_obtener(IN in_id_cobrador integer, OUT out_nombres text, OUT out_apellidos text, OUT out_cedula text, OUT out_telefono text) OWNER TO "Anthony";

--
-- Name: conductor_actualizar(integer, text, text, text, text, date); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.conductor_actualizar(IN in_id_conductor integer, IN in_nombres text, IN in_apellidos text, IN in_cedula text, IN in_telefono text, IN in_fecha_nacimiento date)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                UPDATE conductor 
                SET Nombres = in_nombres, Apellidos = in_apellidos, Cedula = in_cedula, Telefono = in_telefono, Fecha_Nacimiento = in_fecha_nacimiento 
                WHERE ID_Conductor = in_id_conductor;
            END;
            $$;


ALTER PROCEDURE public.conductor_actualizar(IN in_id_conductor integer, IN in_nombres text, IN in_apellidos text, IN in_cedula text, IN in_telefono text, IN in_fecha_nacimiento date) OWNER TO "Anthony";

--
-- Name: conductor_eliminar(integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.conductor_eliminar(IN in_id_conductor integer)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                DELETE FROM conductor WHERE ID_Conductor = in_id_conductor;
            END;
            $$;


ALTER PROCEDURE public.conductor_eliminar(IN in_id_conductor integer) OWNER TO "Anthony";

--
-- Name: conductor_insertar(integer, text, text, text, text, date); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.conductor_insertar(IN in_id_conductor integer, IN in_nombres text, IN in_apellidos text, IN in_cedula text, IN in_telefono text, IN in_fecha_nacimiento date)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                INSERT INTO conductor (ID_Conductor, Nombres, Apellidos, Cedula, Telefono, Fecha_Nacimiento) 
                VALUES (in_id_conductor, in_nombres, in_apellidos, in_cedula, in_telefono, in_fecha_nacimiento);
            END;
            $$;


ALTER PROCEDURE public.conductor_insertar(IN in_id_conductor integer, IN in_nombres text, IN in_apellidos text, IN in_cedula text, IN in_telefono text, IN in_fecha_nacimiento date) OWNER TO "Anthony";

--
-- Name: conductor_obtener(integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.conductor_obtener(IN in_id_conductor integer, OUT out_nombres text, OUT out_apellidos text, OUT out_cedula text, OUT out_telefono text, OUT out_fecha_nacimiento date)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                SELECT Nombres, Apellidos, Cedula, Telefono, Fecha_Nacimiento 
                INTO out_nombres, out_apellidos, out_cedula, out_telefono, out_fecha_nacimiento 
                FROM conductor 
                WHERE ID_Conductor = in_id_conductor;
            END;
            $$;


ALTER PROCEDURE public.conductor_obtener(IN in_id_conductor integer, OUT out_nombres text, OUT out_apellidos text, OUT out_cedula text, OUT out_telefono text, OUT out_fecha_nacimiento date) OWNER TO "Anthony";

--
-- Name: create_user_and_assign_role(character varying, character varying, character varying); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.create_user_and_assign_role(IN p_username character varying, IN p_password character varying, IN p_role_name character varying)
    LANGUAGE plpgsql
    AS $$
DECLARE
    v_user_id OID;
BEGIN
    -- Crear el usuario
    EXECUTE 'CREATE USER ' || p_username || ' PASSWORD ''' || p_password || '''';

    -- Obtener el ID del usuario recién creado
    SELECT usename  INTO v_user_id FROM pg_user WHERE usename = p_username;

    -- Asignar el rol al usuario
    EXECUTE 'GRANT ' || p_role_name || ' TO ' || p_username;

    RAISE NOTICE 'Usuario creado y rol asignado correctamente.';
END;
$$;


ALTER PROCEDURE public.create_user_and_assign_role(IN p_username character varying, IN p_password character varying, IN p_role_name character varying) OWNER TO "Anthony";

--
-- Name: incidente_actualizar(integer, text, text); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.incidente_actualizar(IN in_id_incidente integer, IN in_tipo text, IN in_descripcion text)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                UPDATE incidente SET Tipo = in_tipo, Descripcion = in_descripcion WHERE ID_Incidente = in_id_incidente;
            END;
            $$;


ALTER PROCEDURE public.incidente_actualizar(IN in_id_incidente integer, IN in_tipo text, IN in_descripcion text) OWNER TO "Anthony";

--
-- Name: incidente_eliminar(integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.incidente_eliminar(IN in_id_incidente integer)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                DELETE FROM incidente WHERE ID_Incidente = in_id_incidente;
            END;
            $$;


ALTER PROCEDURE public.incidente_eliminar(IN in_id_incidente integer) OWNER TO "Anthony";

--
-- Name: incidente_insertar(integer, text, text); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.incidente_insertar(IN in_id_incidente integer, IN in_tipo text, IN in_descripcion text)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                INSERT INTO incidente (ID_Incidente, Tipo, Descripcion) VALUES (in_id_incidente, in_tipo, in_descripcion);
            END;
            $$;


ALTER PROCEDURE public.incidente_insertar(IN in_id_incidente integer, IN in_tipo text, IN in_descripcion text) OWNER TO "Anthony";

--
-- Name: incidente_obtener(integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.incidente_obtener(IN in_id_incidente integer, OUT out_tipo text, OUT out_descripcion text)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                SELECT Tipo, Descripcion INTO out_tipo, out_descripcion FROM incidente WHERE ID_Incidente = in_id_incidente;
            END;
            $$;


ALTER PROCEDURE public.incidente_obtener(IN in_id_incidente integer, OUT out_tipo text, OUT out_descripcion text) OWNER TO "Anthony";

--
-- Name: mantenimiento_actualizar(integer, text, text); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.mantenimiento_actualizar(IN in_id_mantenimiento integer, IN in_tipo_mantenimiento text, IN in_descripcion text)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                UPDATE mantenimiento SET Tipo_Mantenimiento = in_tipo_mantenimiento, Descripcion = in_descripcion 
                WHERE ID_Mantenimiento = in_id_mantenimiento;
            END;
            $$;


ALTER PROCEDURE public.mantenimiento_actualizar(IN in_id_mantenimiento integer, IN in_tipo_mantenimiento text, IN in_descripcion text) OWNER TO "Anthony";

--
-- Name: mantenimiento_eliminar(integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.mantenimiento_eliminar(IN in_id_mantenimiento integer)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                DELETE FROM mantenimiento WHERE ID_Mantenimiento = in_id_mantenimiento;
            END;
            $$;


ALTER PROCEDURE public.mantenimiento_eliminar(IN in_id_mantenimiento integer) OWNER TO "Anthony";

--
-- Name: mantenimiento_insertar(integer, text, text); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.mantenimiento_insertar(IN in_id_mantenimiento integer, IN in_tipo_mantenimiento text, IN in_descripcion text)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                INSERT INTO mantenimiento (ID_Mantenimiento, Tipo_Mantenimiento, Descripcion) 
                VALUES (in_id_mantenimiento, in_tipo_mantenimiento, in_descripcion);
            END;
            $$;


ALTER PROCEDURE public.mantenimiento_insertar(IN in_id_mantenimiento integer, IN in_tipo_mantenimiento text, IN in_descripcion text) OWNER TO "Anthony";

--
-- Name: mantenimiento_obtener(integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.mantenimiento_obtener(IN in_id_mantenimiento integer, OUT out_tipo_mantenimiento text, OUT out_descripcion text)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                SELECT Tipo_Mantenimiento, Descripcion INTO out_tipo_mantenimiento, out_descripcion 
                FROM mantenimiento WHERE ID_Mantenimiento = in_id_mantenimiento;
            END;
            $$;


ALTER PROCEDURE public.mantenimiento_obtener(IN in_id_mantenimiento integer, OUT out_tipo_mantenimiento text, OUT out_descripcion text) OWNER TO "Anthony";

--
-- Name: pasajero_actualizar(integer, integer, text, text); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.pasajero_actualizar(IN in_id_pasajero integer, IN in_fk_id_tarifa integer, IN in_nombre text, IN in_cedula text)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                UPDATE pasajero SET fk_id_tarifa = in_fk_id_tarifa, nombre = in_nombre, cedula = in_cedula WHERE id_pasajero = in_id_pasajero;
            END;
            $$;


ALTER PROCEDURE public.pasajero_actualizar(IN in_id_pasajero integer, IN in_fk_id_tarifa integer, IN in_nombre text, IN in_cedula text) OWNER TO "Anthony";

--
-- Name: pasajero_eliminar(integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.pasajero_eliminar(IN in_id_pasajero integer)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                DELETE FROM pasajero WHERE id_pasajero = in_id_pasajero;
            END;
            $$;


ALTER PROCEDURE public.pasajero_eliminar(IN in_id_pasajero integer) OWNER TO "Anthony";

--
-- Name: pasajero_insertar(integer, integer, text, text); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.pasajero_insertar(IN in_id_pasajero integer, IN in_fk_id_tarifa integer, IN in_nombre text, IN in_cedula text)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                INSERT INTO pasajero (id_pasajero, fk_id_tarifa, nombre, cedula) VALUES (in_id_pasajero, in_fk_id_tarifa, in_nombre, in_cedula);
            END;
            $$;


ALTER PROCEDURE public.pasajero_insertar(IN in_id_pasajero integer, IN in_fk_id_tarifa integer, IN in_nombre text, IN in_cedula text) OWNER TO "Anthony";

--
-- Name: pasajero_obtener(integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.pasajero_obtener(IN in_id_pasajero integer, OUT out_fk_id_tarifa integer, OUT out_nombre text, OUT out_cedula text)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                SELECT fk_id_tarifa, nombre, cedula INTO out_fk_id_tarifa, out_nombre, out_cedula FROM pasajero WHERE id_pasajero = in_id_pasajero;
            END;
            $$;


ALTER PROCEDURE public.pasajero_obtener(IN in_id_pasajero integer, OUT out_fk_id_tarifa integer, OUT out_nombre text, OUT out_cedula text) OWNER TO "Anthony";

--
-- Name: ruta_eliminar(integer, integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.ruta_eliminar(IN in_id_linea integer, IN in_id_parada integer)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                DELETE FROM ruta WHERE ID_Linea = in_id_linea AND ID_Parada = in_id_parada;
            END;
            $$;


ALTER PROCEDURE public.ruta_eliminar(IN in_id_linea integer, IN in_id_parada integer) OWNER TO "Anthony";

--
-- Name: ruta_insertar(integer, integer, integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.ruta_insertar(IN in_id_linea integer, IN in_id_parada integer, IN in_num_parada integer)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                INSERT INTO ruta (ID_Linea, ID_Parada, Num_Parada) VALUES (in_id_linea, in_id_parada, in_num_parada);
            END;
            $$;


ALTER PROCEDURE public.ruta_insertar(IN in_id_linea integer, IN in_id_parada integer, IN in_num_parada integer) OWNER TO "Anthony";

--
-- Name: ruta_obtener(integer, integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.ruta_obtener(IN in_id_linea integer, IN in_id_parada integer, OUT out_num_parada integer)
    LANGUAGE plpgsql
    AS $$
            BEGIN
                SELECT Num_Parada INTO out_num_parada FROM ruta WHERE ID_Linea = in_id_linea AND ID_Parada = in_id_parada;
            END;
            $$;


ALTER PROCEDURE public.ruta_obtener(IN in_id_linea integer, IN in_id_parada integer, OUT out_num_parada integer) OWNER TO "Anthony";

--
-- Name: tarifa_actualizar(integer, text, numeric); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.tarifa_actualizar(IN in_id_tarifa integer, IN in_tipo text, IN in_tarifa numeric)
    LANGUAGE plpgsql
    AS $$
        BEGIN
            UPDATE tarifas SET tipo = in_tipo, tarifa = in_tarifa WHERE id_tarifa = in_id_tarifa;
        END;
        $$;


ALTER PROCEDURE public.tarifa_actualizar(IN in_id_tarifa integer, IN in_tipo text, IN in_tarifa numeric) OWNER TO "Anthony";

--
-- Name: tarifa_eliminar(integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.tarifa_eliminar(IN in_id_tarifa integer)
    LANGUAGE plpgsql
    AS $$
        BEGIN
            DELETE FROM tarifas WHERE id_tarifa = in_id_tarifa;
        END;
        $$;


ALTER PROCEDURE public.tarifa_eliminar(IN in_id_tarifa integer) OWNER TO "Anthony";

--
-- Name: tarifa_insertar(integer, text, numeric); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.tarifa_insertar(IN in_id_tarifa integer, IN in_tipo text, IN in_tarifa numeric)
    LANGUAGE plpgsql
    AS $$
        BEGIN
            INSERT INTO tarifas (id_tarifa, tipo, tarifa) VALUES (in_id_tarifa, in_tipo, in_tarifa);
        END;
        $$;


ALTER PROCEDURE public.tarifa_insertar(IN in_id_tarifa integer, IN in_tipo text, IN in_tarifa numeric) OWNER TO "Anthony";

--
-- Name: tarifa_obtener(integer); Type: PROCEDURE; Schema: public; Owner: Anthony
--

CREATE PROCEDURE public.tarifa_obtener(IN in_id_tarifa integer, OUT out_id_tarifa integer, OUT out_tipo text, OUT out_tarifa numeric)
    LANGUAGE plpgsql
    AS $$
    BEGIN
        SELECT id_tarifa, tipo, tarifa INTO out_id_tarifa, out_tipo, out_tarifa FROM tarifas WHERE id_tarifa = in_id_tarifa;
    END;
    $$;


ALTER PROCEDURE public.tarifa_obtener(IN in_id_tarifa integer, OUT out_id_tarifa integer, OUT out_tipo text, OUT out_tarifa numeric) OWNER TO "Anthony";

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: acontecimiento; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.acontecimiento (
    id_acontecimiento integer NOT NULL,
    id_viaje integer,
    id_incidente integer,
    hora time without time zone,
    fecha date,
    lugar text
);


ALTER TABLE public.acontecimiento OWNER TO "Anthony";

--
-- Name: bus; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.bus (
    id_bus integer NOT NULL,
    id_linea integer,
    placa text,
    capacidad integer,
    fecha_adquisicion date
);


ALTER TABLE public.bus OWNER TO "Anthony";

--
-- Name: cobrador; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.cobrador (
    id_cobrador integer NOT NULL,
    nombres text,
    apellidos text,
    cedula text,
    telefono text
);


ALTER TABLE public.cobrador OWNER TO "Anthony";

--
-- Name: conductor; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.conductor (
    id_conductor integer NOT NULL,
    nombres text,
    apellidos text,
    cedula text,
    telefono text,
    fecha_nacimiento date
);


ALTER TABLE public.conductor OWNER TO "Anthony";

--
-- Name: horario; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.horario (
    id_horario integer NOT NULL,
    id_linea integer,
    hora_inicio text,
    hora_fin text
);


ALTER TABLE public.horario OWNER TO "Anthony";

--
-- Name: incidente; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.incidente (
    id_incidente integer NOT NULL,
    tipo text,
    descripcion text
);


ALTER TABLE public.incidente OWNER TO "Anthony";

--
-- Name: informe_conductor; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.informe_conductor (
    id_bus integer NOT NULL,
    id_conductor integer NOT NULL,
    id_cobrador integer NOT NULL,
    hora_entrada time without time zone,
    hora_salida time without time zone,
    fecha_conduccion date
);


ALTER TABLE public.informe_conductor OWNER TO "Anthony";

--
-- Name: informe_mantenimiento; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.informe_mantenimiento (
    id_mantenimiento integer NOT NULL,
    id_bus integer NOT NULL,
    fecha date,
    costo double precision
);


ALTER TABLE public.informe_mantenimiento OWNER TO "Anthony";

--
-- Name: informe_multa; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.informe_multa (
    id_conductor integer NOT NULL,
    id_multa integer NOT NULL,
    fecha date
);


ALTER TABLE public.informe_multa OWNER TO "Anthony";

--
-- Name: linea; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.linea (
    id_linea integer NOT NULL,
    num_unidades integer,
    campo text
);


ALTER TABLE public.linea OWNER TO "Anthony";

--
-- Name: mantenimiento; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.mantenimiento (
    id_mantenimiento integer NOT NULL,
    tipo_mantenimiento text,
    descripcion text
);


ALTER TABLE public.mantenimiento OWNER TO "Anthony";

--
-- Name: multa; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.multa (
    id_multa integer NOT NULL,
    tipo text,
    monto double precision
);


ALTER TABLE public.multa OWNER TO "Anthony";

--
-- Name: paradas; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.paradas (
    id_parada integer NOT NULL,
    ubicacion text
);


ALTER TABLE public.paradas OWNER TO "Anthony";

--
-- Name: pasajero; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.pasajero (
    id_pasajero integer NOT NULL,
    fk_id_tarifa integer,
    nombre text,
    cedula text
);


ALTER TABLE public.pasajero OWNER TO "Anthony";

--
-- Name: registro_viajes; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.registro_viajes (
    fk_id_pasajero integer,
    fk_id_viaje integer
);


ALTER TABLE public.registro_viajes OWNER TO "Anthony";

--
-- Name: ruta; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.ruta (
    id_linea integer NOT NULL,
    id_parada integer NOT NULL,
    num_parada integer
);


ALTER TABLE public.ruta OWNER TO "Anthony";

--
-- Name: tarifas; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.tarifas (
    id_tarifa integer NOT NULL,
    tipo text,
    tarifa numeric(10,2)
);


ALTER TABLE public.tarifas OWNER TO "Anthony";

--
-- Name: viaje; Type: TABLE; Schema: public; Owner: Anthony
--

CREATE TABLE public.viaje (
    id_viaje integer NOT NULL,
    id_horario integer,
    id_linea integer,
    num_recorrido_dia integer,
    fecha date,
    estacion_salida text,
    tiempo_retraso text
);


ALTER TABLE public.viaje OWNER TO "Anthony";

--
-- Data for Name: acontecimiento; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.acontecimiento (id_acontecimiento, id_viaje, id_incidente, hora, fecha, lugar) FROM stdin;
\.


--
-- Data for Name: bus; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.bus (id_bus, id_linea, placa, capacidad, fecha_adquisicion) FROM stdin;
\.


--
-- Data for Name: cobrador; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.cobrador (id_cobrador, nombres, apellidos, cedula, telefono) FROM stdin;
\.


--
-- Data for Name: conductor; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.conductor (id_conductor, nombres, apellidos, cedula, telefono, fecha_nacimiento) FROM stdin;
\.


--
-- Data for Name: horario; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.horario (id_horario, id_linea, hora_inicio, hora_fin) FROM stdin;
\.


--
-- Data for Name: incidente; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.incidente (id_incidente, tipo, descripcion) FROM stdin;
\.


--
-- Data for Name: informe_conductor; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.informe_conductor (id_bus, id_conductor, id_cobrador, hora_entrada, hora_salida, fecha_conduccion) FROM stdin;
\.


--
-- Data for Name: informe_mantenimiento; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.informe_mantenimiento (id_mantenimiento, id_bus, fecha, costo) FROM stdin;
\.


--
-- Data for Name: informe_multa; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.informe_multa (id_conductor, id_multa, fecha) FROM stdin;
\.


--
-- Data for Name: linea; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.linea (id_linea, num_unidades, campo) FROM stdin;
\.


--
-- Data for Name: mantenimiento; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.mantenimiento (id_mantenimiento, tipo_mantenimiento, descripcion) FROM stdin;
\.


--
-- Data for Name: multa; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.multa (id_multa, tipo, monto) FROM stdin;
\.


--
-- Data for Name: paradas; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.paradas (id_parada, ubicacion) FROM stdin;
\.


--
-- Data for Name: pasajero; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.pasajero (id_pasajero, fk_id_tarifa, nombre, cedula) FROM stdin;
1	1	anthony	1315669968
\.


--
-- Data for Name: registro_viajes; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.registro_viajes (fk_id_pasajero, fk_id_viaje) FROM stdin;
\.


--
-- Data for Name: ruta; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.ruta (id_linea, id_parada, num_parada) FROM stdin;
\.


--
-- Data for Name: tarifas; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.tarifas (id_tarifa, tipo, tarifa) FROM stdin;
1	primera Edad	0.40
2	3ra Edad	0.20
\.


--
-- Data for Name: viaje; Type: TABLE DATA; Schema: public; Owner: Anthony
--

COPY public.viaje (id_viaje, id_horario, id_linea, num_recorrido_dia, fecha, estacion_salida, tiempo_retraso) FROM stdin;
\.


--
-- Name: acontecimiento acontecimiento_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.acontecimiento
    ADD CONSTRAINT acontecimiento_pkey PRIMARY KEY (id_acontecimiento);


--
-- Name: bus bus_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.bus
    ADD CONSTRAINT bus_pkey PRIMARY KEY (id_bus);


--
-- Name: cobrador cobrador_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.cobrador
    ADD CONSTRAINT cobrador_pkey PRIMARY KEY (id_cobrador);


--
-- Name: conductor conductor_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.conductor
    ADD CONSTRAINT conductor_pkey PRIMARY KEY (id_conductor);


--
-- Name: horario horario_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.horario
    ADD CONSTRAINT horario_pkey PRIMARY KEY (id_horario);


--
-- Name: incidente incidente_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.incidente
    ADD CONSTRAINT incidente_pkey PRIMARY KEY (id_incidente);


--
-- Name: informe_conductor informe_conductor_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.informe_conductor
    ADD CONSTRAINT informe_conductor_pkey PRIMARY KEY (id_bus, id_conductor, id_cobrador);


--
-- Name: informe_mantenimiento informe_mantenimiento_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.informe_mantenimiento
    ADD CONSTRAINT informe_mantenimiento_pkey PRIMARY KEY (id_mantenimiento, id_bus);


--
-- Name: informe_multa informe_multa_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.informe_multa
    ADD CONSTRAINT informe_multa_pkey PRIMARY KEY (id_conductor, id_multa);


--
-- Name: linea linea_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.linea
    ADD CONSTRAINT linea_pkey PRIMARY KEY (id_linea);


--
-- Name: mantenimiento mantenimiento_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.mantenimiento
    ADD CONSTRAINT mantenimiento_pkey PRIMARY KEY (id_mantenimiento);


--
-- Name: multa multa_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.multa
    ADD CONSTRAINT multa_pkey PRIMARY KEY (id_multa);


--
-- Name: paradas paradas_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.paradas
    ADD CONSTRAINT paradas_pkey PRIMARY KEY (id_parada);


--
-- Name: pasajero pasajero_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.pasajero
    ADD CONSTRAINT pasajero_pkey PRIMARY KEY (id_pasajero);


--
-- Name: ruta ruta_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.ruta
    ADD CONSTRAINT ruta_pkey PRIMARY KEY (id_linea, id_parada);


--
-- Name: tarifas tarifas_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.tarifas
    ADD CONSTRAINT tarifas_pkey PRIMARY KEY (id_tarifa);


--
-- Name: viaje viaje_pkey; Type: CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.viaje
    ADD CONSTRAINT viaje_pkey PRIMARY KEY (id_viaje);


--
-- Name: acontecimiento fk_acontecimiento_incidente; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.acontecimiento
    ADD CONSTRAINT fk_acontecimiento_incidente FOREIGN KEY (id_incidente) REFERENCES public.incidente(id_incidente);


--
-- Name: registro_viajes fk_acontecimiento_incidente; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.registro_viajes
    ADD CONSTRAINT fk_acontecimiento_incidente FOREIGN KEY (fk_id_viaje) REFERENCES public.viaje(id_viaje);


--
-- Name: acontecimiento fk_acontecimiento_viaje; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.acontecimiento
    ADD CONSTRAINT fk_acontecimiento_viaje FOREIGN KEY (id_viaje) REFERENCES public.viaje(id_viaje);


--
-- Name: bus fk_bus_linea; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.bus
    ADD CONSTRAINT fk_bus_linea FOREIGN KEY (id_linea) REFERENCES public.linea(id_linea);


--
-- Name: horario fk_horario_linea; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.horario
    ADD CONSTRAINT fk_horario_linea FOREIGN KEY (id_linea) REFERENCES public.linea(id_linea);


--
-- Name: informe_conductor fk_informe_conductor_bus; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.informe_conductor
    ADD CONSTRAINT fk_informe_conductor_bus FOREIGN KEY (id_bus) REFERENCES public.bus(id_bus);


--
-- Name: informe_conductor fk_informe_conductor_cobrador; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.informe_conductor
    ADD CONSTRAINT fk_informe_conductor_cobrador FOREIGN KEY (id_cobrador) REFERENCES public.cobrador(id_cobrador);


--
-- Name: informe_conductor fk_informe_conductor_conductor; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.informe_conductor
    ADD CONSTRAINT fk_informe_conductor_conductor FOREIGN KEY (id_conductor) REFERENCES public.conductor(id_conductor);


--
-- Name: informe_mantenimiento fk_informe_mantenimiento_bus; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.informe_mantenimiento
    ADD CONSTRAINT fk_informe_mantenimiento_bus FOREIGN KEY (id_bus) REFERENCES public.bus(id_bus);


--
-- Name: informe_mantenimiento fk_informe_mantenimiento_mantenimiento; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.informe_mantenimiento
    ADD CONSTRAINT fk_informe_mantenimiento_mantenimiento FOREIGN KEY (id_mantenimiento) REFERENCES public.mantenimiento(id_mantenimiento);


--
-- Name: informe_multa fk_informe_multa_conductor; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.informe_multa
    ADD CONSTRAINT fk_informe_multa_conductor FOREIGN KEY (id_conductor) REFERENCES public.conductor(id_conductor);


--
-- Name: informe_multa fk_informe_multa_multa; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.informe_multa
    ADD CONSTRAINT fk_informe_multa_multa FOREIGN KEY (id_multa) REFERENCES public.multa(id_multa);


--
-- Name: registro_viajes fk_pasajero; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.registro_viajes
    ADD CONSTRAINT fk_pasajero FOREIGN KEY (fk_id_pasajero) REFERENCES public.pasajero(id_pasajero);


--
-- Name: ruta fk_ruta_linea; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.ruta
    ADD CONSTRAINT fk_ruta_linea FOREIGN KEY (id_linea) REFERENCES public.linea(id_linea);


--
-- Name: ruta fk_ruta_parada; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.ruta
    ADD CONSTRAINT fk_ruta_parada FOREIGN KEY (id_parada) REFERENCES public.paradas(id_parada);


--
-- Name: pasajero fk_tarifa; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.pasajero
    ADD CONSTRAINT fk_tarifa FOREIGN KEY (fk_id_tarifa) REFERENCES public.tarifas(id_tarifa);


--
-- Name: viaje fk_viaje_horario; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.viaje
    ADD CONSTRAINT fk_viaje_horario FOREIGN KEY (id_horario) REFERENCES public.horario(id_horario);


--
-- Name: viaje fk_viaje_linea; Type: FK CONSTRAINT; Schema: public; Owner: Anthony
--

ALTER TABLE ONLY public.viaje
    ADD CONSTRAINT fk_viaje_linea FOREIGN KEY (id_linea) REFERENCES public.linea(id_linea);


--
-- PostgreSQL database dump complete
--

