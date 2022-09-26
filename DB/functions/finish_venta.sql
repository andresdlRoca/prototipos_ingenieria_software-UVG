CREATE OR REPLACE FUNCTION FINISH_VENTA(
    id_p BIGINT
)
RETURNS TABLE (httpCode VARCHAR(3), details TEXT)
LANGUAGE PLPGSQL    
AS $$
DECLARE 
    comienzo TIMESTAMP;
    intervalo NUMERIC;
    sllr_id BIGINT;
    actual_state BOOLEAN; 
    id_vended BIGINT;
    ventas_actuales BIGINT;
    media_actual NUMERIC;

BEGIN 
    SELECT fecha_inicio, is_done, id_vendedor 
    INTO comienzo, actual_state, sllr_id
    FROM venta
    WHERE id = id_p; 
    IF (sllr_id IS NOT NULL) THEN 
        IF (actual_state IS TRUE) THEN RETURN QUERY SELECT '400', 'Venta ya ha sido finalizada con  anterioridad';
        ELSE
            SELECT EXTRACT(EPOCH FROM (NOW()-comienzo)) INTO intervalo;
            SELECT ventas, media_tiempo_venta INTO ventas_actuales, media_actual FROM vendedor WHERE id = sllr_id; 
            IF (ventas_actuales IS NULL) THEN SELECT 0 INTO ventas_actuales; END IF; 
            IF (media_actual IS NULL) THEN SELECT intervalo INTO media_actual;
            ELSE SELECT ((ventas_actuales*media_actual + intervalo)/(ventas_actuales+1)) INTO media_actual; END IF; 
            UPDATE Venta
                SET is_done = TRUE, 
                    fecha_final = NOW()
                WHERE id = id_p;
            UPDATE Vendedor 
                SET ventas = ventas_actuales+1,
                    media_tiempo_venta = media_actual
            WHERE id =  sllr_id;  
            INSERT INTO bitacora_ventas (id_venta, fecha, tipo_de_transaccion, detalles) VALUES (id_p, NOW(), 'ESTANDAR', 'Finalizacion de venta');
            RETURN QUERY SELECT '200','Proceso de finalizacion de venta completado';
        END IF; 
    ELSE 
        RETURN QUERY SELECT '400', 'ID de venta no encontrado';
    END IF; 
END;$$