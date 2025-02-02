const Servicios = require("../models/servicios.model");

const createServicio = async (req, res) => {
  try {
    await Servicios.create(req.body);
    res.json({ msg: "Servicio creado exitosamente!" });
  } catch (error) {
    console.log(error);
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
    await Servicios.update(req.body, { where: { id } });
    res.json({ msg: "Servicio actualizado exitosamente!" });
  } catch (error) {
    console.log(error);
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
