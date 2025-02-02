const Blog = require("../models/blog.model");
const createBlog = (req, res) => {
  try {
    const { name, description, active, link } = req.body;
    const image = req.file?.filename;
    Blog.create({
      name,
      description,
      image,
      active,
      link,
    });
    res.json({ msg: "Blog creado exitosamente!" });
  } catch (error) {
    console.log(error);
  }
};

const getBlog = async (req, res) => {
  try {
    const allBlog = await Blog.findAll();
    res.json(allBlog);
  } catch (error) {
    console.log(error);
  }
};
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
    console.log(error);
  }
};
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
    console.log(error);
  }
};

const editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, active, link } = req.body;
    const image = req.file?.filename;
    const blog = await Blog.findByPk(id);
    if (blog) {
      await blog.update({
        name,
        description,
        image,
        active,
        link,
      });
      res.json({ msg: "Blog actualizado exitosamente!" });
    } else {
      res.status(404).json({ msg: "Blog no encontrado" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createBlog, getBlog, getBlogById, deleteBlog, editBlog };
