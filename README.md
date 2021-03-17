##REQUISITOS
- npm
- node.js
- docker
##DESENVOLVIMENTO
Primeiramente instale as depedências
```bash
npm install - y
```
Enquanto as dependências são instaladas, instale o MySQL no docker crie o volume e acesse o container
```bash
docker volume create mysql-volume && docker run --name container-mysql -p3306:3306 -v mysql-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=12345 -d mysql/mysql-server:latest && docker exec -it container-mysql bash
```
Depois crie a tabela postapp no MySQL server
```
mysql -u root -p && CREATE DATABASE postapp;
```
Agora rode o comando na pasta raíz do programa e entre na porta localhost:8081, e na rota /add
```bash
node index.js
```
##TECNOLOGIAS USADAS
- express
- handlerbars
- MySQL
- node.js
- docker