import { Router } from "express";
import {  get_caracter} from "../controllers/getCaracters.js";
const router = Router();

router.route('/')
    .get(get_caracter)


export default router;