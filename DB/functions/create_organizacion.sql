CREATE OR REPLACE PROCEDURE CREATE_ORGANIZACION_VENTA(
	user_name VARCHAR(100), 
    password TEXT, 
    email VARCHAR(200), 
    no_telefono VARCHAR(30), 
    descripcion TEXT, 
    isActive BOOLEAN, 
    id_usuario_lider BIGINT, 
    rate INT,
    INOUT _pid BIGINT DEFAULT NULL

)
LANGUAGE PLPGSQL
AS $$
DECLARE 
    id_organizacion BIGINT; 
    is_it_top BOOLEAN;
BEGIN
    SELECT INTO (INSERT INTO organizacion (user_name, password, email, no_telefono, descripcion, isActive, id_usuario_lider, calificacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id_organizacion); 
	--ELIMINAR EL CONTENIDO DE LA LISTA VIENDO
	DELETE FROM LISTA_DE_CONTENIDO_ACTUAL
	WHERE id_perfil = p_id_perfil
	AND id_contenido = p_id_contenido;
	--AGREGAMOS A LA LISITA DE VISTO
	INSERT INTO LISTA_DE_CONTENIDO_VISTO (id_perfil ,id_contenido,fecha_final )
	VALUES(p_id_perfil, p_id_contenido, NOW());
END;$$

