CREATE TABLE Insignia(
    id_insignia BIGSERIAL PRIMARY KEY, 
    nombre VARCHAR(44), 
    descripcion TEXT, 
    rareza_en_pordentaje NUMBER,
    tipo VARCHAR(44), 
    nivel VARCHAR(44), 
    imagen TEXT 
);  
CREATE TABLE Organizacion(
    id_organizacion BIGSERIAL PRIMARY KEY, 
    userName VARCHAR(100), 
    id_usuario_lider BIGINT, 
    password TEXT, 
    email VARCHAR(200), 
    alternative_email VARCHAR(200), 
    no_telefono VARCHAR(30),
    prof_pic TEXT, 
    linkedin TEXT, 
    descripcion TEXT, 
    isActive BOOLEAN, 
    FOREIGN KEY (id_usuario_lider) REFERENCES Usuario(id), 
);
CREATE TABLE Organizacion_Colaborador(
    id_relacion_organizacion_colaborador BIGSERIAL PRIMARY KEY, 
    id_organizacion BIGINT, 
    id_usuario BIGINT, 
    rol VARCHAR(100),
    FOREIGN KEY (id_organizacion) REFERENCES cobro(id) ON DELETE CASCADE,
);
CREATE TABLE Insgnia_Organizacion(
    id_relacion_organzacion_insignia BIGSERIAL PRIMARY KEY, 
    id_ins

);