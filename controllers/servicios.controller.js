const Servicios = require("../models/servicios.model");

const createServicio = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body; // No recibas 'id'
    const nuevoServicio = await Servicios.create({ nombre, descripcion }); // Sequelize generará el ID automáticamente
    res.status(201).json(nuevoServicio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getServicios = async (req, res) => {
  try {
    const servicios = await Servicios.findAll();
    res.json(servicios);
  } catch (error) {
    console.log(error);
  }
};
const updateServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Servicios.update(req.body, { where: { id } });

    if (updated) {
      res.json({ msg: "Servicio actualizado exitosamente!" });
    } else {
      res.status(404).json({ msg: "Servicio no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error actualizando el servicio" });
  }
};

const deleteServicio = async (req, res) => {
  try {
    const { id } = req.params;
    await Servicios.destroy({ where: { id } });
    res.json({ msg: "Servicio eliminado exitosamente!" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createServicio,
  getServicios,
  updateServicio,
  deleteServicio,
};
