import express from "express";

const router = express.Router();

import { NameController } from "../controllers";

const { getName, postName, updateName, deleteName } = NameController;

router.route("/:name").get(getName).put(updateName).delete(deleteName);

router.route("/").post(postName);

export default router;
