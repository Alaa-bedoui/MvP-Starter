const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("", itemController.selectAll);
router.get("/getSokken/:balasid",itemController.selectSokken)
router.get("/getOne/:name/:password",itemController.getOne);
router.post("/:balas_idbalas",itemController.addone);
router.put('/:idowners',itemController.update);
router.delete('/:iditem/:balasid',itemController.fasakhSokken)




module.exports = router;
