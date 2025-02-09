const Galeria = require("../models/galeria");

const uploadGaleria = async (req, res) => {
  try {
    const imageUrl = req.file.location;
    const { imagen } = req.body;

    await Galeria.create({ imagen: imageUrl });

    res.json({ msg: "Imagen subida exitosamente!", imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar en la base de datos" });
  }
};

// Obtener todas las imágenes de la galería
const getGaleria = async (req, res) => {
  try {
    const images = await Galeria.findAll();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la galería" });
  }
};

module.exports = { uploadGaleria, getGaleria };
