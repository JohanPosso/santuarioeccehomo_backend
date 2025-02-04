const InformacionController = require("../controllers/informacion.controller");
const PersonalController = require("../controllers/personal.controller");
const uploadFileMiddleware = require("../middleware/uploadFile.middleware");
const Servicio = require("../controllers/servicios.controller");
const BlogController = require("../controllers/blog.controller");
const sendMail = require("../controllers/sendEmail.controller");
const loginController = require("../controllers/login.controller");
const userController = require("../controllers/user.controller");
const roleController = require("../controllers/role.controller");

function allRoutes(app) {
  const router = require("express").Router();
  // POST
  router.post("/token", loginController.loginUser);
  router.post("/crear-role", roleController.createRole);
  router.get("/find-role", roleController.getRoles);

  /*
    User Management Routes
  */
  router.post(
    "/crear",
    // tokenMiddleware,
    // roleMiddleware,
    userController.createUser
  );

  router.post(
    "/crear-data",
    // uploadFileMiddleware.array("images", 2),
    InformacionController.createInformacion
  );
  router.post(
    "/crear-personal",
    uploadFileMiddleware.single("image"),
    PersonalController.createPersonal
  );
  router.post("/crear-servicio", Servicio.createServicio);

  router.post(
    "/createblog",
    uploadFileMiddleware.single("image"),
    BlogController.createBlog
  );
  router.post("/sendmail", sendMail);
  // GET
  router.get("/find-data", InformacionController.getInformacion);
  router.get("/find-personal", PersonalController.getPersonal);
  router.get("/image/:filename", PersonalController.getImage);
  router.get("/find-servicio", Servicio.getServicios);
  router.get("/findblog", BlogController.getBlog);
  router.get("/findblog/:id", BlogController.getBlogById);
  //PUT
  router.put(
    "/edit-data",
    // uploadFileMiddleware.array("images", 1),
    InformacionController.editeInformacion
  );
  router.put("/update-servicio/:id", Servicio.updateServicio);
  router.put(
    "/editblog/:id",
    uploadFileMiddleware.single("image"),
    BlogController.editBlog
  );
  // DELETE
  router.delete("/delete-servicio/:id", Servicio.deleteServicio);
  router.delete("/deleteblog/:id", BlogController.deleteBlog);

  app.use(router);
}

module.exports = allRoutes;
