const Informacion = require("../models/Informacion.model");

const createInformacion = async (req, res) => {
  try {
    const logo = req.files[0] ? req.files[0].filename : null;
    const imagen_sec1 = req.files[1] ? req.files[1].filename : null;
    const imagen_sec2 = req.files[2] ? req.files[2].filename : null;

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

    await Informacion.create({
      seccion_1titulo,
      seccion_1descripcion,
      imagen_sec1,
      correo,
      numero,
      seccion_2titulo,
      seccion_2descripcion,
      imagen_sec2,
      ubicacion,
      mision,
      vision,
      sobrenosotros,
      otro,
      logo,
      facebook,
      instagram,
      twitter,
      resena,
    });

    res.json({ msg: "Información creada exitosamente!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al crear la información" });
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
    console.log("Cuerpo de la petición:", req.body);
    console.log("Archivos recibidos:", req.files);

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

    const files = req.files || {};
    const logo = files.logo ? files.logo[0].filename : null;
    const imagen_sec1 = files.imagen_sec1
      ? files.imagen_sec1[0].filename
      : null;
    const imagen_sec2 = files.imagen_sec2
      ? files.imagen_sec2[0].filename
      : null;

    // Encuentra la información actual para poder actualizarla
    const informacion = await Informacion.findOne({ where: { id: 1 } });
    if (!informacion) {
      return res.status(404).json({ message: "No se encontró la información" });
    }

    // Reemplaza las imágenes solo si se han subido nuevas
    const updatedData = {
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
      logo: logo || informacion.logo, // Si no hay nuevo logo, mantén el anterior
      imagen_sec1: imagen_sec1 || informacion.imagen_sec1, // Lo mismo para la imagen de la sección 1
      imagen_sec2: imagen_sec2 || informacion.imagen_sec2, // Lo mismo para la imagen de la sección 2
    };

    // Actualiza la información
    await Informacion.update(updatedData, { where: { id: 1 } });

    return res
      .status(200)
      .json({ message: "Información actualizada correctamente" });
  } catch (error) {
    console.error("Error al actualizar la información:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
module.exports = { createInformacion, getInformacion, editeInformacion };
