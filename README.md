# Server Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command


# Dependencias utilizadas.

1. npm i cors jsonwebtoken bcryptjs class-validator
2. npm i -D ts-node-dev typescript @types/bcryptjs @types/cors @types/jsonwebtoken @types/express @types/node

# Notas de Uso

En el archivo de data-source.ts encontraras la conexion a la base de datos MySQL la cual yo tengo por nombre prueba, puedes crear una nueva base de datos y le agregas los campos que encuentras en la carpeta entity dentro del archivo User.ts.
Este proyecto se configuro para que solo los usuarios con el rol 'admin' puedan modificar la base de datos, entonces debes crear un primer usuario con el rol admin para poder trabajar desde este en la creacion de nuevos usuarios.

Cualquier inquietud pueden escribirme al correo electronico: cristian.bravoq@hotmail.com
