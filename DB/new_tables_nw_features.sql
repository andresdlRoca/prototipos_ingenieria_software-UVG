CREATE TABLE Insignia(
    id_insignia BIGSERIAL PRIMARY KEY, 
    nombre VARCHAR(44), 
    descripcion TEXT, 
    rareza_en_porcentaje NUMERIC,
    tipo VARCHAR(44), 
    nivel VARCHAR(44), 
    imagen TEXT, 
    id_organizacion BIGINT, 
    FOREIGN KEY (id_organizacion) REFERENCES Organizacion(id_organizacion) ON DELETE CASCADE
);  
CREATE TABLE Organizacion(
    id_organizacion BIGSERIAL PRIMARY KEY, 
    user_name VARCHAR(100), 
    rate NUMERIC, 
    times_rated NUMERIC, 
    id_usuario_lider BIGINT, 
    password TEXT, 
    email VARCHAR(200), 
    alternative_email VARCHAR(200), 
    no_telefono VARCHAR(30),
    prof_pic TEXT, 
    linkedin TEXT, 
    descripcion TEXT, 
    isActive BOOLEAN, 
    tiempo_transaccion_promedio TIMESTAMP, 
    ventas BIGINT,
    FOREIGN KEY (id_usuario_lider) REFERENCES Usuario(id)
);
CREATE TABLE Organizacion_Colaborador(
    id_relacion_organizacion_colaborador BIGSERIAL PRIMARY KEY, 
    id_organizacion BIGINT, 
    id_usuario BIGINT, 
    rol VARCHAR(100),
    FOREIGN KEY (id_organizacion) REFERENCES Organizacion(id_organizacion) ON DELETE CASCADE,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id) ON DELETE CASCADE
);
CREATE TABLE Insgnia_Organizacion(
    id_relacion_organzacion_insignia BIGSERIAL PRIMARY KEY, 
    id_insignia BIGINT, 
    id_organizacion BIGINT, 
    FOREIGN KEY (id_insignia) REFERENCES Insignia(id_insignia) ON DELETE CASCADE, 
    FOREIGN KEY (id_organizacion) REFERENCES Organizacion(id_organizacion) ON DELETE CASCADE
);

CREATE TABLE bitacora_ventas(
    id BIGSERIAL PRIMARY KEY, 
    id_venta BIGINT, 
    fecha TIMESTAMP,
    tipo_de_transaccion VARCHAR(100), 
    detalles TEXT,
    FOREIGN KEY (id_venta) REFERENCES Venta(id)
);

ALTER TABLE Vendedor 
ADD COLUMN id_organizacion BIGINT; 

ALTER TABLE Vendedor 
ADD CONSTRAINT rel_organicacion_vendedor FOREIGN KEY (id_organizacion) REFERENCES Organizacion(id_organizacion);

ALTER TABLE Vendedor
ADD COLUMN ventas BIGINT; 

ALTER TABLE Vendedor 
ADD COLUMN media_tiempo_venta NUMERIC;

ALTER TABLE Venta
ADD COLUMN ventas_iniciadas NUMERIC; 