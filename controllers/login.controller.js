const User = require("../models/user.model");
const Role = require("../models/role.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const roles = await Role.findOne({ where: { id_role: user.RoleIdRole } });
    const desCryptPassword = bcrypt.compareSync(password, user.password);

    if (!desCryptPassword)
      return res.status(404).json({ error: "Credenciales Incorrecta" });

    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    const token = jwt.sign(
      { name: user.name, email: user.email, role: roles.role_name },
      "secret",
      { expiresIn: "1h" }
    );
    // Cookie
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000,
    });
    const decode = jwt.verify(token, "secret");

    // JWT
    res.json({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      role: roles.role_name,
      token: token,
      expiresIn: decode.exp,
    });

    next();
  } catch (error) {
    console.error("Error al encontrar el usuario:", error);
    res.status(500).json({ error: "Error al encontrar el usuario" });
  }
};

const logoutUser = (req, res) => {
  res.cookie("token", "", { maxAge: 0 });
  res.json("Cookie has been deleted!");
};
module.exports = { loginUser, logoutUser };
