# Next.js OpenJira APP

To run localy you needs database

```
docker-compose up -d
```

- -d means **detached**

- Mongo local URL

```
mongodb://localhost:27017/entriesdb
```

## Set enviroment variables

Rename **.env.template** to **.env**

## Populate the database with test information

```
http://localhost:3000/api/seed
```
