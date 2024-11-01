require('express-async-errors');

const migrationsRun = require("./database/sqlite/migrations")
const express = require('express');
const app = express();

const AppError = require('./utils/AppError.js')
const routes = require('./routes/index.js');


app.use(express.json());
app.use(routes);

migrationsRun();

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      })
    }
  
    console.error(error)
  
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error'
    })
  })
  

const PORT = 4444;
app.listen(PORT, () => console.log(`Server is runing on Port ${PORT}`));
