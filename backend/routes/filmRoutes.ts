import { Router } from "express";

import { getAllFilms, getFilmsWithPagination } from '../controllers/filmControllers'


const router = Router();


router.get('/get-all-films', getAllFilms);
router.get('/get-all-films/:page', getFilmsWithPagination);


export default router;