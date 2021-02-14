import express from "express";
import { NameController } from "../controllers";

const { getName, postName, updateName, deleteName } = NameController;
const router = express.Router();

router.route("/:name").get(getName).put(updateName).delete(deleteName);
router.route("/").post(postName);

export default router;
