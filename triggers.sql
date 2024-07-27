
          CREATE OR REPLACE FUNCTION audit_tarifas_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'tarifas', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'tarifas', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'tarifas', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_tarifas_trigger
          AFTER INSERT OR UPDATE OR DELETE ON tarifas
          FOR EACH ROW EXECUTE FUNCTION audit_tarifas_changes();
        


          CREATE OR REPLACE FUNCTION audit_pasajero_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'pasajero', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'pasajero', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'pasajero', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_pasajero_trigger
          AFTER INSERT OR UPDATE OR DELETE ON pasajero
          FOR EACH ROW EXECUTE FUNCTION audit_pasajero_changes();
        


          CREATE OR REPLACE FUNCTION audit_conductor_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'conductor', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'conductor', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'conductor', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_conductor_trigger
          AFTER INSERT OR UPDATE OR DELETE ON conductor
          FOR EACH ROW EXECUTE FUNCTION audit_conductor_changes();
        


          CREATE OR REPLACE FUNCTION audit_informe_multa_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'informe_multa', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'informe_multa', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'informe_multa', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_informe_multa_trigger
          AFTER INSERT OR UPDATE OR DELETE ON informe_multa
          FOR EACH ROW EXECUTE FUNCTION audit_informe_multa_changes();
        


          CREATE OR REPLACE FUNCTION audit_multa_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'multa', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'multa', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'multa', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_multa_trigger
          AFTER INSERT OR UPDATE OR DELETE ON multa
          FOR EACH ROW EXECUTE FUNCTION audit_multa_changes();
        


          CREATE OR REPLACE FUNCTION audit_linea_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'linea', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'linea', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'linea', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_linea_trigger
          AFTER INSERT OR UPDATE OR DELETE ON linea
          FOR EACH ROW EXECUTE FUNCTION audit_linea_changes();
        


          CREATE OR REPLACE FUNCTION audit_bus_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'bus', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'bus', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'bus', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_bus_trigger
          AFTER INSERT OR UPDATE OR DELETE ON bus
          FOR EACH ROW EXECUTE FUNCTION audit_bus_changes();
        


          CREATE OR REPLACE FUNCTION audit_ruta_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'ruta', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'ruta', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'ruta', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_ruta_trigger
          AFTER INSERT OR UPDATE OR DELETE ON ruta
          FOR EACH ROW EXECUTE FUNCTION audit_ruta_changes();
        


          CREATE OR REPLACE FUNCTION audit_paradas_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'paradas', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'paradas', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'paradas', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_paradas_trigger
          AFTER INSERT OR UPDATE OR DELETE ON paradas
          FOR EACH ROW EXECUTE FUNCTION audit_paradas_changes();
        


          CREATE OR REPLACE FUNCTION audit_mantenimiento_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'mantenimiento', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'mantenimiento', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'mantenimiento', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_mantenimiento_trigger
          AFTER INSERT OR UPDATE OR DELETE ON mantenimiento
          FOR EACH ROW EXECUTE FUNCTION audit_mantenimiento_changes();
        


          CREATE OR REPLACE FUNCTION audit_informe_mantenimiento_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'informe_mantenimiento', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'informe_mantenimiento', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'informe_mantenimiento', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_informe_mantenimiento_trigger
          AFTER INSERT OR UPDATE OR DELETE ON informe_mantenimiento
          FOR EACH ROW EXECUTE FUNCTION audit_informe_mantenimiento_changes();
        


          CREATE OR REPLACE FUNCTION audit_informe_conductor_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'informe_conductor', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'informe_conductor', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'informe_conductor', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_informe_conductor_trigger
          AFTER INSERT OR UPDATE OR DELETE ON informe_conductor
          FOR EACH ROW EXECUTE FUNCTION audit_informe_conductor_changes();
        


          CREATE OR REPLACE FUNCTION audit_cobrador_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'cobrador', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'cobrador', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'cobrador', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_cobrador_trigger
          AFTER INSERT OR UPDATE OR DELETE ON cobrador
          FOR EACH ROW EXECUTE FUNCTION audit_cobrador_changes();
        


          CREATE OR REPLACE FUNCTION audit_horario_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'horario', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'horario', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'horario', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_horario_trigger
          AFTER INSERT OR UPDATE OR DELETE ON horario
          FOR EACH ROW EXECUTE FUNCTION audit_horario_changes();
        


          CREATE OR REPLACE FUNCTION audit_viaje_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'viaje', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'viaje', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'viaje', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_viaje_trigger
          AFTER INSERT OR UPDATE OR DELETE ON viaje
          FOR EACH ROW EXECUTE FUNCTION audit_viaje_changes();
        


          CREATE OR REPLACE FUNCTION audit_acontecimiento_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'acontecimiento', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'acontecimiento', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'acontecimiento', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_acontecimiento_trigger
          AFTER INSERT OR UPDATE OR DELETE ON acontecimiento
          FOR EACH ROW EXECUTE FUNCTION audit_acontecimiento_changes();
        


          CREATE OR REPLACE FUNCTION audit_incidente_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'incidente', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'incidente', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'incidente', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_incidente_trigger
          AFTER INSERT OR UPDATE OR DELETE ON incidente
          FOR EACH ROW EXECUTE FUNCTION audit_incidente_changes();
        


          CREATE OR REPLACE FUNCTION audit_registro_viajes_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'registro_viajes', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'registro_viajes', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'registro_viajes', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_registro_viajes_trigger
          AFTER INSERT OR UPDATE OR DELETE ON registro_viajes
          FOR EACH ROW EXECUTE FUNCTION audit_registro_viajes_changes();
        


          CREATE OR REPLACE FUNCTION audit_logs_changes() RETURNS TRIGGER AS $$
          BEGIN
            IF (TG_OP = 'INSERT') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'logs', 'se inserto dato');
              RETURN NEW;
            ELSIF (TG_OP = 'UPDATE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'logs', 'se actualizo dato');
              RETURN NEW;
            ELSIF (TG_OP = 'DELETE') THEN
              INSERT INTO auditoria (nombre_usuario, fecha, hora, tabla, accion)
              VALUES (current_user, current_date, current_time, 'logs', 'se elimino dato');
              RETURN OLD;
            END IF;
            RETURN NULL;
          END;
          $$ LANGUAGE plpgsql;
    
          CREATE TRIGGER audit_logs_trigger
          AFTER INSERT OR UPDATE OR DELETE ON logs
          FOR EACH ROW EXECUTE FUNCTION audit_logs_changes();
        