import { Router } from "express";

import {getAllFilms} from '../controllers/filmControllers'


const router = Router();


router.get('/get-all-films', getAllFilms);


export default router;