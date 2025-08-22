import { Router } from "express";
import { handlingFromFlask } from "../controller/handlingFromFlask";

const router = Router();

router.route('/tes').post(handlingFromFlask);


export default router;