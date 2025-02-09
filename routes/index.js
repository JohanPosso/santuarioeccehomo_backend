const express = require("express");
const InformacionController = require("../controllers/informacion.controller");
const GaleriaController = require("../controllers/galeria.controller");
const uploadFileMiddleware = require("../middleware/uploadFile.middleware");
const Servicio = require("../controllers/servicios.controller");
const BlogController = require("../controllers/blog.controller");
const sendMail = require("../controllers/sendEmail.controller");
const loginController = require("../controllers/login.controller");
const userController = require("../controllers/user.controller");
const roleController = require("../controllers/role.controller");

function allRoutes(app) {
  const router = express.Router();

  // 🟢 Autenticación y roles
  router.post("/token", loginController.loginUser);
  router.post("/crear-role", roleController.createRole);
  router.get("/find-role", roleController.getRoles);

  // 🟢 Gestión de usuarios
  router.post("/crear", userController.createUser);
  router.get("/get-usuarios", userController.verUsers);
  router.delete("/delete-usuarios/:id", userController.deleteUser);
  router.put("/edit-usuarios/:id", userController.editUser);

  // 🟢 Rutas con subida de archivos
  router.post(
    "/crear-data",
    uploadFileMiddleware.array("image", 3),
    InformacionController.createInformacion
  );
  router.post(
    "/subir-foto",
    uploadFileMiddleware.single("image"),
    GaleriaController.uploadGaleria
  );
  router.post("/crear-servicio", Servicio.createServicio);
  router.post(
    "/createblog",
    uploadFileMiddleware.single("image"),
    BlogController.createBlog
  );

  // 🟢 Otras rutas
  router.post("/sendmail", sendMail);

  // 🟢 Rutas GET
  router.get("/find-data", InformacionController.getInformacion);
  router.get("/find-galeria", GaleriaController.getGaleria);
  router.get("/find-servicio", Servicio.getServicios);
  router.get("/findblog", BlogController.getBlog);
  router.get("/findblog/:id", BlogController.getBlogById);

  // 🟢 Rutas PUT
  router.put(
    "/edit-data",
    uploadFileMiddleware.fields([
      { name: "logo", maxCount: 1 },
      { name: "imagen_sec1", maxCount: 1 },
      { name: "imagen_sec2", maxCount: 1 },
    ]),
    InformacionController.editeInformacion
  );
  router.put("/update-servicio/:id", Servicio.updateServicio);
  router.put(
    "/editblog/:id",
    uploadFileMiddleware.single("image"),
    BlogController.editBlog
  );

  // 🟢 Rutas DELETE
  router.delete("/delete-servicio/:id", Servicio.deleteServicio);
  router.delete("/deleteblog/:id", BlogController.deleteBlog);

  app.use(router);
}

module.exports = allRoutes;
