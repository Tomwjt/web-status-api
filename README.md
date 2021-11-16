# web-status-api

## Project setup

Install docker from the following link

```
https://docs.docker.com/get-docker/
```
Run an instance of mysql in a docker container exposed through port 3306

```
docker run -p 3306:3306 --name web-status-mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=web-status-db -d mysql:5.7
```

To connect directly to your local container
```
docker container exec -it web-status-mysql bash
```
To connect to the database
```
mysql -u root -p
password
```

Install dependencies

```
npm install
```

### Runs app
```
npm start
```