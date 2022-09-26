CREATE OR REPLACE PROCEDURE calculate_porcentajes_rareza()
LANGUAGE PLPGSQL
AS $$
DECLARE
	organizacion_total NUMERIC;
	f record;
	porcentaje NUMERIC; 
BEGIN
	SELECT COUNT(*) INTO organizacion_total FROM Organizacion;
	FOR f in SELECT id_insignia FROM insignia
		LOOP
			SELECT COUNT(*) INTO porcentaje FROM Insgnia_Organizacion WHERE id_insignia = f.id_insignia;
			SELECT porcentaje/organizacion_total INTO porcentaje;
			UPDATE Insignia
				SET rareza_en_porcentaje = porcentaje
			WHERE id_insignia = f.id_insignia;
		END LOOP;
END;$$