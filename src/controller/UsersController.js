const { EmptyResultError } = require("sequelize");
const { UsersService } = require("../services/index");
const usersService = new UsersService();
class UsersController {
  static async findAllUsers(req, res) {
    try {
      const users = await usersService.findAll();
      res.status(200).json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async findOneUser(req, res) {
    try {
      const { id } = req.params;
      const users = await usersService.findById(id);

      if (users != null) {
        res.status(200).json(users);
      } else {
        throw new EmptyResultError("Usuário Não Encontrado");
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async createUser(req, res) {
    try {
      const users = await usersService.create(req.body);
      res.status(200).json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const users = await usersService.update(req.body, id);
      res.status(200).json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await usersService.login(email, password);
      if (user !== null) {
        res.status(200).json(user);
      } else {
        throw new Error("Wrong Password");
      }
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

module.exports = UsersController;
