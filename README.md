# DevCamper API

> Backend API for DevCamper application, which is a bootcamp directory website

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## Demo

The API is live at [devcamper.io](https://devcamper.io)

Extensive documentation with examples [here](https://documenter.getpostman.com/view/9277819/TVKEXx8c)

- Version: 1.0.0
- License: MIT
- Author: Mia Dugas

Vanilla JavaScript and a few add on's:

- Node, npm & express

- Morgan.js - logger
  https://www.npmjs.com/package/morgan

- MongoDB Atlas
  https://www.mongodb.com/cloud/atlas#:~:text=MongoDB%20Atlas%20is%20the%20global,data%20security%20and%20privacy%20standards.

- MongoDB Compass
  https://www.mongodb.com/products/compass

- Mongoose
  https://www.npmjs.com/package/mongoose

- Colors (for console)
  https://www.npmjs.com/package/colors

- Regex for URL validation
  https://regexr.com/39nr7

- Slugify
  https://www.npmjs.com/package/slugify

- Node-Geocoder
  https://www.npmjs.com/package/node-geocoder

- Mapquest Developer
  https://developer.mapquest.com/

- JWT Web Token
  https://jwt.io/

- Cookie Parser
  https://www.npmjs.com/package/cookie-parser

- Node Mailer
  https://nodemailer.com/

-NoSQL injection
https://www.npmjs.com/package/express-mongo-sanitize

-Helmet - cross site scripting protection
https://www.npmjs.com/package/helmet

-XXS Clean
https://www.npmjs.com/package/xss-clean

-CORS
https://www.npmjs.com/package/cors

DocGen

Docs
URL
https://documenter.getpostman.com/view/9277819/TVKEXx8c
