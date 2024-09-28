const express = require("express");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");
const uploadMiddleware = require("../utils/handleStorage");
const {registerCtrl, loginCtrl, verifyToken, createLogout} = require("../controllers/auth")



router.post("/register", uploadMiddleware.single("foto"), validatorRegister, registerCtrl)
router.post("/login", validatorLogin, loginCtrl)
router.get('/verify-token', verifyToken);
router.post("/logout", createLogout);



module.exports = router;



// http://localhost:3010/api/auth/register
// http://localhost:3010/api/auth/login 
// http://localhost:3010/api/auth/logout



/* req.file es donde Multer almacena la información del archivo subido.
req.body contiene los demás campos del formulario. */





