"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  // store
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      return res.json(novoUser);
    } catch (error) {
      return res.status(401).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      //      const { id } = req.params;
      const user = await _User2.default.findByPk(req.params.id, { attributes: ['id', 'nome', 'email'] });
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      if (!req.userId) {
        return res.status(400).json({
          errors: ['Id não enviado.'],
        });
      }
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['ID não encontrado'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(401).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // delete
  async delete(req, res) {
    try {
      if (!req.userId) {
        return res.status(400).json({
          errors: ['Id não enviado.'],
        });
      }
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['ID não encontrado'],
        });
      }
      await user.destroy();
      return res.json(null);
    } catch (error) {
      return res.status(401).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

exports. default = new UserController();
