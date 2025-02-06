const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Directorio de destino donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Nombrar el archivo
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
