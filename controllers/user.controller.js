const User = require("../models/user.model");
const Role = require("../models/role.model");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  let { name, lastname, email, password } = req.body;
  const passwordstring = String(password);
  const passwordCrypt = bcrypt.hashSync(passwordstring, 10); // Cifrar el password

  /*  
roles:
      {
      'admin': 1,
      'user': 2,
      'invited':3
      }
*/
  const createUser = User.create({
    name,
    lastname,
    email,
    RoleIdRole: 2,
    password: passwordCrypt,
  })

    .then((createUser) => {
      res.json({ message: "Usuario creado exitosamente", createUser });
    })
    .catch((err) => {
      res.json(err);
    });
};

const saludo = async (req, res) => {
  const todo = await User.findAll()
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.json(err);
    });
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: {
        id,
      },
    });
    res.json({ msg: "Usuario eliminado exitosamente!" });
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, RoleIdRole = 2, password } = req.body;
    const response = await User.update(
      { name, email, RoleIdRole, password },
      {
        where: {
          id,
        },
      }
    );
    res.json({ msg: "Usuario editado exitosamente!", response });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, saludo, deleteUser, editUser };
