INSERT INTO insignia (tipo, nombre, descripcion) VALUES ('todos', 'La maquina mas veloz de tote italia', 'Es la empresa con mejor media en el proceso de venta de principio a fin.');
INSERT INTO insignia (tipo, nombre, descripcion) VALUES ('limitado', 'Super Top', 'Tiene la mejor calificacion en la plataforma.');
INSERT INTO insignia (tipo, nombre, descripcion) VALUES ('todos', 'Primeros 100', 'Ha realizado 100 ventas de manera exitosa');
INSERT INTO insignia (tipo, nombre, descripcion) VALUES ('todos', 'Y el séptimo día descansó...', 'Tiene una media de entrega de menos de una semana.');

UPDATE insignia
SET nivel = 'oro'
WHERE id_insignia = 2;


INSERT INTO insignia (nivel, tipo, nombre, descripcion) VALUES ('bronce','limitado', 'Super Top', 'Tiene la mejor calificacion en la plataforma. (3er lugar)');
INSERT INTO insignia (nivel, tipo, nombre, descripcion) VALUES ('plata','limitado', 'Super Top', 'Tiene la mejor calificacion en la plataforma. (2do lugar)');

ALTER TABLE Insgnia_Organizacion
ADD CONSTRAINT unica_rel UNIQUE(id_insignia, id_organizacion); 

