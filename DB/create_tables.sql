CREATE TABLE Vendedor(
    id BIGSERIAL PRIMARY KEY, 
    calificacion FLOAT
);
CREATE TABLE Tutor(
    id BIGSERIAL PRIMARY KEY, 
    calificacion FLOAT,
    isCertificado BOOLEAN
);
CREATE TABLE Clase(
    id BIGSERIAL PRIMARY KEY, 
    nombre VARCHAR(30),
    descripcion TEXT
);
CREATE TABLE Tutor_Clase(
    id BIGSERIAL PRIMARY KEY, 
    id_clase BIGINT, 
    id_tutor BIGINT, 
    FOREIGN KEY (id_clase) REFERENCES Clase(id) ON DELETE CASCADE,
    FOREIGN KEY (id_tutor) REFERENCES Tutor(id) ON DELETE CASCADE
);
CREATE TABLE Usuario(
    id BIGSERIAL PRIMARY KEY, 
    userName VARCHAR(250),
    password VARCHAR(250),
    email VARCHAR(250),
    alternative_email VARCHAR(250),
    telefono VARCHAR(20),
    profile_pic VARCHAR(250),
    nombre VARCHAR(250),
    apellido VARCHAR(250),
    carne INTEGER, 
    id_tutor BIGINT, 
    id_vendedor BIGINT, 
    github VARCHAR(250),
    linkedin VARCHAR(250),
    descripcion TEXT,
    isActive BOOLEAN, 
    FOREIGN KEY (id_tutor) REFERENCES Tutor(id) ON DELETE CASCADE,
    FOREIGN KEY (id_vendedor) REFERENCES Vendedor(id) ON DELETE CASCADE
);
CREATE TABLE Tutor_guardado(
    id BIGSERIAL PRIMARY KEY, 
    id_usuario BIGINT,
    id_tutor BIGINT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id) ON DELETE CASCADE, 
    FOREIGN KEY (id_tutor) REFERENCES Tutor(id) ON DELETE CASCADE
);

CREATE TABLE Tutoria(
    id BIGSERIAL PRIMARY KEY, 
    id_cliente BIGINT, 
    id_tutor BIGINT, 
    isAceptado BOOLEAN, 
    isDone BOOLEAN, 
    calificacion FLOAT, 
    fecha_inicio TIMESTAMP, 
    fecha_final TIMESTAMP, 
    state VARCHAR(30),
    FOREIGN KEY (id_cliente) REFERENCES Usuario(id) ON DELETE CASCADE, 
    FOREIGN KEY (id_tutor) REFERENCES Tutor(id) ON DELETE CASCADE
);
CREATE TABLE Producto(
    id  BIGSERIAL PRIMARY KEY,
    precio FLOAT, 
    disponible BOOLEAN,
    src_img VARCHAR(255),
    id_vendedor BIGINT,
    id_comprador BIGINT,
    FOREIGN KEY (id_vendedor) REFERENCES Vendedor(id) ON DELETE CASCADE,
    FOREIGN KEY (id_comprador) REFERENCES Usuario(id) ON DELETE CASCADE
);
CREATE TABLE Venta(
    id BIGSERIAL PRIMARY KEY,
    id_vendedor BIGINT,
    id_cliente BIGINT, 
    id_producto BIGINT, 
    is_done BOOLEAN, 
    is_reserved BOOLEAN, 
    calificacion FLOAT,
    fecha_inicio TIMESTAMP,
    fecha_final TIMESTAMP,
    state VARCHAR(30),
    FOREIGN KEY (id_cliente) REFERENCES Usuario(id) ON DELETE CASCADE, 
    FOREIGN KEY (id_vendedor) REFERENCES Vendedor(id) ON DELETE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES Producto(id) ON DELETE CASCADE
);
CREATE TABLE Venta_Guardado(
    id BIGSERIAL PRIMARY KEY,
    id_usuario BIGINT,
    id_venta BIGINT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (id_venta) REFERENCES Venta(id) ON DELETE CASCADE
);
CREATE TABLE Mensaje(
    id BIGSERIAL PRIMARY KEY, 
    id_receptor BIGINT, 
    id_emisor BIGINT, 
    asunto TEXT, 
    cuerpo TEXT, 
    fecha TIMESTAMP, 
    estado VARCHAR(20),
    FOREIGN KEY (id_receptor) REFERENCES Usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (id_emisor) REFERENCES Usuario(id) ON DELETE CASCADE

);
CREATE TABLE Reporte(
    id BIGSERIAL PRIMARY KEY, 
    id_usuario BIGINT, 
    id_venta BIGINT, 
    detalles TEXT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id),
    FOREIGN KEY (id_venta) REFERENCES Venta(id)
);