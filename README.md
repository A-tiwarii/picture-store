
# Picture-Store

Simple REST API to post images in database with meta data like price, tags. Also search, edit, delete the existing images with id or tags




## Installation

Install my-project with npm

Installation
$ npm install
Running the app
## development
$ npm run start

## watch mode
$ npm run start:dev

## production mode
$ npm run start:prod
Test
## unit tests
$ npm run test

## e2e tests
$ npm run test:e2e

## test coverage
$ npm run test:cov
    
## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform


## API Reference

#### Get all items

```http
  GET :- /localhost:5000/picture/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET :- /localhost:5000/picture/search/tag
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### POST item

```http
  POST :-/localhost:5000/picture/upload
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `picture` | `path`   | **Required**. path of the image   |
| `titile`  | `string` | **Required**. title of item to post |
| `artist`      | `string` | **Required**. title of item to post |
| `price`      | `Number` | **Required**. price of item to post |





## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Tech Stack

 `NestJs` `Mongoose` `multer`

`Node` `Express`


## Documentation

[Documentation](https://linktodocumentation)


## Authors

- [@A-Tiwarii](https://www.github.com/octokatherine)


## Feedback

If you have any feedback, please reach out to us at famnntiwari@gmail.com

