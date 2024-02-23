const express= require("express");
const router=express.Router();
const employee= require("../controllers/employees")


router.route("/").get(employee.getAllemployee);
router.route("/addemployee").post(employee.addemployee);
router.route("/:id").get(employee.getemployeeByID);
router.route("/editemployee/:id").post(employee.editemployee)


module.exports=router;