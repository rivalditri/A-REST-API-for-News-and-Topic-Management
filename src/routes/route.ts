import { Router } from "express";

import { createArticle, updateArticle, getAllArticle, deleteArticle, getArticleById} from "../controllers/articleController";

const router = Router();

router.post("/newArticle", createArticle);
router.get("/", getAllArticle);
router.get("/:id", getArticleById);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);


export default router;