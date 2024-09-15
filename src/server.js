const express = require('express');
const app = express();

const AppError = require('./utils/AppError')
const routes = require('./routes/index');

//app.use(express.json());
//app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is runing on Port ${PORT}`));
