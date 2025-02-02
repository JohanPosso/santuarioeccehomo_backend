const Personal = require("../models/personal.model");
const path = require("path");
const createPersonal = async (req, res) => {
  try {
    await Personal.bulkCreate(req.body);
    res.json({ msg: "Personal creado exitosamente!" });
  } catch (error) {
    console.log(error);
  }
};

const getImage = (req, res) => {
  try {
    const filename = req.params.filename;
    res.sendFile(path.resolve(__dirname, "../", "uploads", filename));
    console.log(filename);
  } catch (error) {
    console.log(error);
  }
};
const getPersonal = async (req, res) => {
  try {
    const allPersonal = await Personal.findAll();
    res.json(allPersonal);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createPersonal, getPersonal, getImage };
