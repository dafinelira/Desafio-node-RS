const AppError = require('../utils/AppError')

//fazer a senha criptografada
//const {hash, compare} = require("bcryptjs");


class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    if (!name) {
      throw new AppError('Nome é obrigatório')
    }

    response.status(201).json({ name, email, password })
  }
}

module.exports = UsersController