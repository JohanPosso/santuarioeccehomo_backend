const Role = require("../models/role.model");

const createRole = async (req, res) => {
  try {
    const { name } = req.body;
    const role_name = await Role.create({ name });
    res.status(201).json(role_name);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findByPk(id);
    if (role) {
      res.status(200).json(role);
    } else {
      res.status(404).json({ error: "Role not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const [updated] = await Role.update({ name }, { where: { id } });
    if (updated) {
      const updatedRole = await Role.findByPk(id);
      res.status(200).json(updatedRole);
    } else {
      res.status(404).json({ error: "Role not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Role.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Role not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRole,
  getRoles,
  getRoleById,
  updateRole,
  deleteRole,
};
