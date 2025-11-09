import { numberVerify } from "../handlers/number.verify.js";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(

    // Credenciais de acesso ao banco:
    process.env.DATABASE_MYSQL_SCHEMA,
    process.env.DATABASE_MYSQL_USERNAME,
    process.env.DATABASE_MYSQL_PASSWORD,

    {

        // Configurações de acesso:
        port: numberVerify(
            process.env.DATABASE_MYSQL_PORT_NUMBER,
            "Banco de Dados | Obtenção da porta.", {
                min: 1024,
                max: 9999,
            },
        ),

        host: process.env.DATABASE_MYSQL_HOSTNAME,
        timezone: "-03:00",
        dialect: "mysql",

    },

);