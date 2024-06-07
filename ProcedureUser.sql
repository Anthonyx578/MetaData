CREATE OR REPLACE PROCEDURE create_user_and_assign_role(
    p_username VARCHAR,
    p_password VARCHAR,
    p_role_name VARCHAR
)
LANGUAGE plpgsql
AS $$
DECLARE
    v_user_id OID;
BEGIN
    -- Crear el usuario
    EXECUTE 'CREATE USER ' || p_username || ' PASSWORD ''' || p_password || '''';

    -- Obtener el ID del usuario recién creado
    SELECT oid INTO v_user_id FROM pg_user WHERE usename = p_username;

    -- Asignar el rol al usuario
    EXECUTE 'GRANT ' || p_role_name || ' TO ' || p_username;

    RAISE NOTICE 'Usuario creado y rol asignado correctamente.';
END;
$$;