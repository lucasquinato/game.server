import express from "express";
import cors from "cors";

import { numberVerify } from "./handlers/number.verify.js";
import { connection } from "./database/db.connection.js";
import { routes } from "./modules/routes.js";

const port = numberVerify(
    process.env.PORT_ENV,
    "Servidor | Obtenção da porta.", {
        min: 1024,
        max: 9999,
    },
);

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);

try {
    // Aguarda as conexões com o banco de dados:
    await connection({ force: true });
    // Inicia o servidor para requisições:
    server.listen(port, () => console.log("Servidor ON | Porta:", port));

} catch (error) {
    console.error(error);
    process.exit(1);
}