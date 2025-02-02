const Informacion = require("../models/Informacion.model");

const createInformacion = (req, res) => {
  try {
    // const logo = req.files[0].filename;
    const {
      seccion_1titulo,
      seccion_1descripcion,
      correo,
      numero,
      seccion_2titulo,
      seccion_2descripcion,
      ubicacion,
      mision,
      vision,
      sobrenosotros,
      otro,
      facebook,
      instagram,
      twitter,
      resena,
    } = req.body;

    Informacion.create({
      seccion_1titulo,
      seccion_1descripcion,
      correo,
      numero,
      seccion_2titulo,
      seccion_2descripcion,
      ubicacion,
      mision,
      vision,
      sobrenosotros,
      otro,
      // logo,
      facebook,
      instagram,
      twitter,
      resena,
    });
    res.json({ msg: "Informacion creada exitosamente!" });
  } catch (error) {
    console.log(error);
  }
};

const getInformacion = async (req, res) => {
  try {
    const informacion = await Informacion.findAll();
    res.json(informacion);
  } catch (error) {
    console.log(error);
  }
};

const editeInformacion = async (req, res) => {
  try {
    const {
      seccion_1titulo,
      seccion_1descripcion,
      correo,
      numero,
      seccion_2titulo,
      seccion_2descripcion,
      ubicacion,
      mision,
      vision,
      sobrenosotros,
      otro,
      facebook,
      instagram,
      twitter,
      resena,
    } = req.body;

    const informacionId = await Informacion.findOne({ where: { id: 1 } });
    const id = parseInt(informacionId.id, 10);
    if (!id) {
      return res.status(404).json({ msg: "Informacion no encontrada" });
    }

    await Informacion.update(
      {
        seccion_1titulo,
        seccion_1descripcion,
        correo,
        numero,
        seccion_2titulo,
        seccion_2descripcion,
        ubicacion,
        mision,
        vision,
        sobrenosotros,
        otro,
        facebook,
        instagram,
        twitter,
        resena,
      },
      { where: { id } }
    );

    res.json({ msg: "Informacion editada exitosamente!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al editar la informacion" });
  }
};

module.exports = { createInformacion, getInformacion, editeInformacion };
