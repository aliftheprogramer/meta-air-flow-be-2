import { Router } from "express";
import { tesajah } from "../controller/tes";

const router = Router();

router.route('/tes').get(tesajah);

router.route('').get((req, res) => {
  res.send('Hello, API!');
});
export default router;