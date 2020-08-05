import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

// método que faz o app "ouvir" a requisição http eo parametro é a porta
app.listen(3333);