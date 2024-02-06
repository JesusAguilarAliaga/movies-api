# API de Películas

Esta API proporciona endpoints para gestionar información relacionada con películas, géneros, actores y directores. A continuación, se describen los modelos y las operaciones disponibles.

## Modelos

### Genres

- `name`: Nombre del género.

### Actors

- `firstName`: Nombre del actor.
- `lastName`: Apellido del actor.
- `nationality`: Nacionalidad del actor.
- `image`: URL de la imagen del actor.
- `birthday`: Fecha de nacimiento del actor.

### Directors

- `firstName`: Nombre del director.
- `lastName`: Apellido del director.
- `nationality`: Nacionalidad del director.
- `image`: URL de la imagen del director.
- `birthday`: Fecha de nacimiento del director.

### Movies

- `name`: Nombre de la película.
- `image`: URL de la imagen de la película.
- `synopsis`: Sinopsis de la película.
- `releaseYear`: Año de lanzamiento de la película.

## Relaciones

- Cada película puede tener muchos actores, muchos directores y puede pertenecer a muchos géneros.

## Endpoints CRUD

### Genres

- **GET** `/genres`: Obtener todos los géneros.
- **GET** `/genres/:id`: Obtener un género específico.
- **POST** `/genres`: Crear un nuevo género.
- **PUT** `/genres/:id`: Actualizar un género existente.
- **DELETE** `/genres/:id`: Eliminar un género existente.

### Actors

- **GET** `/actors`: Obtener todos los actores.
- **GET** `/actors/:id`: Obtener un actor específico.
- **POST** `/actors`: Crear un nuevo actor.
- **PUT** `/actors/:id`: Actualizar un actor existente.
- **DELETE** `/actors/:id`: Eliminar un actor existente.

### Directors

- **GET** `/directors`: Obtener todos los directores.
- **GET** `/directors/:id`: Obtener un director específico.
- **POST** `/directors`: Crear un nuevo director.
- **PUT** `/directors/:id`: Actualizar un director existente.
- **DELETE** `/directors/:id`: Eliminar un director existente.

### Movies

- **GET** `/movies`: Obtener todas las películas con detalles de géneros, actores y directores.
- **GET** `/movies/:id`: Obtener una película específica con detalles.
- **POST** `/movies`: Crear una nueva película.
- **PUT** `/movies/:id`: Actualizar una película existente.
- **DELETE** `/movies/:id`: Eliminar una película existente.

## Endpoints Adicionales

### Géneros de Películas

- **POST** `/movies/:id/genres`: Modificar los géneros de una película.
  - Body: Arreglo de números representando los ID de los géneros.
  - Retorna los géneros recién añadidos en un arreglo.

### Actores de Películas

- **POST** `/movies/:id/actors`: Modificar los actores de una película.
  - Body: Arreglo de números representando los ID de los actores.

### Directores de Películas

- **POST** `/movies/:id/directors`: Modificar los directores de una película.
  - Body: Arreglo de números representando los ID de los directores.

**Nota:** Asegúrate de utilizar la autenticación adecuada y seguir las mejores prácticas de seguridad al interactuar con estos endpoints.
