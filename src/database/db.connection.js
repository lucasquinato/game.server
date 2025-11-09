import { sequelize } from "./db.sequelize.js";

/**
 * @param {{ force: boolean }} options Opções de sincronização das tabelas.
 */
export async function connection(options) {
    try {
        await sequelize.authenticate();
        await sequelize.sync(options);

    } catch (error) {
        await sequelize.close();
        throw error;
    }
}