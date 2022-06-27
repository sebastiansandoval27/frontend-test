# Front end Test - MELI!
Projecto desarrollado para la prueba: "Test práctico - Front End".

## Herramientas

- HTML
- CSS
- JS
- axios: ^0.27.2
- express: ^4.18.1
- react: ^18.2.0
- react-dom: ^18.2.0
- react-number-format: ^4.9.3
- react-router-dom: ^5.3.3
- sass: ^1.53.0,
- nodejs: ^16.15.0

## Uso
- ### Clonar repositorio:
	- git clone https://github.com/sebastiansandoval27/frontend-test.git
	- Ingresar a la carpeta: **frontend-test**
	- Abrir una ventana de la consola de comandos de preferencia y ejecutar **npm install** para instalar las dependencias.
- ### Iniciar servidor Node:
		- Abrir una ventana de la consola de comandos de preferencia.
		- Ejecutar node src/server/index.js
		- Verá en la consola un mensaje como el siguiente: "Listening on port 8080"
- ### Iniciar cliente:
		- Abrir otra ventana de la consola de comandos de preferencia.
		- Ejecutar **npm start**.
		- Se abrirá una ventana del navegador y podrá usar la aplicación.

# Funcionalidad

### La aplicación tiene el siguiente funcionamiento:
- Pantalla inicial **/** muestra el buscador y un mensaje de bienvenida.
- Pantalla de búsqueda **/items?search=:query**, muestra una lista de 4 elementos encontrados con base en la query de la url.
- Pantalla de detalle **/items/:id**, muestra el detalle de un producto en específico, tomando como base el id.
- El "Backend", realizado con Node js y express, realiza la manipulación de los datos de la api de MELI, y los devuelve en el formato deseado.