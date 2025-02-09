const Blog = require("../models/blog.model");

// Crear un nuevo blog
const createBlog = async (req, res) => {
  try {
    const { name, description, link } = req.body;
    // Obtenemos la URL o el nombre del archivo de la imagen subida a S3
    const image = req.file?.location || req.file?.key; // Usamos `location` para la URL directa desde S3

    if (!image) {
      return res
        .status(400)
        .json({ msg: "Debe cargar una imagen para el blog." });
    }

    await Blog.create({
      name,
      description,
      image,
      link,
    });

    res.json({ msg: "Blog creado exitosamente!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Hubo un error al crear el blog." });
  }
};

// Obtener todos los blogs
const getBlog = async (req, res) => {
  try {
    const allBlog = await Blog.findAll();
    res.json(allBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Hubo un error al obtener los blogs." });
  }
};

// Obtener un blog por ID
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id);
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ msg: "Blog no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Hubo un error al obtener el blog." });
  }
};

// Eliminar un blog
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id);
    if (blog) {
      await blog.destroy();
      res.json({ msg: "Blog eliminado exitosamente!" });
    } else {
      res.status(404).json({ msg: "Blog no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Hubo un error al eliminar el blog." });
  }
};

// Editar un blog
const editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, link } = req.body;
    const image = req.file?.location || req.file?.key; // Usamos `location` para la URL directa desde S3

    const blog = await Blog.findByPk(id);
    if (blog) {
      await blog.update({
        name,
        description,
        image,
        link,
      });
      res.json({ msg: "Blog actualizado exitosamente!" });
    } else {
      res.status(404).json({ msg: "Blog no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Hubo un error al actualizar el blog." });
  }
};

module.exports = { createBlog, getBlog, getBlogById, deleteBlog, editBlog };
