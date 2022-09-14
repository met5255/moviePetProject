import { RequestHandler } from "express"
import axios from "axios"
import { addAbortSignal } from "stream";

const headers:HeadersInit = {
    'Content-Type':"application/json",
    'mode': 'cors'
}

export const getAllFilms:RequestHandler = async (req, res, next) => {
    const films =  await axios.get('https://raw.githubusercontent.com/erik-sytnyk/movies-list/master/db.json',{headers});
    res.status(200).send(films.data);
}