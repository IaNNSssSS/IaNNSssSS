import { Router } from "express";
import {createTable, insertMembros, updateMembros, selectMembros, selectMembro, deleteMembro} from "./controller/Membros.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({
        "statusCode": 0,
        "msg": "Api Rodando"
    })
})

router.get("/MEMBROS", selectMembros);
router.get("/MEMBRO", selectMembro);
router.post("/MEMBROS", insertMembros);
router.put("/MEMBROS", updateMembros);
router.delete("/MEMBRO", deleteMembro);

export default router;